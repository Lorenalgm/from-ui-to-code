import React from 'react';
import './styles.css'

export default function Card(){
    return(
        <div className="card-container">
            <div className="date">
                <h1>14</h1>
                <h2>JUNHO</h2>
            </div>
            <h1 className="event-title">Como criar seu primeiro bot no slack</h1>
            <div className="event-time">
                <p className="hour">17:00 - 18:00h</p>
                <p className="speaker">Luanda</p>
            </div>
        </div>
    )
}