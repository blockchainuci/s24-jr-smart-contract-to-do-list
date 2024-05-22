import React, { useEffect, useState } from 'react';
import ToDoList from '../ToDoList/ToDoList';
import "./AddToDoListItemBar"

const AddToDoListItemBar = ({toDoList, toDoListSet }) => {
  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim()) {
      toDoListSet([...toDoList, [inputValue, false]]);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new to-do item"
      />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
};

export default AddToDoListItemBar;
