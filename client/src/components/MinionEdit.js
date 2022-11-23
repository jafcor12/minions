import React, { useState } from 'react'

export default function MinionEdit(props) {

    const [id, setId] = useState(props.minionInfo.id)
    const [name, setName] = useState(props.minionInfo.name)
    const [salary, setSalary] = useState(props.minionInfo.salary)
    const [weakness, setWeakness] = useState(props.minionInfo.weakness)

    return (
        <div className="minion-edit">
            <div className="minion-edit-single-rows">
                <div className="minion-edit-row">
                    <div className="minion-edit-label">Name:</div>
                    <input name="name" type="text" value={id} onChange={(e) => {
                        setId(e.target.value)
                    }} />
                </div>
                <div className="minion-edit-row">
                    <div className="minion-edit-label">Title:</div>
                    <input name="title" type="text" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </div>
                <div className="minion-edit-row">
                    <div className="minion-edit-label">Salary:</div>
                    <input name="salary" type="text" value={salary} onChange={(e) => {
                        setSalary(e.target.value)
                    }} />
                </div>
            </div>
            <div>
                Weaknesses:
            </div>
            <div>
                <textarea className="minion-input-textarea" name="weaknesses" value={weakness} onChange={(e) => {
                    setWeakness(e.target.value)
                }} />
            </div>
        </div>
    )
}
