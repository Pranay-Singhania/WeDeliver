import { createSlice } from "@reduxjs/toolkit";

const AddressSlice = createSlice({
  name: "myAddress",
  initialState: {
    data: "Regus, Jharsa, Durga Colony, Sector 39, Gurgaon, Haryana, India",
  },
  reducers: {
    setMyAddress: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setMyAddress } = AddressSlice.actions;
export default AddressSlice.reducer;
