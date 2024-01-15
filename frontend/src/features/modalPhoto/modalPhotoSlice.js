import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photo: {},
};

const modalPhotoSlice = createSlice({
  name: "modalPhoto",
  initialState,
  reducers: {
    addModalPhoto: (state, action) => {
      state.photo = action.payload;
    },
  },
});

export default modalPhotoSlice.reducer;
export const { addModalPhoto } = modalPhotoSlice.actions;
