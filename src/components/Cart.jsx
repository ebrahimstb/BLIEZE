// import { InsertEmoticonSharp } from '@mui/icons-material';
import React from 'react'
// import { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';
import { useContext } from "react";
import CartContext from '../CartContext';


function Cart() {
  const {items} = useContext(CartContext)
  console.log(items[0].name);
  
  return (
    <>
      <h1>Cart CHECK OUT</h1>
      <div>
        {items.map((e) => {
          <div>
            <h2>{items.map((item) =>(
              <div>
                <div>{item[0].name}</div>
              </div>
            ))}</h2>
          </div>
        })}
      </div>
    </>
  )
}

export default Cart;

// export default function Cart() {

//   // const {id} = useParams();
//   // const [product, setproduct] = useState([]);
//   // const [loading, setloading] = useState(false);

//   const {items} = useContext(CartContext)


// //   useEffect(() => {
// //     const getProduct = async () => {
// //         setloading(true);
// //         const response = await fetch(`https://fakestoreapi.com/products/${id}`);
// //         setproduct(await response.json());
// //         setloading(false);
// //     }
// //   getProduct();
// // }, [])
// const Cartstuff = ()=>{
//   return(
//     <div className="block">
//     {items.map((carto)=>(
//       <>
//       <div className='productimage'>{carto.name}</div>
//       <div className='productimage'>{carto.price}</div>
//       </>
//     ))}
//   </div>
//   )
// }
//   return (
//     <div>
//         <div className='card'>CHECKOUT PAGE </div>
//         <div><Cartstuff /> </div>
//     </div>
//   )
// }
