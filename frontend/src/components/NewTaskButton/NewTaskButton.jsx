import React from 'react';

export default function NewTaskButton( props ){

    return(
        <div>
            <button onClick={ props.toggleNewTaskModal }>
                Add new task
            </button>
        </div>
    )
}