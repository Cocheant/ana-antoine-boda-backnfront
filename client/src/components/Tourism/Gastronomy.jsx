import React from 'react'
import Sight from './Sight'
import paella from '../../assets/img/photos/comida.png'

const Gastronomy = () => {
  return (
    <ul className='flex flex-col gap-20'>
              <Sight image={paella} title="tourism.gastronomy.title"  text="tourism.gastronomy.text" />

    </ul>
  )
}

export default Gastronomy
