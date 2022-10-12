import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

export const Products = () => {

    const [productos,setProductos] = useState([]);
    const [loader, setLoader] = useState(true);

    const fetchData = () => {
        setTimeout(async ()=> {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProductos(data);
            console.log(data);
            setLoader(false);
        }, 500);
    }

    useEffect(() => {
        fetchData();
    }, [])

    if(loader){
        return (
            <div className='loader'>
                <div className='product-section'>
                    <div className="progress-loader">
                        <div className="progress"></div>
                    </div>
                </div>
            </div>
        )
    } else{
        return (
            <div className='product-section'>
            {
                productos.map((prod, index) => {
                return (
                        <div className='product-container' key={index}>
                            <div className='img-container'>
                                <img src={prod.image} alt='product' className='product-img' width='220px' height='224px'/>
                            </div>
                            <div className='title'>
                                <h4>{prod.title.substring(29, -1)}</h4>
                            </div>
                            <p className='price'>${prod.price}</p>
                            <Link to={'/item/' + prod.title }>
                                <button id={prod.id} className='buy-btn'>DETAIL</button>
                            </Link>
                        </div>
                )
            })
        }
        </div>
        )
    }
}
