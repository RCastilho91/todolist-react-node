import React from 'react';
import './styles.css'

export default function TaskCard(props) {

    for(var i = 0; i < props.tasks.length; i++){
        let taskIdentifier = props.tasks[i].taskID;
        let taskTitle = props.tasks[i].taskTitle;
        let taskDescription = props.tasks[i].taskDescription;

        console.log(`Working on task ${ taskTitle }`);

        return(
            <div className="task-card" id={ taskIdentifier } draggable>
                <h3> { taskTitle } </h3>
                { taskDescription }
            </div>
        )
    }
}