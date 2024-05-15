import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closePopup } from './cartReducer';
import "../styles/popupBox.css";

const PopupBox = () => {
  const isPopupOpen = useSelector((state) => state.cart.isPopupOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closePopup()); // Dispatch action to close the popup
  };

  return (
    <div style={{ display: isPopupOpen ? 'block' : 'none' }}>
      <div className='popup'>
        <p className='item'>Item added to cart!</p>
        <button className='btnclose' onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default PopupBox;