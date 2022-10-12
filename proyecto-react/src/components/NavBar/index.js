import React, { useState } from 'react';
import { CartWidget } from '../CartWidget';
import { ShopperLogo } from '../Logo';
import { NavLink } from 'react-router-dom';

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
                        <li className='list-item'>
                            <NavLink to='/inicio'>HOME</NavLink>
                        </li>
                        <li className='list-item'>
                            <NavLink to='/category/info'>INFO</NavLink>
                            </li>
                        <li className='list-item'>
                            <NavLink to='/category/products'>PRODUCTS</NavLink>
                        </li>
                        <li className='list-item'>
                            <NavLink to='/category/contact'>CONTACT</NavLink>
                        </li>
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
            <div className='separation'></div>
        </>
    )
}