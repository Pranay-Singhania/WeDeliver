import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./ModalSlice";
import addressReducer from "./AddressSlice";
import cartReducer from "./CartSlice";
import authReducer from "./AuthSlice";
const store = configureStore({
  reducer: {
    modal: modalReducer,
    myAddress: addressReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;
