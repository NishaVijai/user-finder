import UserCard from "./UserCard";

export default function UserList({ users, isLoading }) {
  if (!users || users.length === 0) {
    return (
      <div className="no-data-to-display">
        <p>Sorry, no match!</p>
      </div>
    );
  }

  return (
    <>
      {users.map((user, index) => (
        <div className="user-list-container" key={user.id} data-user-index={index}>
          <UserCard user={user} />
        </div>
      ))}

      {isLoading &&
        Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="user-display user-placeholder"
            style={{
              backgroundColor: "rgba(200,200,200,0.2)",
              animation: "pulse 1.2s infinite",
            }}
          ></div>
        ))}
    </>
  );
}
