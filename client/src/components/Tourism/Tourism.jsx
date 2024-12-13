import { FormattedMessage } from 'react-intl';
import AccordionMenu from '../Reusable/AccordionMenu';
import Visits from './Visits';
import Gastronomy from './Gastronomy';

const Tourism = () => {
    return (
        <div className='pt-28 pb-28'>
            <div className="sm:text-4xl md:text-5xl text-3xl flex justify-center  bg-[var(--light-green)] text-[var(--background)] pb-10">
                <FormattedMessage id="tourism.title" defaultMessage="Visiting Valencia" />
            </div>
            <div className="  p-4 bg-lorange rounded-lg">

                <AccordionMenu title="tourism.howtoreach" >
                    <ul>
                        <li>                
                            - <FormattedMessage id="tourism.reach.manises" defaultMessage="By plane from Manises Airport (VLC)" />,
                        </li>
                        <li>                
                            - <FormattedMessage id="tourism.reach.train" defaultMessage="By train from France with a change in Barcelona" />,
                        </li>                        
                        <li>                
                            - <FormattedMessage id="tourism.reach.car" defaultMessage="By car" />.
                        </li>
                    </ul>
                </AccordionMenu> 

                <AccordionMenu title="tourism.visits" >
                    <div className='flex flex-col gap-10 mt-10'>
                        <div className='flex flex-col gap-5 '>
                        <FormattedMessage id="tourism.visits.text" defaultMessage="Visiting Valencia" />
                        <button onClick={() =>{    window.open("https://www.google.com/maps/d/u/0/embed?mid=1GEDhBaTU3TC7p7VjniVCqNLUilY4MvQ&ehbc=2E312F", '_blank');}} className={'text-[var(--background)] font-normal bg-[var(--orange)] opacity-100  w-64 h-16 px-3 rounded-l min-w-20 min-h-10 transition-all duration-500 ease-in-out hover:animate-wiggle self-end'}>
                            <FormattedMessage
                            id="tourism.visits.button"
                            defaultMessage="Map of Valencia"
                            />


                        </button>
                        </div>
                        
                        <Visits/>
                    </div>
                   
                </AccordionMenu> 

                <AccordionMenu title="tourism.gastronomy" >
                    <Gastronomy/>
                </AccordionMenu> 

               

            </div>
        </div>

    )
}

export default Tourism;
