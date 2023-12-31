import {useAppDispatch, useAppSelector} from '../../hook/redux'
import AirportCard from '../../components/airportCard/airportCard'
import AirportFilter from '../../components/airportFilter/airportFilter'
import AirportSearch from '../../components/airportSearch/airportSearch'
import style from './mainPage.module.scss'
import { useEffect } from 'react'
import { fetchAirports } from '../../STORE/actions/airportAction'


function MainPage() {
  const dispatch = useAppDispatch()
  const {loading, error, airports} = useAppSelector(state => state.airport)

  useEffect(() => {
dispatch(fetchAirports())
  }, [dispatch])

  return (
    <div className={style.mainpage_wrapper}>
      <h1>Главная</h1>
      <AirportSearch />
      <AirportFilter />
      {loading && <p className={style.loading}>Загрузка...</p>}
      {error && <p className={style.error}>Ошибка... {error}</p>}
      {
        airports.map(airport => <AirportCard key={airport.id} airport={airport} />)
      }
      
    </div>
  )
}

export default MainPage