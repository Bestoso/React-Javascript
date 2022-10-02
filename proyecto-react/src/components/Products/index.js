import React, {useState, useEffect} from 'react'

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

    // useEffect
    useEffect(() => {
        fetchData();
    }, [])

    if(loader){
        return (
            <div className='product-section'>
                <div className="spinner">
                    <span>L</span>
                    <span>O</span>
                    <span>A</span>
                    <span>D</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
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
                        <img src={prod.image} alt='product' className='product-img' width='300px' height='300px'/>
                        </div>
                        <div className='title'>
                            <h4>{prod.title.substring(29, -1)}</h4>
                        </div>
                            <p className='price'>${prod.price}</p>
                            <button id={prod.id} className='buy-btn'>BUY</button>
                        </div>
                )
            })
        }
        </div>
        )
    }
}
