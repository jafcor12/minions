import React from 'react'

export default function Minion(props) {
    return (
        <tr>
            <td><p>{props.id}</p></td>
            <td><p>{props.name}</p></td>
            <td><p>{props.salary}</p></td>
            <td>
                <p id='crud-button'>
                    <button>Delete</button>
                    <button>Update</button>
                </p>
            </td>
        </tr>
    )
}
