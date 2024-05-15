import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../components/rootReducer";

const store = configureStore({
  reducer:rootReducer
}
)



export default store;