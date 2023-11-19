import { configureStore, combineReducers } from "@reduxjs/toolkit";
import airportSlice from "./slices/airportSlice";

const rootReducer = combineReducers({
  airport: airportSlice
})

export const store = configureStore({
  reducer: rootReducer
}) 

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
