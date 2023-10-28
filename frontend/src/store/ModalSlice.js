import { createSlice } from "@reduxjs/toolkit";
console.log("modalslice");

const ModalSlice = createSlice({
  name: "modal",
  initialState: {
    // data: [],
    isModalVisible: false,
  },
  reducers: {
    setIsModalVisible: (state, action) => {
      state.isModalVisible = action.payload;
    },
  },
});

export const { setModalData, setIsModalVisible } = ModalSlice.actions;
export default ModalSlice.reducer;
