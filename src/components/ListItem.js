import React from "react"
import Card from "./Card"

function DoneImg(props) {

    if (props.done) {
        return (<img alt="done" src="./assets/on.png"></img>)
    } else {
        return (<img alt="undone" src="./assets/off.png"></img>)
    }

}

function ListItem(props) {

    return (<li>
        <Card className={props.item.done ? "done item" : "item"}>
            {props.item.text}
            <div className="listButtons">
                <button className="listButton" onClick={() => { props.onDone(props.item) }}><DoneImg done={props.item.done}></DoneImg></button>
                <button className="listButton" onClick={() => { props.onItemDeleted(props.item) }}><img alt="delete" src="./assets/delete.png"></img></button>
            </div>
        </Card>
    </li>
    )

}

export default ListItem;