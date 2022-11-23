import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MinionDescription from './MinionDescription'
import MinionEdit from './MinionEdit'

export default function EditMinion() {

    const location = useLocation()
    const { minion, newMinion } = location.state

    const [state, setState] = useState({
        id: !newMinion ? minion.id : 0,
        name: !newMinion ? minion.name : '',
        salary: !newMinion ? minion.salary : 0,
        weakness: !newMinion ? minion.weakness : ''
    })

    const handleChange = (e) => {
        const nombre = e.target.name 
        const value = e.target.value
        setState({...state, 
            [nombre]: value
        })
    }

    const handleSubmit = () => {
        // enviar los datos al back end para actualizar la base de datos
        console.log(state.name)
    }

    return (
        <div>
            <div className="button back-button">
                <Link to="/minions">
                    <img className="button" src={require("../img/left-arrow.png")} alt=""/>
                </Link>
            </div>
            <div id="single-minion-landing">
                <div className="minion-details">
                    <div className="label meetings-label">
                        {
                            newMinion
                                ? `New Minion`
                                : `Minion Id #${minion.id}`
                        }
                    </div>
                    <div className="minion-description">
                        {
                            newMinion
                                ? <MinionDescription />
                                : <MinionEdit 
                                    state={state}
                                    setState={setState}
                                    handleChange={handleChange} 
                                />
                        }
                    </div>
                    <div className="button minion-save-button"  onClick={handleSubmit}>
                        {newMinion ? 'Save' : 'Edit'}
                    </div>
                </div>
                <div className="work-details">
                    {/* <Work /> */}
                </div>
            </div>
        </div>
    )
}
