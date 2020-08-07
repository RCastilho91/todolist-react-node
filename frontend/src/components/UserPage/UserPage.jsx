import React, { Component } from 'react';
import { PendingArea, CompletedArea } from './StatusAreas';

export default class UserPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: props.username,
            userName: props.name,
            email: props.email,
            completeTasks: [],
            pendingTasks: []
        }
    }

    render(){
        return(
            <div className="user-area-container">
                <div className="profile-header">
                    <h2>{ this.state.userName }</h2>
                        { this.state.email }
                </div>

                <PendingArea />
                <CompletedArea />
            </div>
        )
    }
}
