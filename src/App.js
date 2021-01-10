import { useState } from "react";
import { data } from "./assets/data/data";
import "./assets/scss/main.css";
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

    newList = newList.filter(
      (item) =>
        item.text.toLowerCase().search(e.target.value.toLowerCase()) !== -1
    );

    setFilteredList([...newList]);
  };

  return (
    <div className="main">
      <div className="container">
        <h2 className="main-header">My Filter App</h2>
        <div className="main-search">
          <input
            type="text"
            onChange={handleChange}
            placeholder="search"
            name="desc"
            id=""
          />
          <button onClick={addRandom}>
            <i className="fas fa-plus"></i>
          </button>
        </div>
        {desc === "" ? (
          <div className="text-list">
            {list.map((item) => {
              const { text, id } = item;
              return <p key={id}>{text}</p>;
            })}
          </div>
        ) : (
          <div className="text-list">
            {filteredList.length === 0 ? (
              <h3 className="danger">Element Not Found</h3>
            ) : (
              <>
                {" "}
                {filteredList.map((item) => {
                  const { text, id } = item;
                  return <p key={id}>{text}</p>;
                })}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
