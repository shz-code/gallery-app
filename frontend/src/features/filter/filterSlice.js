import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  selectedCategories: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state.search = action.payload;
    },
    addCategory: (state, action) => {
      state.selectedCategories = state.selectedCategories.concat(
        action.payload
      );
    },
    removeCategory: (state, action) => {
      state.selectedCategories = state.selectedCategories.filter(
        (item) => item !== action.payload
      );
    },
  },
});

export default filterSlice.reducer;
export const { updateSearch, addCategory, removeCategory } =
  filterSlice.actions;
