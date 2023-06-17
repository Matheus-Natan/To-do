import React, { useState } from "react";
import "./Todo.css";
import List from "./List";
import TodoForm from "./TodoForm";

export default function Todo() {

    const [items, setItems] = useState([]);

    function onAddItem(item) {
        setItems([...items, item]);
    }

    return (

        <div className="container">
            <h1>Teste</h1>

            <TodoForm onAddItem={onAddItem}></TodoForm>

            <List items={items}></List>

        </div>

    )
}