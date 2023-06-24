import React, { useState } from "react";

export default function TodoForm(props) {
    
    const [text, setText] = useState("");


    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    }

    function addItem(event) {
        event.preventDefault();
        if (text) {
            // setItems([...items, text]);
            props.onAddItem(text);
            setText("");
        }
    }

    return (
        <form className="addForm">
            <input className="addInput" onChange={handleChange} type="text" value={text}></input>
            <button className="addButton" onClick={addItem}>+</button>
        </form>
    )
}