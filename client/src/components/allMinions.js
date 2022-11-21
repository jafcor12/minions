import React from 'react'

export default function AllMinions() {
    return (
        <div id="meetings-landing">
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
                        {}
                    </tbody>
                </table>
            </div>
        </div>
    )
}