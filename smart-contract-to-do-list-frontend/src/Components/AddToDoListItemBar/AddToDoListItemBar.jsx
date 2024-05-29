import React, { useEffect, useState } from "react";
import "./AddToDoListItemBar";
import styles from "./AddToDoListItemBar.module.css"

const AddToDoListItemBar = ({ toDoList, toDoListSet }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim()) {
      toDoListSet([[inputValue, false], ...toDoList]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (inputValue.trim()) {
        toDoListSet([...toDoList, [inputValue, false]]);
        setInputValue("");
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        className={styles["search-bar"]}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Add a new to-do item"
      />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
};

export default AddToDoListItemBar;
