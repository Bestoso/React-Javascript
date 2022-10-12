import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Cart = () => {
    const { buy } = useParams();
    const [producto, setProducto] = useState({});

    const productDetail = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/`);
        const data = await response.json();
        const dataDetail = data.filter(prod => prod.id === parseInt(buy));
        setProducto(dataDetail[0]);
    }

    useEffect(() => {
        productDetail();
    }, [])

    return (
        <div>Comprar producto: {producto.title} </div>
    )
}
