import { AppDispatch } from '..'
import axios from '../../axios'
import { typeAirport } from '../../types/types'
import { fetchError, fetchSuccess, fetching } from '../slices/airportSlice'

export const fetchAirports = () => {

  return async (dispatch: AppDispatch) => {

    try {
      dispatch(fetching())
      const response = await axios.get<typeAirport[]>('airports')
      // console.log('RESPONSE.DATA : ', response.data)
      dispatch(fetchSuccess(response.data))
      
    } catch (e) {
      dispatch(fetchError(e as Error))
    }

  }
}