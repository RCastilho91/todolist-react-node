import React, { Component } from 'react';
import ListItem from '../ListItems/ListItem'

export default class Todolist extends Component {
    state = {        
            taskItems: [
            {
                id: 1,
                name: 'Task 1',
                status: 'pending'
            },
            {
                id: 2,
                name: 'Task 2',
                status: 'pending'
            },
            {
                id: 3,
                name: 'Task 3',
                status: 'pending'
            }
        ]
    }

    handleOnToggleCompletion = ( taskID, event ) => {
        this.setState({
            taskItems: this.state.taskItems.map(task =>{
                if (task.id === taskID) {
                    return { ...task, status: event.target.checked ? 'completed' : 'pending'}
                }

                return task
            })
        })
    }

    render(){
        return(
            <ul className="todolist">
                { this.state.taskItems.map( task => (
                    <li>
                        <ListItem onToggleCompletion={ this.handleOnToggleCompletion } { ... task }/>
                    </li>
                ))}
            </ul>
        )
    }


}