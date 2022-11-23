import React from 'react'
import AllMinions from './allMinions'
import { Link } from 'react-router-dom'

export default function Home() {

    /*
        Conectarse con el back end para traer el get de todos los minions para pasarselo
        como un prop a allMinions
     */

    return (
        <div id="landing-page">
            <div id="launch-buttons">
                <Link to="/minions">
                    <div id="minions-launch" className="button launch-button" >
                        <img className="button launch-icon" src={require('../img/users.png')} alt="" />
                        <div className="button label launch-label">
                            MINIONS
                        </div>
                    </div>
                </Link>
            </div>
            <AllMinions />
        </div>

    )
}