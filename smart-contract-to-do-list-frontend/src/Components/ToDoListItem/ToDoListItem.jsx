import { useState, useEffect } from "react";
import "./ToDoListItem.css";

export default function TodoItem(task) {

    const [isChecked, setChecked] = useState("none");

    function check() {
        if (isChecked == "none") {
            setChecked("line-through");
            console.log(isChecked)
        } else {
            setChecked("none")
            console.log(isChecked)
        }
        
    }

    return(
        <div className="TodoItem">
            <p className="TodoText">{task}</p>
            <button className="TodoButton" text-decoration={isChecked} onclick={check()}>Check off!</button>
        </div>
    )
}