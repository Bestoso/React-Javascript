import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'

export const Detail = () => {
    const {product} = useParams();
    const [producto, setProducto] = useState({});

    const productDetail = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/`);
        const data = await response.json();
        const dataDetail = data.filter(prod => prod.title === product);
        setProducto(dataDetail[0]);
        console.log(dataDetail[0]);
    }

    useEffect(() => {
        productDetail();
    }, []);

    return (
        <section className='banner-section'>
        <div className='goBack'>
            <Link to='/products'>
                <button> Go Back </button>
            </Link>
        </div>
            <div className='detail-cont'>
            <div className='detail-img'>
                <img src={producto.image} alt={producto.title} width='300px' height='300px'></img>
            </div>
            <div className='detail-text'>
                <h2 className='detail-title'>{producto.title}</h2>
                <h2 className='detail-price'>${producto.price}</h2>
                <div className='detail-description'>
                    <p className='description-text'>{producto.description}</p>
                </div>
            <div className='detail-buy'>
                <Link to='/cart/'>
                    <button className='buy-now'> Comprar ahora </button>
                </Link>
                <button className='add-now'> Agregar al carrito</button>
            </div>
            </div>
            </div>
        </section>
    )
}
