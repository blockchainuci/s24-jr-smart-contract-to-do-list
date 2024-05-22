import "./ToDoList.module.css";
import AddToDoListItemBar from '../AddToDoListItemBar/AddToDoListItemBar';
import { useEffect, useState } from "react";

// This is a component, which is the heart of React. You declare components like a function, and they can take
// arguments too (called props)

// Here, ToDoList has one prop, defaultNumClicked. Look at App.jsx to see how components like ToDoList are used
// and how props are passed
const ToDoList = ({ defaultNumClicked }) => {
  // Here in the funciton body before the return statement you will define all the functionality your component needs to work

  // Example of a useState:
  // to declare a useState, write const [ <variable>, <variableFunction> ] = useState( <variableDefaultValue> )
  // <variable> is just a regular variable
  // <variableFunction> is a the function you call when you want to set <variable> to a different value, for example:
  // <variableFunction>(1) will set <variable> to 1
  // <variableDefaultValue> is just the default value of the variable

  // This example sets up a numClicked variable that is by default 0, with every time you clicking the button causing the
  // setNumClicked function to be called and set numClicked to numClicked + 1
  // NOTE: the numClicked variable will immediately be set to the defaultNumClicked prop value when ToDoList is redered,
  // look at the useEffect example below for an example:
  const [numClicked, setNumClicked] = useState(0);
  const [numClickedArray, setNumClickedArray] = useState([]);

  const [toDoItems, setToDoItems] = useState([]);

  // Example of a useEffect:
  // You define a useState by passing two arguments, the first one being a function that will be
  // executed everytime the useEffect is called. The second being a dependency list of component states (variables).
  // When a variable in the dependency list changes, then the useEffect function is called. So essentially useEffects
  // react to changes in the state of a component.

  // Here, we have a useEffect with an empty dependency array. This means we only execute this useEffect ONCE when the
  // component is first rendered.
  useEffect(() => {
    setNumClicked(defaultNumClicked);
  }, []);

  useEffect(() => {
    setNumClickedArray([...numClickedArray, numClicked]);
  }, [numClicked]);

  // the return of a component, which is jsx
  // jsx is basically html but you include javascript code
  // here we create a table of every element in numClickedArray by calling numClickedArray.map(), which is
  // javascript code.
  // this part of the code essentially determines how your component will look
  return (
    <div>
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
                <p>element[0]</p>{/*<ToDoListItem toDoName={element}></ToDoListItem>*/}
                {/*<button onClick={() => deleteItem(index)}></button> */}
              </tr>
            );
          })}
        </tbody>
      </table>

      <h5>Num Clicked: {numClicked}</h5>
      <button onClick={() => setNumClicked(numClicked + 1)}>Click me!</button>
      <table>
        <tbody>
          {numClickedArray.map((element, index) => {
            return (
              <tr key={index}>
                <td>{element}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
// you must export your components if you want to be able to import them elsewhere
export default ToDoList;
