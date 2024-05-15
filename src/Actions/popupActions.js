
import { SHOW_POPUP, HIDE_POPUP } from '../Actions/actionTypes';
export const showPopup = () => {
    return {
      type: SHOW_POPUP
    }
  }
  
  export const hidePopup = () => {
    return {
      type: HIDE_POPUP
    }
  }
   