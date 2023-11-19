import { AppDispatch } from '..'
import axios from '../../axios'

export const fetchAirports = () => {

  return async (dispatch: AppDispatch) => {

    try {
     const response = await axios.get('airports')
     console.log('RESPONSE : ', response.data)
    } catch (e) {

    }

  }
}