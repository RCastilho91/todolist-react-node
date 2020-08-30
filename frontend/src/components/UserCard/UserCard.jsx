import React from 'react';
import './styles.css';

export default function UserCard(props){
    return(
        <div className='user-card'>
            <h3>{props.person}</h3>
            {props.userName}
        </div>
    );
}