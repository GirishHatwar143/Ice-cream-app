import { createSlice } from "@reduxjs/toolkit";
import Data from "../Data";

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    Data,
    checkedItems: [],
    cartitems: [],
    favorite: []
  },
  reducers: {
    addItem: (state, action) => {
      let itemAdded = action.payload.item;
      let index = state.Data.findIndex((item) => item.id === itemAdded.id);
      state.Data[index].quantity = action.payload.quantity;
      state.checkedItems = [...state.checkedItems, state.Data[index]];

    },
    addToCart: (state, action) => {
      let presentData = state.cartitems.find((ele) => ele.itemName === action.payload.itemName)
      if (presentData) {
        presentData.quantity++;
       
        [...state.cartitems]
      } else {
        state.cartitems.push(action.payload)
      }

    },
    removeToFavorite: (state, action) => {
      
      let index = state.favorite.findIndex(
        (item) => item.id === item.id
    )
      state.favorite.splice(index, 1)
    },
    addToFavorite: (state, action) => {
      state.favorite.push(action.payload)

    },
    removeItem: (state, action) => {
      let itemRemoved = action.payload;

      let index = state.checkedItems.findIndex(
        (item) => item.id === itemRemoved.id
      );

      state.checkedItems.splice(index, 1);
    },

    clearCheckedItems: (state) => {
      state.checkedItems.splice(0, state.checkedItems.length);
    },
    changeColor: (state, action) => {

      let presentData = state.Data.find((ele) => ele.itemName === action.payload.itemName)

      if (presentData) {
        presentData.favorite = !presentData.favorite;
        [...state.Data]
      }
    }


  }

});

export const { addItem, removeItem, clearCheckedItems, addToCart, removeToFavorite, changeColor, addToFavorite } = checkoutSlice.actions
export default checkoutSlice.reducer;