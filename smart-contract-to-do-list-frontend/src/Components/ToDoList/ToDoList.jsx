import styles from "./ToDoList.module.css";
import AddToDoListItemBar from "../AddToDoListItemBar/AddToDoListItemBar";
import ToDoItem from "../ToDoListItem/ToDoListItem";
import { useEffect, useState } from "react";

const ToDoList = () => {

  const [toDoItems, setToDoItems] = useState([]);

  const changeToDoStatus = (toDoItem) => {
    console.log("Testing");
    // just a deep copy, don't let it psyche you out
    let updatedToDoItems = [...toDoItems, toDoItem];
    // Why do we need this?
    // updatedToDoItems[index][1] = !updatedToDoItems[index][1];
    setToDoItems(updatedToDoItems);
  };

  const deleteToDoItem = (index) => {
    console.log("Checked");
  };

  return (
    <div className={styles["to-do-list"]}>
      <h1>To-do List App</h1>
      <AddToDoListItemBar
        toDoList={toDoItems}
        toDoListSet={setToDoItems}
      ></AddToDoListItemBar>
      <table>
        <tbody>
          {toDoItems.map((element, index) => {
            return (
              <tr key={index}>
                <td>
                  <ToDoItem
                    taskName={element[0]}
                    taskStatus={element[1]}
                    changeStatus={changeToDoStatus}
                    index={index}
                  ></ToDoItem>
                  <button onClick={() => deleteToDoItem(index)}></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
  );
};

export default ToDoList;
