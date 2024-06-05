import styles from "./ToDoList.module.css";
import AddToDoListItemBar from "../AddToDoListItemBar/AddToDoListItemBar";
import ToDoItem from "../ToDoListItem/ToDoListItem";
import { useEffect, useState } from "react";

const ToDoList = () => {
  const [toDoItems, setToDoItems] = useState([]);

  const changeToDoStatus = (index) => {
    let updatedToDoItems = [...toDoItems];
    updatedToDoItems[index][1] = !updatedToDoItems[index][1];

    setToDoItems(updatedToDoItems);
  };

  const changeToDoString = (index, newToDoString) => {
    let updatedToDoItems = [...toDoItems];
    updatedToDoItems[index][0] = newToDoString;

    setToDoItems(updatedToDoItems);
  };

  const deleteToDoItem = (targetIndex) => {
    // Filter method: https://react.dev/learn/updating-arrays-in-state
    setToDoItems(
      toDoItems.filter((value, itemIndex) => itemIndex !== targetIndex)
    );
  };

  return (
    <div className={styles["to-do-list"]}>
      <h1>To-do List App</h1>
      <AddToDoListItemBar
        toDoList={toDoItems}
        toDoListSet={setToDoItems}
      ></AddToDoListItemBar>
      <p>Items: {toDoItems.length}</p>
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
                    changeString={changeToDoString}
                    index={index}
                  ></ToDoItem>
                  <button>Connect</button>
                  <button onClick={() => deleteToDoItem(index)}>Delete</button>
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
