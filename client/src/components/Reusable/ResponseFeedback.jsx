import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { CgCheck } from "react-icons/cg";

import Loader from "react-spinners/PuffLoader";

const ResponseFeedback = ({status}) => {

    if(status === 'pending'){
        return (
            <div> <Loader
            className='transition-all duration-500 ease-in-out'
            color={'#b18969'}
            loading={true}
            size={40}
            aria-label="Loading Spinner"
            data-testid="loader"
            speedMultiplier={1}
          /></div>
          )
    }
    else if(status === 'success'){
            return (
                <div >                 
                    <CgCheck size={50} color='#606f5e' />
                </div>
              )
        
    }
    else if(status ==='failure'){
        return (
            <div ><FaTimes size={25} color='#c6002c' /></div>
          )
    }
    return <></>

}

export default ResponseFeedback
