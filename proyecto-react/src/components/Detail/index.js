import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Detail = () => {
    const { id } = useParams();
    const [loader, setLoader] = useState(true)
    const [producto, setProducto] = useState({});

    const productDetail = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/`);
        const data = await response.json();
        const dataDetail = data.filter(prod => prod.title === id);
        setProducto(dataDetail[0]);
        setLoader(false)
    }

    useEffect(() => {
        productDetail();
    }, []);

    if (loader){
        return (
            <div className='loader'>
                <div className='product-section'>
                    <div className="progress-loader">
                        <div className="progress"></div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <section className='detail-section'>
            <div className='detail-cont'>
                <div className='detail-img'>
                    <img src={producto.image} alt={producto.title}></img>
                </div>
                <div className='detail-text'>
                    <h2 className='detail-title'>{producto.title}</h2>
                    <h2 className='detail-price'>${producto.price}</h2>
                    <div className='detail-description'>
                        <p className='description-text'>{producto.description}</p>
                    </div>
                    <div className='detail-buy'>
                        <Link to={'/item/' + producto.title + '/' + producto.id}>
                            <button className='buy-now'> Comprar ahora </button>
                        </Link>
                        <button className='add-now'> Agregar al carrito</button>
                        <Link to='/products'>
                        <button> Go Back </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
