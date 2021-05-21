import React, {useState} from 'react';
import './styles.css';
import logo from '../../assets/logo.png';
import Card from '../../componets/Card';
import events from './events.json';

export default function Home(){
    return(
        <div className="home-container">
            <header>
                <img src={logo} alt="Devxtalks" />
            </header>
            <main>
                <h1>Próximos eventos</h1>
                <div className="events-list">
                    {events.map(event => (
                        <Card 
                        className="event-card"
                        day={event.day}
                        month={event.month}
                        title={event.title}
                        hour={event.hour}
                        speaker={event.speaker}
                    />
                    ))}
                </div>
            </main>
        </div>
    )
}