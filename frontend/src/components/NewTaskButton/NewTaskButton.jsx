import React from 'react';

export default function NewTaskButton( props ){

    return(
        <div>
            <button onClick={ props.toggleFunction }>
                Add new task
            </button>
        </div>
    )
}