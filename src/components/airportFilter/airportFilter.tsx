import { useAppDispatch, useAppSelector } from "../../hook/redux"
import { useState, useEffect } from 'react'
import style from './airportFiler.module.scss'
import { filterAirport } from "../../STORE/slices/airportSlice"

function AirportFilter() {
  const dispatch = useAppDispatch()
  const { regions, countries, types, loading } = useAppSelector(state => state.filter)
  const [filter, setFilter] = useState({ type: '', region: '', country: '' })
  const [hasFilter, setHasFilter] =useState(false)

  const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(prev => ({...prev, [event.target.name]: event.target.value}))
  }

  const isFilterEnable = () => {
    return filter.region || filter.country || filter.type
  }

  const clearFilter = () => {
    setFilter({ type: '', region: '', country: '' })
  }

  useEffect(() => {
    if(isFilterEnable()) {
      setHasFilter(true)
    } else {
      setHasFilter(false)
    }

    dispatch(filterAirport(filter))
  },[filter])

  if (loading) return <p>Загрузка...</p>

  return (
    <div className={style.wrapper}>
      <h4>фильтрация</h4>
      <div>
        <select name="type"
          onChange={changeHandler}
        >
          <option value='' disabled>type</option>
          {types.map(t => <option key={t}></option>)}
        </select>

        <select name="country"
          onChange={changeHandler}
        >
          <option value='' disabled>country</option>
          {countries.map(c => <option key={c}></option>)}
        </select>

        <select name="region"
          onChange={changeHandler}
        >
          <option value='' disabled>region</option>
          {regions.map(r => <option key={r}></option>)}
        </select>
        { hasFilter && <button onClick={clearFilter} className={style.btn_remove}>очистить</button> }
      </div>
    </div>
  )
}

export default AirportFilter