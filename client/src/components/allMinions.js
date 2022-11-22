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
                            <th id="th-id">Id</th>
                            <th id="th-name">Name</th>
                            <th id="th-salary">Salary</th>
                            <th id='th-crud'>CRUD</th>
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