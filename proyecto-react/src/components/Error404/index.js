import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Error404 = () => {

    const navigate = useNavigate();

    const goBackHome = e => {
        navigate('/inicio');
    }

    const goBackProducts = e => {
        navigate('/products');
    }

    return (
        <div className='error-section'>
            <h1>Error 404</h1>
            <h3>The Page you are looking for does not exist </h3>
            <button onClick={ goBackHome }>Go back</button>
            <button onClick={ goBackProducts }>Go to products section</button>
        </div>
    )
}
