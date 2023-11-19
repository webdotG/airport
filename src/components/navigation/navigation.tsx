
import { Link } from 'react-router-dom'
import style from './navigation.module.scss'

function Navigation() {

  return (

    <div className={style.navigation_wrapper}>
    <nav>
      <Link to='/airport' className={style.nav_link}>airport</Link>
      <Link to='/airport/auth' className={style.nav_link}>auth</Link>
    </nav>
    </div>
  )
}

export default Navigation