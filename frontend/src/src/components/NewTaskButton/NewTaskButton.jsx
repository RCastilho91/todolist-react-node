import React from 'react';

export default function NewTaskButton( toggleFunction ){
    
    var toggleFunctionFinal = toggleFunction.toggleNewTaskModal;

    return(
        <div>
            <button onClick={ toggleFunctionFinal }>
                Add new task
            </button>
        </div>
    )
}