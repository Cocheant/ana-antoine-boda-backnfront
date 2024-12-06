import Sight from './Sight'

import centro from '../../assets/img/photos/centro.png'
import ciudadartes from '../../assets/img/photos/ciudad artes.png'
import albufera from '../../assets/img/photos/albuferaturismo.png'
import museos from '../../assets/img/photos/museo.png'


const Visits = () => {
  return (
    <ul className='flex flex-col gap-20'>
     <li>
        <Sight image={centro} title="tourism.visits.center.title"  text="tourism.visits.center.text" />
    </li>   
    <li>
        <Sight image={ciudadartes} title="tourism.visits.turia.title"  text="tourism.visits.turia.text" />
    </li>   
    <li>
        <Sight image={albufera} title="tourism.visits.albufera.title"  text="tourism.visits.albufera.text" />
    </li>   
    <li>
        <Sight image={museos} title="tourism.visits.museos.title"  text="tourism.visits.museos.text" />
    </li>   
    </ul>
  )
}

export default Visits
