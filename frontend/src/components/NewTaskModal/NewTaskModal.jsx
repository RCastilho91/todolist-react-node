import React, { Component } from 'react';
import './styles.css';

export default class NewTaskModal extends Component {
    constructor(props){
        super(props);
        this.newTaskTitle = React.createRef();
        this.newTaskDescription = React.createRef();
        this.newTaskHandler = this.newTaskHandler.bind(this);
    }

    newTaskHandler(){
        if(this.newTaskTitle === "" || this.newTaskDescription === ""){
            alert("Title and description are mandatory")
        } else {
            this.props.addNew(this.newTaskTitle.current.value, this.newTaskDescription.current.value)
        }
    }

    render(){
        return(
            <div className="modal-wrapper">    
                <div className="new-task-modal">
                    <h2>Nova tarefa</h2>
                    <span className="modal-title">Task title: </span>
                    <input className="modal-input" ref={ this.newTaskTitle } />
                    <span className="modal-title">Task description:</span>
                    <textarea className="modal-input" ref={ this.newTaskDescription } />
    
                    <p/>
    
                    <div className="modal-controls">
                        <button className="modal-submission" onClick={ this.newTaskHandler }>Create task</button>
                        <button className="modal-cancelation" onClick={ this.props.toggleFunction }>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}