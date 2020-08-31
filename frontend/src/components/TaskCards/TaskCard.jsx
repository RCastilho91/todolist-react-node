import React from 'react';
import './styles.css'

export default function TaskCard(props) {

    const clickEvent = e => {
        console.log(`You're clicking ID ${ props.taskID }`)
    }

    var taskIdentifier = props.taskID;

    return(
        <div className="task-card" id={ taskIdentifier } onClick={ clickEvent } draggable>
            <h3> { props.taskTitle } </h3>
            { props.taskDescription }
        </div>
    )
}