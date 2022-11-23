import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function MinionList() {

    const [minions, setMinions] = useState([{
        id: 1,
        name: "Jafeth",
        salary: 1000,
        weakness: 'handsome'
    }, {
        id: 2,
        name: "Juan",
        salary: 2000,
        weakness: 'ugly'
    }])

    /*
        Conectarse a la base de datos y traer la informacion de los minions
     */

    return (
        <div>
            <div className="button back-button">
                <Link to="/">
                    <img className="button" src={require('../img/left-arrow.png')} />
                </Link>
            </div>
            <div className='minions'>
                <div id="minions-landing">
                    <div id="minions-title" className="label minions-label">MINIONS.exe</div>
                    <div id="all-minions">
                        {minions.map(minion => {
                            let name = minion.name.match(/.{1,11}/g).join('\n');
                            return (
                                <div className="minion-grid" key={minion.id}>
                                    <Link to={{
                                        pathname: `/minions/${minion.id}`,
                                        state: {minion}
                                }} onClick={() => console.log('HOla')}>
                                        <img className="button minion-thumbnail" src={require("../img/minion.png")} alt="minion" />
                                        <p>{name}</p>
                                        <p>ID #{minion.id}</p>
                                    </Link>
                                    <img onClick={() => console.log("Hola")} className="button x-button"
                                        src={require("../img/close.png")} alt="" />
                                </div>
                            )
                        })}
                        <div id="add-minion-button-grid" className="minion-grid">
                            <Link to={{
                                        pathname: '/minions/new',
                                        state: {
                                            newMinion: true
                                        }
                                }}>
                                <img id="add-minion-button" className="button" src={require("../img/add.png")} alt=""
                                    onClick={() => console.log("Juan")} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
