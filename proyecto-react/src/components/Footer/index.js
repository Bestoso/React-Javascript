import React from 'react';
import { ShopperLogo } from '../Logo';

export const Footer = () => {
    return (
        <footer>
            <div className='info'>
                <ul>
                    <li className='title'><ShopperLogo /></li>
                    <li>Text</li>
                    <li>Text</li>
                </ul>
            </div>
            <div className='info'>
                <ul>
                    <li className='title'>Title Text</li>
                    <li>Text</li>
                    <li>Text</li>
                </ul>
            </div>
            <div className='info'>
                <ul>
                    <li className='title'>Title Text</li>
                    <li>Text</li>
                    <li>Text</li>
                </ul>
            </div>

        </footer>
    )
}
