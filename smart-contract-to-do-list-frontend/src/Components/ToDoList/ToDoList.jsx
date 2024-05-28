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

  const deleteToDoItem = (element) => {
    // Filter method: https://react.dev/learn/updating-arrays-in-state
    setToDoItems(toDoItems.filter((value, index) => {
      
    }))
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
