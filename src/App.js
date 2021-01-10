import { useEffect, useState } from "react";
import "./App.css";
import { data } from "./data/data";

function App() {
  const [list, setList] = useState([...data]);
  useEffect(() => {
    console.log(list);
  }, [list]);

  const addRandom = () => {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 7; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    setList((prev) => [...prev, { id: prev.length + 2, text: text }]);
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
