import React, { Component } from 'react';
import UserCard from '../UserCard';

export default class AllUsers extends Component {
    constructor(props){
        super(props);

        this.state = {
            users: [
                {   
                    'user': 'Fulano',
                    'userName': 'Fulano123',
                },
                {
                    'user': 'Beltrano',
                    'userName': 'Beltrano123'
                },
                {
                    'user': 'Cicrano',
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
                        <UserCard {... user } />
                    )}
                </div>
            </div>
        )
    }
}