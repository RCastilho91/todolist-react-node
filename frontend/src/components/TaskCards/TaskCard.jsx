import React from 'react';
import './styles.css'

export default function TaskCard(props) {
    return(
        <div className="task-card" draggable>
            <h3> { props.taskTitle } </h3>
            { props.taskDescription }
        </div>
    )
}