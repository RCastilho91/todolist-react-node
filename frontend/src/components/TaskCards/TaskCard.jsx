import React from 'react';

export default function TaskCard(props){
    return(
        <div className="task-card">
            <h3> { props.taskTitle }</h3>
            { props.taskDescription }
        </div>
    )
}