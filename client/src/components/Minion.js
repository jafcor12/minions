import React from 'react'
import { Link } from 'react-router-dom'

export default function Minion(props) {

    const minion = {
        "ID": props.ID,
        "NAME": props.NAME,
        "SALARY": props.SALARY,
        "WEAKNESS": props.WEAKNESS,
        "homePage": true
    }

    console.log(props.CRUD)

    return (
        <tr>
            <td><p>{props.ID}</p></td>
            <td><p>{props.NAME}</p></td>
            <td><p>{props.SALARY}</p></td>
            {props.CRUD ? (<td>
                <p id='crud-button'>
                    <button delete={props.delete}>Delete</button>
                    <Link to={`/minions/${minion.ID}`} state={{
                        minion: minion,
                        newMinion: false
                    }}>
                        <button>Update</button>
                    </Link>
                </p>
            </td>) : null}
        </tr>
    )
}
