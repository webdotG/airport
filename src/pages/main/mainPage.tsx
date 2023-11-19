import {useAppDispatch} from '../../hook/redux'
import AirportCard from '../../components/airportCard/airportCard'
import AirportFilter from '../../components/airportFilter/airportFilter'
import AirportSearch from '../../components/airportSearch/airportSearch'
import style from './mainPage.module.scss'
import { useEffect } from 'react'
import { fetchAirports } from '../../STORE/actions/airportAction'


function MainPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
dispatch(fetchAirports())
  }, [dispatch])

  return (
    <div className={style.mainpage_wrapper}>
      <h1>main</h1>
      <AirportSearch />
      <AirportFilter />
      <AirportCard />
    </div>
  )
}

export default MainPage