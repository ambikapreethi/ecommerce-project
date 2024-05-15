import React, { useEffect, useState } from "react";
import shirt from "../images/shirt.jpg";
import "../styles/products.css";
import { useDispatch, useSelector } from "react-redux"; 
import { fetchProducts } from "../components/productReducer";
import CartPage from "../components/cartPage";
import { Link } from "react-router-dom";
import { addToCart } from "./cartReducer";
import { connect } from "react-redux";
import { showPopup } from "../Actions/popupActions";
import "../styles/popup.css";

function Products({ products, addToCart, showPopup })
{
    
    const dispatch=useDispatch();
    const currentDate = new Date().toISOString();
    const items=useSelector(state=>state.products.products);
    
    const loading=useSelector(state=>state.products.loading);

    const handleAddToCart = (product) => {
        addToCart(product);
        showPopup();
      };

    useEffect(() => {
       dispatch(fetchProducts());
        
        },[dispatch]); 
    
    const shopStyle={
        marginTop:"-30px",
        letterSpacing:"4px"
    };
   const headStyle={
        fontSize:"40px",
        marginTop:"2px",
        letterSpacing:"2px"
   }
   const span={
    color:"orange"
   }

   if (loading) {
       <div>Loading...</div>;
      }else
    return (
     
    <div className="container">
        <div className="heading">
            <h1 style={headStyle}>SIL<span style={span}>VA</span> </h1>
            <p style={shopStyle}>SHOPPING</p>
        </div>
        <div  className="menu">
            <a>Home</a>
            <a>Shop</a>
            <a>About Us</a>
            <a>Contact</a>
            <a>Blog</a>
        </div> 
        <div className="best">
           <h3>The Best in Beauty.Tailored to You. </h3>
        </div>
        
       
        {items.map((item, index) => (
              <div key={index} style={{ width:"200px",float:"right", margin: "10px", border: "1px solid #ccc", padding: "5px" }}>
                <h2 className="prodtitle">{item.title}</h2>
                <img src={item.image} alt="file not found" width="100px" height="80px"/>
                <p>Price: ${item.price}</p>
                <Link to="/cart"><p><button onClick={() => handleAddToCart(item)}>Add to Cart</button></p></Link>
                
            </div>
        
           ))}
           
    </div>
       );   
    
    
}
const mapStateToProps = state => ({
    products: state.products
  });

  export  default connect(mapStateToProps, { addToCart,showPopup })(Products);
