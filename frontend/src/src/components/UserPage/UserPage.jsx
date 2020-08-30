import React, { Component } from 'react';
import { PendingArea, CompletedArea } from './StatusAreas';
import NewTaskModal from '../NewTaskModal/NewTaskModal';
import NewTaskButton from '../NewTaskButton/NewTaskButton';
import './styles.css'

export default class UserPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: 'Fulano',
            userName: 'Fulano123',
            email: 'fulano@teste.com',

            completedList: [{
                taskID: 1,
                taskTitle: 'Task 1',
                taskDescription: 'Description 1',
                completed: true
            },
            {
                taskID: 3,
                taskTitle: 'Task 3',
                taskDescription: 'Description 3',
                completed: true
            }],

            pendingList: [{
                taskID: 2,
                taskTitle: 'Task 2',
                taskDescription: 'Description 2',
                completed: false
            }],

            displayNewTaskModal: false
        }

        this.handleNewTask = this.handleNewTask.bind(this);
        this.handleTaskDrop = this.handleTaskDrop.bind(this);
        this.toggleNewTaskModal = this.toggleNewTaskModal.bind(this);
    }

    handleNewTask(taskTitle, taskDescription) {
        var newID = this.state.pendingList.length + this.state.completedList.length + 1;

        this.setState({
            ...this.state,
            pendingList: [...this.state.pendingList, {
                taskID: { newID },
                taskTitle: { taskTitle },
                taskDescription: { taskDescription },
                completed: false
            }]
        })
    }

    handleTaskDrop(taskID, completion) {
        if(completion === true){
            this.state.completedList.map( task => {
                if(task.id === taskID){
                    this.setState({
                        completedList: [...this.state.completedList.splice(task)],
                        pendingList: [...this.state.pendingList.push(task)]
                    });
                }

                return null
            });
        } else {
            this.state.pendingList.map( task => {
                if(task.id === taskID){
                    this.setState({
                        pendingList: [...this.state.pendingList.splice(task)],
                        completedList: [...this.state.pendingList.push(task)]
                    })
                }

                return null
            })
        }
    }

    toggleNewTaskModal(){
        alert("Toggle modal reached");

        this.setState({
            displayNewTaskModal: !this.state.displayNewTaskModal
        })
    }

    render(){

        var testingOut = this.toggleNewTaskModal;

        return(
            <div className="user-area-container">
                <NewTaskModal visibility={ this.state.displayNewTaskModal } toggleFunction={ this.toggleNewTaskModal } />
                <div className="profile-header">
                    <h2>{ this.state.userName }</h2>
                        { this.state.email } <br/>

                    <NewTaskButton toggleFunction={ testingOut } />
                </div>

                <PendingArea {...this.state} />
                <CompletedArea {...this.state} />
            </div>
        )
    }
}