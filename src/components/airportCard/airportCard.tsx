import { typeAirport } from "../../types/types"

interface typeAirportProps {
  airport: typeAirport
  key: number
}

function AirportCard({airport}: typeAirportProps) {

  return(
    <>
    <h4>card</h4>
    {airport.id}
    {airport.name}
  
    </>
  )
}

export default AirportCard