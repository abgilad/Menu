import React from 'react'
import { Link } from 'react-router-dom'
import './Buttons.css'

export default function Buttons({ menuButtons, viewMenu }) {



    const viewButtons = () => {
        return menuButtons?.map((val, i) => {
            return <Link key={i} className='Link' to={`/${val.name}`}><div onClick={() => { viewMenu(val) }} className='buttonsLink' >{val.name}</div></Link>
        })
    }

    return (
        <div className='mainBottoms'>
            {viewButtons()}
        </div>
    )
}
