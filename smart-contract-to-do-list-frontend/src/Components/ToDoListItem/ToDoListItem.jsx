import { useState } from 'react';
import styles from "./ToDoListItem.module.css";

const ToDoItem = ({ taskName, taskStatus, changeStatus, index }) => {

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={styles["to-do-item"]}>
      <p className="to-do-text">{taskName}</p>
      <input
        className={styles["to-do-checkbox"]}
        type="checkbox"
        checked={taskStatus}
        onChange={() => changeStatus(index)}
        onClick={() => {
          if(isClicked) {
            setIsClicked(false);
          } else {
            setIsClicked(true);
          }
        }}
      ></input>
    </div>
  );
};
export default ToDoItem;
