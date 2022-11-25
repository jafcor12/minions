import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Minion from './Minion'

export default function AllMinions() {

    const [list, setList] = useState([])
    const [data, setData] = useState(false)

    useEffect(() => {
        Axios.get('http://localhost:4001/api/list').then((response) => {
            if (response.data.length !== 0) {
                setList(response.data)
                setData(true)
            }
        });
    }, [list]);

    const deleteMinion = () => {
        
    }

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
                            { data ? <th id='th-crud'>CRUD</th> : null }
                        </tr>
                    </thead>
                    <tbody>

                        {
                        data ?  list.map((minion) => {
                            return <Minion ID={minion.ID} NAME={minion.NAME} SALARY={minion.SALARY} WEAKNESS={minion.WEAKNESS} CRUD={data}  />
                        }) : <Minion ID={"No data"} NAME={"No data"} SALARY={"No data"} CRUD={data} />
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}