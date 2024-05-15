import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import popupReducer from "./popupReducer";

const rootReducer=combineReducers({
    cart:cartReducer,
    products:productReducer,
    popup:popupReducer
}
)
export default rootReducer;