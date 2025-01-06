import React, { useState, useEffect } from "react"
import './AnotherCSS.css'
import { Link } from "react-router-dom"
import axios from "axios"

import Clair from "./Images/CLAIR-Logo.png"
import Profile from "./Images/Profile.png"
import Search from "./Images/Search Logo.png"
import BGVideo from "./Images/BG-Video.mp4" // bawal 2gb and up huhu
import Arrow from "./Images/arrow.png"
import X from "./Images/X.png"
import Cart from "./Images/cart.png"

import FacebookLogo from "./Images/FacebookLogo.png"
import XLogo from "./Images/XLogo.png"
import InstagramLogo from "./Images/InstagramLogo.png"
import YoutubeLogo from "./Images/YoutubeLogo.png"


const FrontPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8800/products")
        console.log(res.data)
        setProducts(res.data)
      } catch (err) {
        console.error(err)
      }
    };
    fetchProducts();
  }, []);

  const reload = () => {
    window.location.reload()
  };

  const clickProfileLogo = () => {
    window.location.href = "http://localhost:3000/LogInPage/"
  };

  const [searchQuery, setSearchQuery] = useState("")
  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="background-background-background">
      <div className="full-page">
        <div className="navbar">
          <div className="logo-png">
            <img src={Clair} title="CLAIR LOGO" alt="Clair Logo PNG" id="logo" onClick={reload} />
            <span> | C L A I R </span>
          </div>

          <div className="navbar-right-side">
            <ul>
              <li> <Link to="/FrontPage"> Home </Link></li>
              <li> <img src = {Cart} id = "cart"/></li>
              <li> <Link to="/UserProfile"> Profile </Link></li>
            </ul>
          </div>

          <div className="profile-logo-png">
            <img src={Profile} title="Profile LOGO" alt="Profile Logo" id="profile-logo" onClick={clickProfileLogo} />
          </div>
        </div>

        <div className="body-below-nav">
          <video autoPlay muted loop preload="auto" id="bgVideo">
            <source src={BGVideo} type="video/mp4" />
          </video>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for excellence"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <img src={Search} alt="Search" id="search" />
          </div>
        </div>






{/** ADD TO CART*/}




        <div className = "AddToCart">

          <div className = "HiddenAddToCart">
            <img src = {Arrow} id = "arrow"/>
              <div className = "grayOut">
                <div className = "AddToCartMenu">
                  

                </div>
               </div>
          </div>

        </div>


{/** ADD TO CART*/}



        <div className="productShowCase">
          <h1> Come check our deals from vetted vendors! </h1>
          <div className="productFrontColumn"> {/** if no products, say no products found */}
            {filteredProducts.length > 0 ? ( 
            
            filteredProducts.map((product) => (
                <div key={product.productID} className="productFrontRow">
                  <div className = "frontrowimage">
                  <img src={`http://localhost:8800/uploads/${product.productImage1}`} alt={product.productName} />
                  </div>
                  <h3> {product.productName} </h3>
                  <p> Quantity: {product.productQuantity}</p>
                  <p> PHP {product.productPrice}</p>
                  <button> Add to Cart </button>
                </div>
              ))
            ) : (
              <span><p>No products found.</p></span>
            )}

          </div>
        </div>
        <footer>
          <span>&copy; 2025 Clair. All Rights Reserved 2024. </span>
          <a href="https://facebook.com/AvoirJoseph"> <img src={FacebookLogo} alt="Facebook" /></a>
          <a href="https://x.com/AvoirJoseph"> <img src={XLogo} alt="X" /></a>
          <a href="https://instagram.com/AvoirJoseph"> <img src={InstagramLogo} alt="Instagram" /></a>
          <a href="https://youtube.com/@AvoirJoseph"> <img src={YoutubeLogo} alt="YouTube" /></a>
        </footer>
      </div>
    </div>
  );
};

export default FrontPage;
