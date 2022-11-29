import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

export default function MinionList() {

    const [list, setList] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:4001/api/list').then((response) => {
            console.log(response.data)
            setList(response.data);
        });
    }, []);

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
                        {list.map(minion => {
                            return (
                                <div className="minion-grid" key={minion.id}>
                                    <Link to={`/minions/${minion.id}`} state={{
                                        minion: minion,
                                        newMinion: false
                                    }}>
                                        <img className="button minion-thumbnail" src={require("../img/minion.png")} alt="minion" />
                                        <p>{minion.name}</p>
                                        <p>ID #{minion.id}</p>
                                    </Link>
                                    <img onClick={() => console.log("Hola")} className="button x-button"
                                        src={require("../img/close.png")} alt="" />
                                </div>
                            )
                        })}
                        <div id="add-minion-button-grid" className="minion-grid">
                            <Link to={'/minions/new}'} state={{
                                newMinion: true,
                                minion: list.length > 0 ? list.slice(-1)[0] : { ID: 0 }
                            }}>
                                <img id="add-minion-button" className="button" src={require("../img/add.png")} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
