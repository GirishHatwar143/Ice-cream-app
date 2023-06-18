import {configureStore} from "@reduxjs/toolkit";
import checkoutReducer from "./ckeckoutSlice"

const store=configureStore({
  reducer:{
    checkout:checkoutReducer
  }
});

export default store;