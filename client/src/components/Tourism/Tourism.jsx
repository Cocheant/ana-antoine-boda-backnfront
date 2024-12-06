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
                    <Visits/>
                </AccordionMenu> 

                <AccordionMenu title="tourism.gastronomy" >
                    <Gastronomy/>
                </AccordionMenu> 

                <AccordionMenu title="tourism.activities"  >
                    Activities
                </AccordionMenu>

            </div>
        </div>

    )
}

export default Tourism;
