import React, { useState } from "react";

function App() {
  const [itemName, setItemName] = useState("");
  const [item, setItem] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setItemName(value);
  }

  function handleClick() {
    setItem((prevItems) => {
      // prevItems array hai
      return [...prevItems, itemName]; // purani list rahe whenever you click button and new item should add
    });
    setItemName("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={itemName} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((itemList) => {
            return <li>{itemList}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
