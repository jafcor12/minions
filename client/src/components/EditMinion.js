import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import MinionDescription from './MinionDescription'
import MinionEdit from './MinionEdit'

export default function EditMinion() {
    //param from the url

    const location = useLocation()
    const { minion, newMinion } = location.state

    return (
        <div>
            <div className="button back-button">
                <Link to="/minions">
                    <img className="button" src={require("../img/left-arrow.png")} />
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
                        {/* <MinionEdit minionInfo={ minion }/> */}
                        {
                            newMinion
                                ? <MinionDescription />
                                : <MinionEdit minionInfo={minion} />
                        }
                    </div>
                    <div className="button minion-save-button" >
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
