import React from 'react'
import { ShopperLogo } from '../Logo'
import { Slider } from '../Slider'

export const ItemListContainer = ({greeting}) => {
    return (
        <>
            <Slider />
            <section className='item-container' id='itemCont'>
                    <h3>{greeting}</h3>
                    <ShopperLogo />
                    <p className='small'> Proximamente...</p>
            </section>
        </>
    )
}
