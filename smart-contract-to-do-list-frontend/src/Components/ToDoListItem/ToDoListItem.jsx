import { useState } from 'react';
import styles from "./ToDoListItem.module.css";

const ToDoItem = ({ taskName, taskStatus, changeStatus, index, setDeleteStatus }) => {

  const [clickStatus, setClickStatus] = useState("notClicked");

  return (
    <div 
      className={styles[clickStatus]} 
      onClick={() => { clickStatus === "notClicked" ? setClickStatus("clicked") : setClickStatus("notClicked")}}
      tabIndex={0}
      onKeyDown={setDeleteStatus}
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
