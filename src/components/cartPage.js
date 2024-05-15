import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import {removeFromCart} from "../components/cartReducer";
import "../styles/cart.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const CartPage=({ items, removeFromCart })=>
    {
        const cartItems = useSelector((state) => state.cart.items);
        // console.log(cartItems);
        const dispatch=useDispatch();
        const currentDate=new Date();
        
        
       
       
        return (
                  
                <div className="main">
                    <h1>Cart</h1>
                    <ol>
                        {cartItems.map((item,index)=>
                        (
                            <li key={index}>
                            <div className="title">{item.title}</div>
                            <img src={item.image} alt="file not found" width="100px" height="80px"/>
                            <div><span>Price:</span> ${item.price}</div>
                            <div><span>Date:</span>  {currentDate.toLocaleString()}</div>
                            <div> <button onClick={() => removeFromCart(item.id)}>Remove</button></div>
                            </li>
                        ) 
                        
                    )
                        }
                    </ol>
                    <Link to="/"><button className="prod">Go to Products page</button></Link>
                </div>              
            )
    }


const mapStateToProps = state => ({
    items: state.cart.items,
  });
  
  export default connect(mapStateToProps, { removeFromCart })(CartPage);