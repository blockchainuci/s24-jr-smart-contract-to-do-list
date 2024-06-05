import { useState } from "react";
import styles from "./ToDoListItem.module.css";

const ToDoItem = ({
  taskName,
  taskStatus,
  changeStatus,
  changeString,
  index,
}) => {
  const [clickStatus, setClickStatus] = useState("notClicked");

  return (
    <div
      className={styles[clickStatus]}
      onClick={() => {
        clickStatus === "notClicked"
          ? setClickStatus("clicked")
          : setClickStatus("notClicked");
      }}
    >
      <input
        className="to-do-text"
        value={taskName}
        onChange={(e) => changeString(index, e.target.value)}
      ></input>
      <input
        className={styles["to-do-checkbox"]}
        type="checkbox"
        checked={taskStatus}
        onChange={() => changeStatus(index)}
        onClick={(e) => {
          e.stopPropagation();
        }}
      ></input>
    </div>
  );
};
export default ToDoItem;
