import "./App.css";

// import ToDoList component
import ToDoList from "./Components/ToDoList/ToDoList";

function App() {
  return (
    <div className="App">
      {/* This is how we include our React Components: we just treat them like a HTML tag */}
      <ToDoList defaultNumClicked={2}></ToDoList>
    </div>
  );
}

export default App;
