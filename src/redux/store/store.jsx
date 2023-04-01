import { configureStore } from "@reduxjs/toolkit";
import GlobalSlices from "../slices/GlobalSlices";

const store = configureStore({
  reducer: {
    global: GlobalSlices,
  },
});

export default store;
