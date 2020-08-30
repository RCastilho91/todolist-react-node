import React from 'react';
import Proptypes from 'prop-types';


export default function ListItem(props) {
    return(
        <div>
            <input type="checkbox" onChange={ (event) => props.onToggleCompletion( props.id, event ) } />
            <b style={{ 
                    textDecoration: props.status === "completed" ? 'line-through' : 'none'}
                }>{ props.name }</b>
        </div>
    );
}

ListItem.propTypes = {
    id: Proptypes.number,
    name: Proptypes.string,
    status: Proptypes.string,
    onToggleCompletion: Proptypes.func
}