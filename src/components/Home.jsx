import React from 'react'
import "../styles/home.css"
import Img from "../assets/aaa.jpg"
import Products from './Products'

export default function Home() {
  return (

    <div className='hero'>
        <div className='img'>
            <img src={Img} alt="background" className='c-img' />
              <div className="img-overlay">
                <div className="cont">
                  <h1>NEW ARRIVALS</h1>
                  <p>CHECK OUT ALL THE TRENDS.</p>
                </div>
              </div>
            </div>
            <Products/>
    </div>
  )
}
