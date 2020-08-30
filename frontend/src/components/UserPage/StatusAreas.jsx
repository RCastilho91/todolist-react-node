import React from 'react';
import TaskCard from '../TaskCards/TaskCard';

function PendingArea(props) {

    var pendingTasks = props.pendingList.map(task => {
        return <TaskCard {...task} />
    });

    return(
        <div className="status-container">
            <div className="status-title">
                <h2>Tarefas pendentes</h2>
            </div>

            <div className="status-modifier">
                { pendingTasks }
            </div>
        </div>
    )
}

function CompletedArea(props) {

    var completedTasks = props.completedList.map(task => {
        return <TaskCard {...task} />
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