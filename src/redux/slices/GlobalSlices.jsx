import { createSlice } from "@reduxjs/toolkit";

const GlobalSlices = createSlice({
  name: "global",
  initialState: {
    isLoading: true,
    data: [],
    action: "",
  },
  reducers: {
    globalReducer: (state, action) => {
      switch (action.payload.type) {
        case "SET_LOADING":
          return {
            ...state,
            isLoading: action.payload.value,
          };

        case "SET_TOKEN":
          return {
            ...state,
            isToken: action.payload.value,
          };

        case "SET_DATA":
          return {
            ...state,
            data: action.payload.value,
          };
        case "SET_ACTION":
          return {
            ...state,
            action: action.payload.value,
          };
        default:
          return state;
      }
    },
  },
});

export const { globalReducer } = GlobalSlices.actions;
export default GlobalSlices.reducer;
