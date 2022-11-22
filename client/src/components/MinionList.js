import React from 'react'
import { Link } from 'react-router-dom'

export default function MinionList() {
    return (
        <div>
            <div className='minions'>
                <div id="minions-landing">
                    <div id="minions-title" className="label minions-label">MINIONS.exe</div>
                    <div id="all-minions">
                        {/* { minions } */}
                        <div id="add-minion-button-grid" className="minion-grid">
                            <Link to="/minions/new">
                                {/* <img id="add-minion-button" className="button" src="public/img/add_button.svg" alt="" /> */}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button back-button">
                <Link to="/">
                    <img className="button" src={require('../img/left-arrow.png')} />
                </Link>
            </div>
        </div>
    )
}
