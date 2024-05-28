import styles from "./ToDoListItem.module.css";

const ToDoItem = ({ taskName, taskStatus, changeStatus, index }) => {

  return (
    <div className={styles["to-do-item"]}>
      <p className="to-do-text">{taskName}</p>
      <input
        type="checkbox"
        checked={taskStatus}
        onChange={() => changeStatus(index)}
      ></input>
    </div>
  );
};
export default ToDoItem;
