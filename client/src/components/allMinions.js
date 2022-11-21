import React, { useState } from 'react'
import Minion from './Minion'

export default function AllMinions() {

    const [minions, setMinions] = useState([])

    return (
        <div id="minions-landing">
            <div className="label meetings-label">
                Minions
            </div>
            <div id="meetings-table">
                <table>
                    <thead>
                        <tr>
                            <th id="th-time">Time</th>
                            <th id="th-location">Date</th>
                            <th id="th-note">Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {minions.map((minion) => { */}<Minion id={1} name={"jafeth"} salary={9000} />
                        {/* // })} */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}