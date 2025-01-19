import { FormattedMessage } from 'react-intl';
import AccordionMenu from '../Reusable/AccordionMenu';
import Visits from './Visits';
import Gastronomy from './Gastronomy';
import lineValencia from '../../assets/img/photos/lineValencia.png'

const Tourism = () => {
    return (
        <div className='pt-16 pb-16 flex-col text-justify'>
            <div className="sm:text-4xl md:text-5xl text-3xl flex justify-center  bg-[var(--light-green)] text-[var(--background)] pb-5 ">
                <FormattedMessage id="navbar.valencia" defaultMessage="Visiting Valencia" />
            </div>

            <div className='flex justify-center items-center w-full '>
                <img src={lineValencia} alt="orangeflower" className="max-w-[300px] sm:max-w-[600px]   " />            
            </div>
            <div className="  p-4 pt-2 bg-lorange rounded-lg mx-4 text-left ">

                <AccordionMenu title="tourism.howtoreach" >
                    <ul>
                        <li  className='text-left'>                
                        <FormattedMessage id="tourism.reach.manises" defaultMessage="• By plane from Manises Airport (VLC)" />,
                        </li>
                        <li>                
                        <FormattedMessage id="tourism.reach.train" defaultMessage="• By train from France with a change in Barcelona" />,
                        </li>                        
                        <li>                
                        <FormattedMessage id="tourism.reach.car" defaultMessage="• By car" />.
                        </li>
                    </ul>
                </AccordionMenu> 

                <AccordionMenu title="tourism.visits" >
                    <div className='flex flex-col gap-10 mt-10 '>
                        <div className='flex flex-col gap-5 text-justify '>
                            <FormattedMessage id="tourism.visits.text" defaultMessage="Visiting Valencia" />
                            <button onClick={() =>{    window.open("https://www.google.com/maps/d/u/0/embed?mid=1GEDhBaTU3TC7p7VjniVCqNLUilY4MvQ&ehbc=2E312F", '_blank');}} className={'text-[var(--background)] font-normal bg-[var(--orange)] opacity-100 sm:w-64 w-40 sm:h-16 h-12 px-3 rounded-l min-w-20 min-h-10 mr-8 mt-5 transition-all duration-500 ease-in-out hover:animate-wiggle self-end'}>
                                <FormattedMessage
                                id="tourism.visits.button"
                                defaultMessage="Map of Valencia"
                                />


                            </button>
                            <Visits/>

                        </div>
                        
                    </div>
                   
                </AccordionMenu> 

                <AccordionMenu title="tourism.gastronomy" >
                    <div className=''>
                    <Gastronomy/>

                    </div>
                </AccordionMenu> 

               

            </div>
        </div>

    )
}

export default Tourism;
