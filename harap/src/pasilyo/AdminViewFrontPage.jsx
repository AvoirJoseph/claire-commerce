import React, { useState, useEffect, useRef } from "react";
import './AnotherCSS.css';
import { Link } from "react-router-dom";
import axios from "axios";


import Clair from "./Images/CLAIR-Logo.png";
import Profile from "./Images/Profile.png";
import Search from "./Images/Search Logo.png";
import BGVideo from "./Images/BG-Video.mp4";

import FacebookLogo from "./Images/FacebookLogo.png";
import XLogo from "./Images/XLogo.png";
import InstagramLogo from "./Images/InstagramLogo.png";
import YoutubeLogo from "./Images/YoutubeLogo.png";

const AdminViewFrontPage = () => {

  const targetRef = useRef(null)
  const handleScroll = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth"})
  }

  const [product, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8800/products");
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async(productID) => {
    try{
        await axios.delete(`http://localhost:8800/product/${productID}`)
        window.location.reload()
    } catch(err){
        console.log(err)
    }
  }

  const [searchQuery, setSearchQuery] = useState(""); 
    const filteredProducts = product.filter((product) =>
      product.productName.toLowerCase().includes(searchQuery.toLowerCase()));

  const reload = () => {
    window.location.reload();
  }

  const clickProfileLogo = () => {
    window.location.href = "http://localhost:3000/LogInPage/";
  }

  return (
    <div className="background-background-background">
      <div className="full-page">
        <div className="navbar">
          {/* Nav Bar */}
          <div className="logo-png">
            <img src={Clair} title="CLAIR LOGO" alt="Clair Logo PNG" id="logo" onClick={reload} />
            <span> | C L A I R </span>
          </div>

          <div className="navbar-right-side">
            <ul>
              <li> <Link to="/AdminViewFrontPage"> Home </Link></li>
              <li> <Link to="/FrontPage"> Client View </Link></li>
              <li> <Link to = "/UserTable"> All Users </Link></li>
            </ul>
          </div>

          {/* Profile Dropdown */}
          <div className="profile-logo-png">
            <img src={Profile} title="Profile LOGO" alt="Profile Logo" id="profile-logo" onClick={clickProfileLogo} />
          </div>
        </div>
        {/* Nav Bar */}

        <div className = "body-below-nav">
          <video autoPlay muted loop preload = "auto" id = "bgVideo">
            <source src = {BGVideo} type = "video/mp4" />
          </video>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for excellence"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <img src={Search} alt = "Search" id = "search" onClick = {handleScroll} />
          </div>
        </div>  

        <div className="productShowCase" ref={targetRef}>
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
                  <button> <Link to = {`/UpdateProduct/${product.productID}`}> Update </Link></button>
                  <button id = "delete" onClick = {() => handleDelete(product.productID)}> Delete </button>
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

export default AdminViewFrontPage;
