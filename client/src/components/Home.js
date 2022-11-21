import React from 'react'
import AllMinions from './allMinions'

export default function Home() {
    return (
        <div id="landing-page">
            <div id="launch-buttons">
                {/* <Link to="/minions"> */}
                <div id="minions-launch" className="button launch-button" onClick={() => {
                    console.log('Hola')
                }}>
                    <img className="button launch-icon" src={require('../img/users.png')} alt="" />
                    <div className="button label launch-label">
                        MINIONS
                    </div>
                </div>
                {/* </Link> */}
            </div>
            <AllMinions />
        </div>

    )
}