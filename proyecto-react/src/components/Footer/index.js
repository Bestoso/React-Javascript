import React from 'react';
import { ShopperLogo } from '../Logo';

export const Footer = () => {
    return (
        <footer>
            <div className='info'>
                <ul>
                    <li className='title'><ShopperLogo /></li>
                    <li>We are a company that etc etc</li>
                    <li>If you like our Job etc</li>
                </ul>
            </div>
            <div className='info'>
                <ul>
                    <li className='title'>CONTACT</li>
                    <li>11-6630-1845</li>
                    <li>santibestoso@gmail.com</li>
                </ul>
            </div>
            <div className='info'>
                <ul>
                    <li className='title'>MORE INFO</li>
                    <li>Some text rigth here</li>
                    <li>Web dev by Santiago Bestoso</li>
                </ul>
            </div>

        </footer>
    )
}
