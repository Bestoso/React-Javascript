import React from 'react'
import { CartWidget } from './CartWidget'
import { ShopperLogo } from './ShopperLogo'

export const NavBar = () => {
    return (
        <header className='navBar'>
        <ShopperLogo />
            <nav className='navBar__menu'>
                <ul className='navBar__menu__list'>
                    <li className='list-item'><a href='#itemCont'>Home</a></li>
                    <li className='list-item'><a href='#itemCont'>Info</a></li>
                    <li className='list-item'><a href='#itemCont'>Products</a></li>
                    <li className='list-item'><a href='#itemCont'>Contact</a></li>
                </ul>
            </nav>
            <div className='navBar__cart'>
                <button className='cart-anchor'>
                    <p>SHOP</p>
                    <CartWidget/>
                </button>
            </div>
        </header>
    )
}