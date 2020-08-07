import React from 'react';

function PendingArea(props) {
    return(
        <div className="status-container">
            <div className="status-title">
                <h2>Tarefas pendentes</h2>
            </div>

            <div className="status-modifier">

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

            </div>
        </div>
    )
}

export {
    PendingArea,
    CompletedArea
}