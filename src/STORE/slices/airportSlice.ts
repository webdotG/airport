import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { typeAirport } from "../../types/types"


interface typeAirportSatet {
  loading: boolean,
  error: string,
  airports: typeAirport[]
}

const initialState: typeAirportSatet = {
  loading: false,
  error: '',
  airports: [],
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
    },

    fetchError(state, action: PayloadAction<Error>){
      state.loading = false
      state.error = action.payload.message
    }


  }
})

export const { fetching, fetchSuccess, fetchError } = airportSlice.actions
export default airportSlice.reducer
