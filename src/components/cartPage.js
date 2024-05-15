import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import {removeFromCart, updateTotalPrice} from "../components/cartReducer";
import "../styles/cart.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const CartPage=({ items, removeFromCart })=>
    {
        const cartItems = useSelector((state) => state.cart.items);
        const totalPrice = useSelector((state) => state.cart.totalPrice);
        const cartIsEmpty = useSelector((state) => state.cart.items.length === 0);
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
                    <div>
                    {!cartIsEmpty && (
                            <div>
                            <h2  className="totprice">Total Price: ${totalPrice}</h2>
                            </div>
                     )}
                    </div>
                    <Link to="/"><button className="prod">Go to Products page</button></Link>
                </div>              
            )
    }


const mapStateToProps = state => ({
    items: state.cart.items,
  });
  
  export default connect(mapStateToProps, { removeFromCart })(CartPage);