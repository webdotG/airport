
import style from './aiportDetailPage.module.scss'

import { useParams } from "react-router-dom"

function AirportDetailPage () {

  // const params = useParams<'id'>()
  // console.log("DETAILPAGE PARAMS : ", params)
  const {id} = useParams<{id: string}>()
  
  return(
    <div className={style.wrapper}>
    <h1>airport {id}</h1>
    </div>
  )
}

export default AirportDetailPage