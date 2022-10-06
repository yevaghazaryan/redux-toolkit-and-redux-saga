import {
  createSlice,
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";

const factSlice = createSlice({
  name: "fact",
  initialState: {
    fact: ""
  },
  reducers: {
    fetchData: (state, action) => {
      return {
        fact: action.payload
      };
    }
  }
});

export const { fetchData } = factSlice.actions;

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    fact: factSlice.reducer
  },
  middleware
});

sagaMiddleware.run(saga);

export default store;
