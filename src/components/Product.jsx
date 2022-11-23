import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import "../styles/product.css"

function Product() {

    const {id} = useParams();
    const [product, setproduct] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setloading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setproduct(await response.json());
            setloading(false);
        }
      getProduct();
    }, [])
    
    const Loading = () => {
        return(
            <>
                Loading...
            </>
        )
    }
    const ShowProduct = () => {
        return(
            <>
            <div className="prod">
                <div className="prod-show">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="prod-show2">
                    <h4>
                        {product.category}
                    </h4>
                    <h1>{product.title}</h1>
                    <p className="lead">
                        Rating  {product.rating && product.rating.rate}
                    </p>
                    <h3>$ {product.price}</h3>
                    <p className="lead2">{product.description}</p>
                    <button>Add to cart</button>
                    <NavLink to="/cart">Go to cart</NavLink>
                </div>
            </div>
            </>
        )
    }

  return (
    <div>
        <div className="container">
            <div className="row">
                {loading ? <Loading/> : <ShowProduct/>}
            </div>
        </div>
    </div>
  )
}

export default Product