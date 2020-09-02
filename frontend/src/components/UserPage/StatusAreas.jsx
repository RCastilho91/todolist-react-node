import React from 'react';
import TaskCard from '../TaskCards/TaskCard';

export default function DropArea(props) {

    let tasksToRender;
    var sectionTitle = '';
    
    if( props.sectionPurpose === "pending" ) {
        sectionTitle = 'Pending Tasks';

        tasksToRender = props.taskList.filter( task => {
            return task.completed === false;
        });
    } else {

        sectionTitle = 'Completed Tasks';

        tasksToRender = props.taskList.filter( task => {
            return task.completed === true;
        });
    }

    var cardRenderer = <TaskCard tasks={ tasksToRender } />

    const drop = e => {
        e.preventDefault();

        var taskID = e.target.id;
        console.log(taskID);
        props.taskDropper(taskID, 'pending')
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return(
        <div className="status-container">
            <div className="status-title">
                <h2>{ sectionTitle }</h2>
            </div>

            <div className="status-modifier" 
            onDrop={ drop }
            onDragOver={ dragOver }>
                { cardRenderer }
            </div>
        </div>
    )
}