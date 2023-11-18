import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/main/mainPage'
import AuthPage from './pages/auth/authPage'
import AirportPage from './pages/airport/aiportPage'
// import style from './App.module.scss'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/auth' element={<AuthPage />}></Route>
        <Route path='/airport/:id' element={<AirportPage />}></Route>
      </Routes>
    </>
  )
}

export default App
