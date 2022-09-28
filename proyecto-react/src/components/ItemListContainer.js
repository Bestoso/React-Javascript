import React from 'react'
import { ShopperLogo } from './ShopperLogo'

export const ItemListContainer = ({greeting}) => {
    return (
        <section className='item-container' id='itemCont'>
            <h3>{greeting}</h3>
            <ShopperLogo />
            <p className='small'> Proximamente...</p>
        </section>
    )
}
