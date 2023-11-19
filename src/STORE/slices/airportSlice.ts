import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { typeAirport, typeFilter } from "../../types/types"


interface typeAirportSatet {
  loading: boolean,
  error: string,
  airports: typeAirport[],
  airportsContainer: typeAirport[]
}

const initialState: typeAirportSatet = {
  loading: false,
  error: '',
  airports: [],
  airportsContainer: []
}

const airportSlice = createSlice({
  name: 'airport',
  initialState,
  reducers:{

    fetching(state){
      state.loading = true
    },

    fetchSuccess(state, action: PayloadAction<typeAirport[]>){
      state.loading = false
      state.airports = action.payload
      state.airportsContainer = action.payload
      // console.log("SLICE STATE AIRPORTS : ", state.airports)
    },

    fetchError(state, action: PayloadAction<Error>){
      state.loading = false
      state.error = action.payload.message
    },

    filterAirport(state, action: PayloadAction<typeFilter>){
      state.airports = state.airportsContainer
        .filter(airport => airport.type.includes(action.payload.type))
        .filter(airport => airport.country.includes(action.payload.country))
        .filter(airport => airport.region.includes(action.payload.region))
    }


  }
})

export const { fetching, fetchSuccess, fetchError, filterAirport } = airportSlice.actions
export default airportSlice.reducer
