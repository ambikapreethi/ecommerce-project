import React from 'react';
import { connect } from 'react-redux';
import { hidePopup } from './actions';

const PopupComponent = ({ isPopupVisible, hidePopup }) => {
  return (
    isPopupVisible && (
      <div>
        <p>Item added to cart!</p>
        <button onClick={hidePopup}>Close</button>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  isPopupVisible: state.isPopupVisible
});

export default connect(mapStateToProps, { hidePopup })(PopupComponent);