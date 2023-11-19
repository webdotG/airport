
import style from './airportSearch.module.scss'
import { useInput } from '../../hook/input'
import { useEffect, useState } from 'react'
import { useDebounced } from '../../hook/debounce'
import axios from '../../axios'
import { typeAirport } from '../../types/types'
import { useNavigate } from 'react-router-dom'

function AirportSearch() {
  const navigate = useNavigate()
  const input = useInput('')
  const debounced = useDebounced<string>(input.value, 300)
  const [searchAirports, setSearchAirports] = useState<typeAirport[]>([])
  const [searchDrop, setSearchDrop] = useState(false)

  async function fetchAirports() {
    const response = await axios.get(`airports?q=${debounced}`) 
    // console.log("FETCH AIRPORTS SEARCH RESPONSE.DATA : ", response.data)
    setSearchAirports(response.data)
  }

  useEffect(() => {
    if (debounced.length > 2) {
      fetchAirports().then(() => setSearchDrop(true))
    } else {
      setSearchDrop(false)
    }
    //  console.log("DEBOUNCED : ", debounced)
  }, [debounced])

  return (
    <div className={style.wrapper}>
      <input
        {...input}
        type="text"
        placeholder='поиск'
      />
      {searchDrop &&
        <div className={style.search_drop}>
          <ul>
            {
              searchAirports.map((airport) => (
                <li className={style.search_dop_item}
                  onClick={() => navigate(`/aiprort/${airport.id}`)}
                  key={airport.id}>{airport.name}</li>
              ))
            }
          </ul>
        </div>
      }
    </div>
  )
}

export default AirportSearch