import styles from "./ToDoListItem.module.css";

const ToDoItem = ({ taskName, taskStatus, changeStatus, index }) => {
  //   const [isChecked, setChecked] = useState("none");

  //   function check() {
  //     if (isChecked == "none") {
  //       setChecked("line-through");
  //       console.log(isChecked);
  //     } else {
  //       setChecked("none");
  //       console.log(isChecked);
  //     }
  //   }

  return (
    <div className={styles["to-do-item"]}>
      <p className="to-do-text">{taskName}</p>
      <input
        type="checkbox"
        checked={taskStatus}
        onChange={() => changeStatus(index)}
      ></input>
      {/* <button
        className="TodoButton"
        text-decoration={isChecked}
        onclick={check()}
      >
        Check off!
      </button> */}
    </div>
  );
};
export default ToDoItem;
