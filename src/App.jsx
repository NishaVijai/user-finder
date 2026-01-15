import { useState } from "react";
import JSONDATA from "./data/MOCK_DATA.json";
import "./index.css";

export default function App() {
  const [searchText, setSearchText] = useState("");

  const onChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  const searchTextResult = JSONDATA.filter((val) => {
    if (searchText === "") return val;
    return val.first_name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className="App">
      <h1>Search Filter</h1>
      <input type="text" placeholder="Search..." onChange={onChangeHandler} />

      {searchTextResult.map((result) => {
        return (
          <section className="userDisplay">
            <span>
              Name: {result.first_name} {result.last_name}
            </span>
            <p>Gender: {result.gender}</p>
            <p>Email: {result.email}</p>
          </section>
        );
      })}
      {Array.isArray(searchTextResult) && searchTextResult.length === 0 && (
        <p>Sorry, no match!</p>
      )}
    </div>
  );
}
