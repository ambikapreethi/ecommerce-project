import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { showPopup } from "../Actions/popupActions";

export const addToCartWithDate = createAsyncThunk(
    'cart/addToCartWithDate',
    async ({ item, date }, thunkAPI) => {
      return { item, date };
    }
  );

const cartSlice=createSlice({
name:"cart",
initialState:{
    items:[],
    
    },
    reducers:
    {
        addToCart(state,action)
        {
            state.items.push(action.payload);
           
        },
        removeFromCart(state,action)
        {
            state.items=state.items.filter((item)=>item.id !==action.payload)
        }
    }

})

export default cartSlice.reducer;
export const {addToCart,removeFromCart}=cartSlice.actions;