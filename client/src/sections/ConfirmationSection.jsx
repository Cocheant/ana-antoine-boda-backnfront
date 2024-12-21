import React from 'react'
import { FormattedMessage } from 'react-intl'
import ConfirmButton from '../components/Reusable/ConfirmButton'
import flowers from '../assets/img/photos/flowers.jpg'

const ConfirmationSection = () => {
  return (
    <section className="relative  w-full justify-center p-2  overflow-auto flex-wrap text-[var(--orange)] ">

        <div className="relative  w-full justify-center  flex flex-col items-center mb-12">
                
                    
            <div className='w-full '>
                <div className="flex flex-col justify-center items-center text-center gap-5">  
                    <div className="sm:text-2xl lg:text-3xl text-md text-center mx-4 px-4  border-b-[1px] border-[var(--orange)] ">
                        <div className="mb-5">
                            <FormattedMessage
                            id="confirmation.accompanyus"
                            defaultMessage="¿Nos acompañarás en este día tan especial?"
                            />
                        </div>

                    </div>

                    <div className="sm:text-lg lg:text-md text-sm text-center mx-4 max-w-2xl">
                        <div className="mb-2">
                            <FormattedMessage
                            id="confirmation.answerquestions"
                            defaultMessage="Para confirmar sólo tienes que contestar a las siguientes preguntas"
                            />
                        </div>

                    </div>

                   <ConfirmButton/>

                    
                </div>
            </div>
        </div>
        <div className=" absolute   bottom-0 right-0" >
                    <img src={flowers} alt="orangeflower" className="max-w-[80px] sm:max-w-[100px]  md:max-w-[150px] lg:max-w-[200px] " />            
                    </div>
    </section>

    
  )
}

export default ConfirmationSection
