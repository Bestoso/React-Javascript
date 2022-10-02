import React, { useState } from 'react'
import { CartWidget } from '../CartWidget'
import { ShopperLogo } from '../Logo'

export const NavBar = () =>  {

    const [navMenClass, setNavMenClass] = useState('navBar__menu');

    const handleMenu = () => {
        if (navMenClass === 'navBar__menu') {
            setNavMenClass('navBar__menu active');
        } else {
            setNavMenClass('navBar__menu');
        }
    }   

    return (
        <>
            <header className='navBar'>
            <ShopperLogo />
                <nav className={navMenClass}>
                    <ul className='navBar__menu__list'>
                        <li className='list-item'><a href='#itemCont'>Home</a></li>
                        <li className='list-item'><a href='#itemCont'>Info</a></li>
                        <li className='list-item'><a href='#itemCont'>Products</a></li>
                        <li className='list-item'><a href='#itemCont'>Contact</a></li>
                    </ul>
                </nav>
                    <i className='bx bx-menu'
                    id='showMenu'
                    onClick={ handleMenu }></i>
                <div className='navBar__cart'>
                    <button className='cart-anchor'>
                        <p>SHOP</p>
                        <CartWidget/>
                    </button>
                </div>
            </header>
            <div className='notice-bar'>
                <p>Web in Development state.</p>
            </div>
        </>
    )
}