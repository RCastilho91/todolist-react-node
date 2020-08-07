import React, { Component } from 'react';
import UserCard from '../UserCard/UserCard';

export default class AllUsers extends Component {
    constructor(props){
        super(props);

        this.state = {
            users: [
                {   
                    'person': 'Fulano',
                    'userName': 'Fulano123',
                },
                {
                    'person': 'Beltrano',
                    'userName': 'Beltrano123'
                },
                {
                    'person': 'Cicrano',
                    'userName': 'Cicrano123'
                }
            ]
        }
    }

    render(){
        return(
            <div className="all-users-container">
                <div className="all-users-header">
                    <h1>Selecione um usuario para prosseguir</h1>
                </div>

                <div className="user-area">
                    { this.state.users.map( user =>
                        <UserCard {... user} />
                    )}
                </div>
            </div>
        )
    }
}