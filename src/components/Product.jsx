import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
// import MenuIcon from '@material-ui/icons/Menu';
import "../styles/product.css"
import { useContext } from 'react';
import CartContext from '../CartContext';

function Product() {

    const {id} = useParams();
    const [product, setproduct] = useState([]);
    const [loading, setloading] = useState(false);

    // const dispatch = useDispatch();
    // const addProduct = (product)=> {
    //     dispatch(addCart(product));
    // }

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
                <div className="prod">
                    <Skeleton style={{height:"400px"}}/>
                </div>
                <div className="prod">
                    <Skeleton style={{height:"50px",
                                    width:"300px"}}/>
                    <Skeleton style={{height:"75px"}}/>
                    <Skeleton style={{height:"25px",
                                    width:"150px"}}/>
                    <Skeleton style={{height:"150px"}}/>
                    <Skeleton style={{height:"50px",
                                    width:"100px"}}/>
                    <Skeleton style={{height:"50px",
                                    width:"100px",
                                    marginLeft: ""}}/>
                </div>
            </>
        )
    }
    const ShowProduct = ({ name, price, category }) => {
    const {addToCart} = useContext(CartContext);
    const caro = {
        name:product.title, 
        price:product.price, 
        category:product.category
        }

        console.log(caro)

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
                    <button onClick={() => addToCart(caro)}>Add to cart</button>
                    <NavLink to="/cart"
                    style={{
                        color: "#fff",
                        borderRadius: "3px",
                        textDecoration: "none",
                        display: "inline-block",
                        padding: " 7px 15px",
                        background: "rgb(127, 11, 242)"
                        }}>Go to cart</NavLink>
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