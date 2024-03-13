import { configureStore } from "@reduxjs/toolkit";
import ProductReducre from "../Slices/ProductSlice";
import CategaryReducer from "../Slices/CategarySlice";
 const store=configureStore({
reducer:{
  product:ProductReducre,
  categary:CategaryReducer,
}

})
export default store