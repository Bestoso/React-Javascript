import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ShopperLogo = () => {

    const navigate = useNavigate();

    const toHome = () => {
        navigate('/');
    }
    
    return (
        <div className='navBar__logo__container' onClick={ toHome }>
            <p className='navBar__logo'>RE <span className='acc'>_SHOPPER</span></p>
        </div>
    )
}
