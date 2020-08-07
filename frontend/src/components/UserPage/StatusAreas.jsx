import React from 'react';
import TaskCard from '../TaskCards/TaskCard';

function PendingArea(props) {
    return(
        <div className="status-container">
            <div className="status-title">
                <h2>Tarefas pendentes</h2>
            </div>

            <div className="status-modifier">
                { props.pendingTasks.map (task => {
                    <TaskCard {... task} />
                })}
            </div>
        </div>
    )
}

function CompletedArea(props) {
    return(
        <div className="status-container">
            <div className="status-title">
                <h2>Tarefas concluídas</h2>
            </div>

            <div className="status-modifier">
                {props.completeTasks.map (task => {
                    <TaskCard {... task} />
                })}
            </div>
        </div>
    )
}

export {
    PendingArea,
    CompletedArea
}