import React, { useState } from 'react'
import Logo from './Logo'
import '../Components/Main.css'
import Buttons from './Buttons'

export default function Main({ menuButtons, viewMenu }) {




    return (
        <div>
            <div className='mainDiv'>

                <div className='picturesMain'>
                    <div className='picturesMainTop'>
                        <div className='picMainTop' style={{ backgroundImage: "url('mainPasta.jpg')" }}></div>
                        <div className='picMainTop' style={{ backgroundImage: "url('mainSalad.jpeg')" }}></div>
                    </div>
                    <div className='centerPic'></div>
                    <div className='picturesMainBottom'>
                        <div className='picMainBottom' style={{ backgroundImage: "url('mainCoctails.jpg')" }}></div>
                        <div className='picMainBottom' style={{ backgroundImage: "url('mainHotDrinks.jpg')" }}></div>
                    </div>
                </div>
                <div className='LogoButtons'>
                    <div>
                        <Logo />
                    </div>
                    <div className='buttons'>
                        <Buttons menuButtons={menuButtons} viewMenu={viewMenu} />
                    </div>
                </div>
            </div>
        </div>
    )
}
