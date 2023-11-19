import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { typeAirportCountry, typeAirportRegion, typeAirportType } from "../../types/types"


interface typeFiltersState {
  loading: boolean,
  types: typeAirportType[],
  regions: typeAirportRegion[],
  countries: typeAirportCountry[]
}

interface typeFilterPayload {
  types: typeAirportType[],
  regions: typeAirportRegion[],
  countries: typeAirportCountry[]
}

const initialState: typeFiltersState = {
  loading: false,
  types: [],
  regions: [],
  countries: []
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers:{

    fetching(state){
      state.loading = true
    },

    fetchSuccess(state, action:PayloadAction<typeFilterPayload>){
      state.loading = false
      state.types = action.payload.types
      state.regions = action.payload.regions
      state.countries = action.payload.countries
    },

  }
})

export const { fetching, fetchSuccess } = filterSlice.actions
export default filterSlice.reducer
