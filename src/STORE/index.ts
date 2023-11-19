import { configureStore, combineReducers } from "@reduxjs/toolkit";
import airportSlice from "./slices/airportSlice";
import filterSlice from "./slices/filterSlice";

const rootReducer = combineReducers({
  airport: airportSlice,
  filter: filterSlice
})

export const store = configureStore({
  reducer: rootReducer
}) 

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
