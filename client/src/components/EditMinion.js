import Axios from 'axios'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import MinionDescription from './MinionDescription'
import MinionEdit from './MinionEdit'

export default function EditMinion() {

    const location = useLocation()
    const { minion, newMinion, } = location.state

    const [state, setState] = useState({
        id: !newMinion ? minion.ID : minion.ID + 1,
        name: !newMinion ? minion.NAME : '',
        salary: !newMinion ? minion.SALARY : 0,
        weakness: !newMinion ? minion.WEAKNESS : ''
    })

    let navigate = useNavigate();
    const path = minion.homePage ? '/' : '/minions'

    const handleChange = (e) => {
        const nombre = e.target.name
        const value = e.target.value
        setState({
            ...state,
            [nombre]: value
        })
    }

    const handleSaveButton = () => {
        const id = state.id
        const weakn = state.weakness
        const nombre = state.name
        const salario = state.salary

        newMinion ? (Axios.post('http://localhost:4001/api/insert', {
            ID: id,
            NAME: nombre,
            SALARY: salario,
            WEAKNESS: weakn
        }).then((response) => console.log(response)))
        : (Axios.put('http://localhost:4001/api/update', {
            ID: id,
            NAME: nombre,
            SALARY: salario,
            WEAKNESS: weakn
        }).then((response) => console.log(response))
        ) 
        navigate(path)
    }

    return (
        <div>
            <div>
                <div className="button back-button">
                    <Link to={minion.homePage ? '/' : '/minions'}>
                        <img className="button" src={require("../img/left-arrow.png")} alt="" />
                    </Link>
                </div>
                <div className='minions'>
                    <div id="single-minion-landing">
                        <div className="minion-details">
                            <div className="label meetings-label">
                                {
                                    newMinion
                                        ? `New Minion`
                                        : `Minion Id #${minion.ID}`
                                }
                            </div>
                            <div className="minion-description">
                                {
                                    newMinion
                                        ? <MinionDescription
                                            state={state}
                                            setState={setState}
                                            handleChange={handleChange}
                                        />
                                        :
                                        <MinionEdit
                                            state={state}
                                            setState={setState}
                                            handleChange={handleChange}
                                        />
                                }
                            </div>
                            <div className="button minion-save-button" onClick={handleSaveButton}>
                                {'Save'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
