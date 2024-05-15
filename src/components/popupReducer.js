import { SHOW_POPUP, HIDE_POPUP } from "../Actions/actionTypes";
const initialState={
    isOpen:false
}
  const popupReducer=(state=initialState,action)=>
    {
        switch(action.type)
        {
            case "SHOW_POPUP":
                return {
                    isOpen:true
                };
                case "HIDE_POPUP":
                    return {
                        isOpen:false
                    };
                    default:
                        return state;
        }
    }
export default popupReducer;
    
