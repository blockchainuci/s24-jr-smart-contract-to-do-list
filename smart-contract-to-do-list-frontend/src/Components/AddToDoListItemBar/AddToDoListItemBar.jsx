import React, { useState } from 'react';

const AddToDoListItemBar = ({ toDoItems, setToDoItems }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setToDoItems([...toDoItems, [inputValue, false]]);
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
