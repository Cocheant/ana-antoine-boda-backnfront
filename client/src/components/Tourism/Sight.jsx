import React from 'react'
import { FormattedMessage } from 'react-intl'

const Sight = ({title, image,  text}) => {
  return (
    <div className='bg-transparent flex flex-col justify-center center items-center text-center  gap-8 mx-5 py-3'>  
      <div className="sm:text-2xl md:text-3xl text-lg">
          <FormattedMessage id={title} defaultMessage="default title" />
      </div>
      <div >
          <img src={image} alt="sightImage" className='border-t-white  border-t-4 border-b-white  border-b-4' />

          <span>
             
          </span>
      </div>
      <div>
      <h1 className='text-justify'>
          <FormattedMessage id={""+text} defaultMessage="default text" values={{
     breakingLine: <br />,
   }}/>
      </h1>
      </div>
    </div>
  )
}

export default Sight
