
import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
// import Axios from "axios";

export const fetchProducts=createAsyncThunk("products/fetchProducts",
    async()=>
        {
                try {
                  const response = await fetch('https://fakestoreapi.com/products');
                  if (!response.ok) {
                    throw new Error('Failed to fetch products');
                  }
                  const data = await response.json();
                  return data;
                } catch (error) {
                    throw error;
                  }
                
        }
)

const productSlice = createSlice({
    name: "products",
    initialState:
    {
        products:[],
        loading:"false",
        error:null
    },
    
    reducers: {},

    extraReducers: (builder) => {
        builder
          .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
          }) 
          .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload; // Update products with fetched data
          })
          .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
      });
  },
})



export default productSlice.reducer;
export const {fetchProductsStart,fetchProductsSuccess,fetchProductsFailure}= productSlice.actions;


