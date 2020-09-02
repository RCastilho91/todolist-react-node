import React from 'react';
import TaskCard from '../TaskCards/TaskCard';

export default function DropArea(props) {

    let tasksToRender;

    if( props.sectionPurpose === "pending" ) {
        var sectionTitle = 'Pending Tasks';

        tasksToRender = props.taskList.filter((task) => {
            return task.completed === false;
        });
    } else {

        var sectionTitle = 'Completed Tasks';

        tasksToRender = props.taskList.filter((task) => {
            return task.completed === true;
        });
    }

    var cardRenderer = ( tasksToRender ) => {
        return <TaskCard { ...tasksToRender } />
    }

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
                { cardRenderer( tasksToRender ) }
            </div>
        </div>
    )
}