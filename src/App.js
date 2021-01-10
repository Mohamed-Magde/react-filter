import { useEffect } from "react";
import "./App.css";
import { data } from "./data/data";

let list = [...data];
function App() {
  useEffect(() => {
    console.log(list);
  }, []);
  return (
    <div className="container">
      <input type="text" placeholder="search" name="" id="" />
      <button>Add Text</button>
      <div className="text-list">
        {list.map((item) => {
          const { text, id } = item;
          return <p key={id}>{text}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
