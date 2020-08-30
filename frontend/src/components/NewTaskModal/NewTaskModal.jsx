import React from 'react';
import './styles.css';

export default function NewTaskModal(visibility, toggleFunction){

    const toggleVisibility = toggleFunction.toggleNewTaskModal;

    if(visibility === true){
        return(
            <div className="modal-wrapper">    
                <div className="new-task-modal">
                    <h2>Nova tarefa</h2>
                    <span className="modal-title">Título da tarefa: </span>
                    <input className="modal-input" />
                    <span className="modal-title">Descrição da tarefa:</span>
                    <textarea className="modal-input" />

                    <p/>

                    <div className="modal-controls">
                        <button className="modal-submission">Criar tarefa</button>
                        <button className="modal-cancelation" onClick={ toggleVisibility }>Cancelar</button>
                    </div>
                </div>
            </div>
        )
        } else {
            return null
        }
}