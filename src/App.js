import { useState } from "react";
import "./App.css";
import { data } from "./data/data";

function App() {
  const [list, setList] = useState([...data]);
  const [filteredList, setFilteredList] = useState([]);
  const [desc, setDesc] = useState("");

  const addRandom = () => {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 7; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    setList((prev) => [...prev, { id: prev.length + 2, text: text }]);
  };
  const handleChange = (e) => {
    setDesc(e.target.value);
    let newList = [...list];
    if (desc !== "") {
      newList = newList.filter(
        (item) => item.text.toLowerCase().search(desc.toLowerCase()) !== -1
      );
      setFilteredList([...newList]);
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        onChange={handleChange}
        placeholder="search"
        name="desc"
        id=""
      />
      <button onClick={addRandom}>Add Text</button>
      {filteredList.length === 0 || desc === "" ? (
        <div className="text-list">
          {list.map((item) => {
            const { text, id } = item;
            return <p key={id}>{text}</p>;
          })}
        </div>
      ) : (
        <div className="text-list">
          {filteredList.map((item) => {
            const { text, id } = item;
            return <p key={id}>{text}</p>;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
