import { useState } from 'react';
import styles from "./ToDoListItem.module.css";

const ToDoItem = ({ taskName, taskStatus, changeStatus, index }) => {

  const [clickStatus, setClickStatus] = useState("notClicked");

  return (
    <div 
      className={styles[clickStatus]} 
      onClick={() => { clickStatus === "notClicked" ? setClickStatus("clicked") : setClickStatus("notClicked")}}
      tabIndex={0}
      onKeyDown={(e) => {e.key === "Enter" ? console.log("¡Hola!"): console.log("Adios")}}
      >
      <p className="to-do-text">{taskName}</p>
      <input
        className={styles["to-do-checkbox"]}
        type="checkbox"
        checked={taskStatus}
        onChange={() => changeStatus(index)}
        onClick={(e) => {e.stopPropagation();}}
      ></input>
    </div>
  );
};
export default ToDoItem;
