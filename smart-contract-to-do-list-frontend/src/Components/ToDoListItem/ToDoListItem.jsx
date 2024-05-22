import { useState, useEffect } from "react";
import "./ToDoListItem.css";

export default function TodoItem(task) {

    const [isChecked, setChecked] = useState(false);

    function check() {
        if (isChecked == false) {
            setChecked(isChecked = true);
            console.log(isChecked)
        } else {
            setChecked(isChecked = false)
            console.log(isChecked)
        }
        
    }

    return(
        <div className="TodoItem">
            <p className="TodoText">{task}</p>
            <button className="TodoButton" onclick={check()}>Check off!</button>
        </div>
    )
}