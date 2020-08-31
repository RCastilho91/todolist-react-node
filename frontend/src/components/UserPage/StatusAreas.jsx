import React from 'react';
import TaskCard from '../TaskCards/TaskCard';

function PendingArea(props) {

    var pendingTasks = props.pendingList.map(task => {
        return <TaskCard {...task} />
    });

    const drop = e => {
        e.preventDefault();

        const taskID = e.target.props.taskID;

        console.log(`Moved task ID: ${ taskID }`);

        // taskCard.style.display = 'block';
        // props.taskDropper(taskID, 'pending')
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return(
        <div className="status-container">
            <div className="status-title">
                <h2>Tarefas pendentes</h2>
            </div>

            <div className="status-modifier" 
            onDrop={ drop }
            onDragOver={ dragOver }>
                { pendingTasks }
            </div>
        </div>
    )
}

function CompletedArea(props) {

    var completedTasks = props.completedList.map(task => {
        return <TaskCard key={ task.taskID } {...task} />
    })

    return(
        <div className="status-container">
            <div className="status-title">
                <h2>Tarefas concluídas</h2>
            </div>

            <div className="status-modifier">
                { completedTasks }
            </div>
        </div>
    )
}


export {
    PendingArea,
    CompletedArea
}