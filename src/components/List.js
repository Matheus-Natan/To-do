import React from "react"
import Card from "./Card"

function DoneImg(props) {

    if (props.done) {
        return (<img alt="done" src="./assets/on.png"></img>)
    } else {
        return (<img alt="undone" src="./assets/off.png"></img>)
    }

}

function List(props) {

    return (
        <ul>
            {props.items.map(item => <li key={item.id}>
                <Card className={item.done ? "done item" : "item"}>
                    {item.text}
                    <div>
                        <button onClick={() => { props.onDone(item) }}><DoneImg done={item.done}></DoneImg></button>
                        <button onClick={() => { props.onItemDeleted(item) }}><img alt="delete" src="./assets/delete.png"></img></button>
                    </div>
                </Card>
            </li>)}
        </ul>
    )

}

export default List;