import { useEffect } from "react";
import "./App.css";
import { data } from "./data/data";

let list = [...data];
function App() {
  useEffect(() => {
    console.log(list);
  }, []);
  const addRandom = () => {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 7; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    console.log(text);
    return text;
  };
  return (
    <div className="container">
      <input type="text" placeholder="search" name="" id="" />
      <button onClick={addRandom}>Add Text</button>
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
