import { AppDispatch } from '..'
import axios from '../../axios'
import { typeAirportType, typeAirportRegion, typeAirportCountry } from '../../types/types'
import { fetchSuccess, fetching } from '../slices/filterSlice'

export const fetchFilters = () => {

  return async (dispatch: AppDispatch) => {

    try {
      dispatch(fetching())
      const response = await Promise.all([
        axios.get<typeAirportType[]>('airports?_sort=type'),
        axios.get<typeAirportRegion[]>('airports?_sort=region'),
        axios.get<typeAirportCountry[]>('airports?_sort=country')
      ])
      console.log('DATA : ', response) 
      dispatch(fetchSuccess({
        types: response[0].data,
        regions: response[1].data,
        countries: response[2].data
      }))
      
    } catch (e) {
      // dispatch(fetchError(e as Error))
    }

  }
}