import React from 'react'

export default function MinionEdit(props) {
    return (
        <div className="minion-edit">
            <div className="minion-edit-single-rows">
                <div className="minion-edit-row">
                    <div className="minion-edit-label">Id:</div>
                    <input name="id" type="text" value={props.state.id} onChange={props.handleChange}/>
                </div>
                <div className="minion-edit-row">
                    <div className="minion-edit-label">Name:</div>
                    <input name="name" type="text" value={props.state.name} onChange={props.handleChange} />
                </div>
                <div className="minion-edit-row">
                    <div className="minion-edit-label">Salary:</div>
                    <input name="salary" type="text" value={props.state.salary} onChange={props.handleChange} />
                </div>
            </div>
            <div>
                Weaknesses:
            </div>
            <div>
                <textarea className="minion-input-textarea" name="weakness" value={props.state.weakness} 
                    onChange={ props.handleChange } />
            </div>
        </div>
    )
}
