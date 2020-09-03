import React, { Component } from 'react';
import DropArea from './StatusAreas';
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

            taskList: [{
                taskID: 1,
                taskTitle: 'Task 1',
                taskDescription: 'Description 1',
                completed: true
            },
            {
                taskID: 2,  
                taskTitle: 'Task 2',
                taskDescription: 'Description 2',
                completed: false
            },
            {
                taskID: 3,
                taskTitle: 'Task 3',
                taskDescription: 'Description 3',
                completed: true
            }],

            displayNewTaskModal: false
        }

        this.handleNewTask = this.handleNewTask.bind(this);
        this.handleTaskDrop = this.handleTaskDrop.bind(this);
        this.toggleNewTaskModal = this.toggleNewTaskModal.bind(this);
    }

    handleNewTask(taskTitle, taskDescription) {
        var newID = this.state.taskList.length + 1;

        this.setState({
            taskList: [
                ...this.state.taskList, {
                taskID: { newID },
                taskTitle: `${ taskTitle }`,
                taskDescription: `${ taskDescription }`,
                completed: false
            }]
        });

        console.log(this.state.taskList);

        this.toggleNewTaskModal();
    }

    handleTaskDrop(taskID, boardName) {

        console.log(`Dropped task ${ taskID } on board ${ boardName }`)

        if(boardName === "pending"){
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
        this.setState({
            displayNewTaskModal: !this.state.displayNewTaskModal
        })
    }

    render(){
        return(
            <div className="user-area-container">
                { this.state.displayNewTaskModal ? <NewTaskModal toggleFunction={ this.toggleNewTaskModal } addNew={ this.handleNewTask } />: null }
                
                <div className="profile-header">
                    <h2>{ this.state.userName }</h2>
                        { this.state.email } <br/>

                    <NewTaskButton toggleFunction={ this.toggleNewTaskModal } />
                </div>

                <DropArea { ...this.state } sectionPurpose="pending" />
                <DropArea { ...this.state } sectionPurpose="completed" />
            </div>
        )
    }
}
