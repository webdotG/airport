import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/main/mainPage'
import AuthPage from './pages/auth/authPage'
import AirportPage from './pages/airport/airportDetailPage'
import style from './App.module.scss'
import Navigation from './components/navigation/navigation'
import { useAppDispatch } from './hook/redux'
import {useEffect} from 'react'
import { fetchFilters } from './STORE/actions/filterAction'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchFilters)
  },[dispatch]) 

  return (
    <div className={style.app}>
      <Navigation />
      <Routes>
        <Route path='/airport/' element={<MainPage />}></Route>
        <Route path='/airport/auth' element={<AuthPage />}></Route>
        <Route path='/airport/airport/:id' element={<AirportPage />}></Route>
        <Route path='*' element={<p>404</p>}></Route>
      </Routes>
    </div>
  )
}

export default App
