import { globalReducer } from "../slices/GlobalSlices";

const setLoading = (value) => {
  return globalReducer({ type: "SET_LOADING", value });
};

const setData = (value) => {
  return globalReducer({ type: "SET_DATA", value });
};

const setAction = (value) => {
  return globalReducer({ type: "SET_ACTION", value });
};

export { setLoading, setData, setAction };
