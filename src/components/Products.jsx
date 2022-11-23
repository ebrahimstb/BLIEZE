import React from 'react';
import "../styles/products.css"
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


export default function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

        useEffect(() => {
            const getProducts = async () => {
                setLoading(true);
                const response = await fetch("https://fakestoreapi.com/products");
                if(componentMounted){
                    setData(await response.clone().json());
                    setFilter(await response.json());
                    setLoading(false);
                    console.log(filter)
                }

                return() => {
                    componentMounted = false;
                }
            }

            getProducts();
        }, [])
        
        const Loading = () => {
            return(
                <>
                <div className="loo">
                    <skeleton/>
                </div>
                <div className="loo">
                    <skeleton/>
                </div>
                <div className="loo">
                    <skeleton/>
                </div>
                </>
            );
        };

        const filterProduct = (cat) =>{
            const updatedList = data.filter((x)=>x.category === cat);
            setFilter(updatedList);
        }

        const ShowProducts = () => {
            return(
                <>
                <div className="p-buttons">
                        <button onClick={()=>setFilter(data)}>All</button>
                        <button onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                        <button onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                        <button onClick={()=>filterProduct("jewelery")}>Jewelery</button>
                        <button onClick={()=>filterProduct("electronics")}>Electronics</button>
                </div>
                <div className='p-api'>
                {filter.map((product)=>{
                    return(
                        <>
                        <div className='col-md-3'>
                            <div className="card" key={product.id}>
                                <img src={product.image} alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {product.title.slice(0,12)}...
                                    </h5>
                                    <p className="card-text">
                                        ${product.price}
                                    </p>
                                    <NavLink to={`/products/${product.id}`}>Buy Now</NavLink>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })}
                </div>
                </>
            );
         
        };

  return (
    <div>
        <div className="products-container">
            <div className="row">
                <div className="col-12">
                    <h1>Latest Products</h1>
                    <hr />
                </div>
            </div>
            <div className="row2">
                {loading ? <Loading/> : <ShowProducts/>}
            </div>
        </div>
    </div>
  )
}
