import { useState, useEffect, useTransition, useRef } from "react";
import SearchBar from "./assets/components/SearchBar";
import UserList from "./assets/components/UserList";
import "./index.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [displayCount, setDisplayCount] = useState(5);
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  const listRef = useRef(null);
  const focusIndexRef = useRef(null); // index to scroll to

  const onChangeHandler = (e) => setSearchText(e.target.value);

  /* ==============================
     Fetch mock data
     ============================== */
  useEffect(() => {
    let isMounted = true;

    fetch("/data/MOCK_DATA.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load data");
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          setUsers(data);
          setIsFetching(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setError("Unable to load users");
          setIsFetching(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  /* ==============================
     Filter users
     ============================== */
  const filteredUsers = users.filter((user) =>
    !searchText
      ? true
      : user.first_name.toLowerCase().includes(searchText.toLowerCase())
  );

  const visibleUsers = filteredUsers.slice(0, displayCount);
  const remainingUsers = filteredUsers.length - visibleUsers.length;

  /* ==============================
     Load more users
     ============================== */
  const loadMoreUsers = () => {
    if (remainingUsers <= 0) return;

    const startIndex = displayCount; // first new user index
    focusIndexRef.current = startIndex;

    let added = 0;
    const interval = setInterval(() => {
      startTransition(() => {
        setDisplayCount((prev) => {
          if (prev >= filteredUsers.length) {
            clearInterval(interval);
            return prev;
          }

          added += 1;
          if (added >= 5) {
            clearInterval(interval);
          }

          return prev + 1;
        });
      });
    }, 150);
  };

  /* ==============================
     Scroll to newly loaded users
     ============================== */
  useEffect(() => {
    if (
      focusIndexRef.current === null ||
      !listRef.current
    ) {
      return;
    }

    const list = listRef.current;
    const target = list.querySelector(
      `[data-user-index="${focusIndexRef.current}"]`
    );

    if (target) {
      const listTop = list.getBoundingClientRect().top;
      const targetTop = target.getBoundingClientRect().top;

      // Positive offset → moves the target higher (closer to top of container).

      // Negative offset → moves the target lower (more padding below top).

      const offset = 30;

      list.scrollTo({
        top: list.scrollTop + (targetTop - listTop) - offset,
        behavior: "smooth",
      });
    }

    focusIndexRef.current = null;
  }, [displayCount]);


  /* ==============================
     Reset on search
     ============================== */
  useEffect(() => {
    startTransition(() => setDisplayCount(5));
  }, [searchText, startTransition]);

  /* ==============================
     Render
     ============================== */
  return (
    <div className="App">
      <header>
        <h1>User Search Filter</h1>
        <SearchBar searchText={searchText} onChange={onChangeHandler} />
      </header>

      <main>
        <section className="user-list" ref={listRef}>
          {error && <p>{error}</p>}

          <UserList
            users={visibleUsers}
            isLoading={isPending || isFetching}
          />

          {!isFetching && remainingUsers > 0 && (
            <div className="loading-indicator">
              <p className="remaining-users">
                {remainingUsers} more user{remainingUsers > 1 ? "s" : ""} to load
              </p>
              <button className="load-more-btn" onClick={loadMoreUsers}>
                Load More
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
