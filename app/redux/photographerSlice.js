
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPhotographer: null,
};

const photographerSlice = createSlice({
  name: "photographer",
  initialState,
  reducers: {
    setSelectedPhotographer: (state, action) => {
      state.selectedPhotographer = action.payload;
    },
    clearSelectedPhotographer: (state) => {
      state.selectedPhotographer = null;
    },
  },
})

export const { setSelectedPhotographer, clearSelectedPhotographer } =
  photographerSlice.actions
export default photographerSlice.reducer
