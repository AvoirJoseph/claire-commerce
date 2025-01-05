

import React, { useState, useEffect } from "react";
import './AnotherCSS.css';
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Clair from "./Images/CLAIR-Logo.png";
import Profile from "./Images/Profile.png";
import Search from "./Images/Search Logo.png";
import BGVideo from "./Images/large.mp4"; // bawal 2gb and up sayang

import FacebookLogo from "./Images/FacebookLogo.png";
import XLogo from "./Images/XLogo.png";
import InstagramLogo from "./Images/InstagramLogo.png";
import YoutubeLogo from "./Images/YoutubeLogo.png";

const UpdateProduct = () => {

    const { productID } = useParams()

    const [product, setProduct] = useState({
        productName: "",
        productPrice: "",
        productDescription: "",
        productQuantity: "",
        productImage1: "",
        productImage2: "",
        productImage3: "",
        productImage4: "",
        productImage5: "",
        productImage6: "",
        productImage7: "",
        productTag1: "",
        productTag2: "",
        productTag3: "",
        productTag4: "",
        productTag5: "",
        productTag6: "",
        productTag7: "",
    })

    const [selectedFiles, setSelectedFiles] = useState({
        productImage1: null,
        productImage2: null,
        productImage3: null,
        productImage4: null,
        productImage5: null,
        productImage6: null,
        productImage7: null,
    })
    


    const handleChange = (e) => {
        const {name, value} = e.target
        setProduct({...product, [name]: value})
    }

    const handleFileChange = e => {
        const {name, files} = e.target
        setSelectedFiles({ ...selectedFiles, [name]: files[0]})
    }

    const handleUpdate = async () => {
        const formData = new FormData();
    
        // Append product fields
        for (const key in product) {
            if (product[key]) {
                formData.append(key, product[key]);
            }
        }
    
        // Append selected files
        for (const key in selectedFiles) {
            if (selectedFiles[key]) {
                formData.append(key, selectedFiles[key]);
            }
        }
    
        try {
            await axios.put(`http://localhost:8800/product/${productID}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert("Product Updated Successfully");
            window.location.reload();
        } catch (err) {
            console.error(err);
            alert("Error Updating Product");
        }
    };

    const handleDelete = async() => {
        try{
            await axios.delete(`http://localhost:8800/product/${productID}`)
            alert("Product Deleted!")
            window.location.reload()
        } catch(err){
            console.log(err)
            alert("Error Deleting Product")
        }
    }

    const reload = () => {
        window.location.reload();
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
                                <li> <Link to = "/FrontPageNoLogIn"> Log Out </Link></li>
                            </ul>
                        </div>
                
                    {/* Profile Dropdown */}

                        </div>
                    {/* Nav Bar */}
    
                    <div className = "body-below-nav">
                 </div>

                 <div className ="productShowCase">
          
                <h1> User | Vendors </h1>
                
                <button>
                    <Link to = "/AddUser"> Add New User </Link>
                </button>

                <div className ="productFrontColumn">

                <h1>Update Product {productID}</h1> 
                    <input type="text" placeholder="New Product Name" onChange={handleChange} name="productName" value = {product.productName} />
                    <input type="text" placeholder="New Product Description" onChange={handleChange} name="productDescription" value = {product.productDescription} />
                    <input type="number" placeholder="New Product Price" onChange={handleChange} name="productPrice" value = {product.productPrice} />
                    <input type="number" min = "1" placeholder="New Product Quantity" onChange={handleChange} name="productQuantity" value = {product.productQuantity} />
                    <input type="file" placeholder="New Product Image" onChange={handleFileChange} name="productImage1" />
                    <input type="file" placeholder="New Product Image" onChange={handleFileChange} name="productImage2"/>
                    <input type="file" placeholder="New Product Image" onChange={handleFileChange} name="productImage3"/>
                    <input type="file" placeholder="New Product Image" onChange={handleFileChange} name="productImage4" />
                    <input type="file" placeholder="New Product Image" onChange={handleFileChange} name="productImage5"/>
                    <input type="file" placeholder="New Product Image" onChange={handleFileChange} name="productImage6" />
                    <input type="file" placeholder="New Product Image" onChange={handleFileChange} name="productImage7" />
                    <input type="text" placeholder="New Product Tag" onChange={handleChange} name="productTag1" value = {product.productTag1} />
                    <input type="text" placeholder="New Product Tag" onChange={handleChange} name="productTag2" value = {product.productTag2} />
                    <input type="text" placeholder="New Product Tag" onChange={handleChange} name="productTag3" value = {product.productTag3} />
                    <input type="text" placeholder="New Product Tag" onChange={handleChange} name="productTag4" value = {product.productTag4} />
                    <input type="text" placeholder="New Product Tag" onChange={handleChange} name="productTag5" value = {product.productTag5} />
                    <input type="text" placeholder="New Product Tag" onChange={handleChange} name="productTag6" value = {product.productTag6} />
                    <input type="text" placeholder="New Product Tag" onChange={handleChange} name="productTag7" value = {product.productTag7} />
            
                    <button onClick={handleUpdate}>Update</button> 
            
                    <button onClick = {handleDelete}> Delete </button>

                        
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
    )
    
}

export default UpdateProduct