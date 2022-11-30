import React from 'react'
import { Link } from 'react-router-dom'

export default function Minion(props) {

    const minion = {
        id: props.ID,
        name: props.NAME,
        salary: props.SALARY,
        weakness: props.WEAKNESS,
        homePage: props.homePage
    }

    // console.log(props.CRUD)

    return (
        <tr>
            <td><p>{props.ID}</p></td>
            <td><p>{props.NAME}</p></td>
            <td><p>{props.SALARY}</p></td>
            {props.CRUD ? (<td>
                <p id='crud-button'>
                    <button className='minion-save-button-home' onClick={() => props.deleteMinion(minion.id)}>Delete</button>
                    <Link to={`/minions/${minion.id}`} state={{
                        minion: minion,
                        newMinion: false
                    }}>
                        <button className='minion-save-button-home'>Update</button>
                    </Link>
                </p>
            </td>) : null}
        </tr>
    )
}
