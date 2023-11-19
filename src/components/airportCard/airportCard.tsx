import { useNavigate } from "react-router-dom"
import { typeAirport } from "../../types/types"
import style from './airportCard.module.scss'

interface typeAirportProps {
  airport: typeAirport
  key: number
}

function AirportCard({airport}: typeAirportProps) {
  const navigate = useNavigate()

  const clickHandler = () => {
    navigate(`/airport/airport/${airport.id}`)
  }

  return(
    <div className={style.card_wrapper} onClick={clickHandler}>
      <p>{airport.name}</p>
      <p>country : {airport?.country}</p>
      <p>ident : {airport?.ident}</p>
      <p>local code : {airport?.local_code}</p>
      <p>region : {airport?.region}</p>
      <p>type : {airport?.type}</p>
    </div>  
  )
}

export default AirportCard