import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ChosenMenu.css'

export default function ChosenMenu({ menuButtons, currentMenuPage }) {
    const { id } = useParams();

    const viewCurrentMenu = () => {
        return currentMenuPage.menu.map((item, i) => (
            <div key={i}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <img src={item.img} />
            </div>
        ));
    };

    return (
        <div className='mainDivChosen'>
            <Link to='/'><div>חזרה</div></Link>
            <h1>{currentMenuPage.name}</h1>
            <>{viewCurrentMenu()}</>
        </div>
    );
}
