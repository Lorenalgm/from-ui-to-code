import React from 'react';
import './styles.css';
import logo from '../../assets/logo.png';
import Card from '../../componets/Card';

export default function Home(){
    return(
        <div className="home-container">
            <header>
                <img src={logo} alt="Devxtalks" />
            </header>
            <main>
                <h1>Próximos eventos</h1>
                <div className="events list">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </main>
        </div>
    )
}