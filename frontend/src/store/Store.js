import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./ModalSlice";
import addressReducer from "./AddressSlice";
import cartReducer from "./CartSlice";
const store = configureStore({
  reducer: {
    modal: modalReducer,
    myAddress: addressReducer,
    cart: cartReducer,
  },
});

export default store;
