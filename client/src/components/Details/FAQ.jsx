import { FormattedMessage } from 'react-intl';
import AccordionMenu from '../Reusable/AccordionMenu';
import WeddingColourButtons from '../Reusable/WeddingColourButtons';

const FAQ = () => {
    return (
        <div className='pt-16'>
            <div className="sm:text-4xl md:text-5xl text-3xl flex justify-center text-vlorange p-12">
                <FormattedMessage id="faq.title" defaultMessage="Frequently asked questions" />
            </div>
            <div className="  p-4 bg-lorange rounded-lg">
                <AccordionMenu title="faq.dressCode" answer="faq.dressCodeanswer">
                    <WeddingColourButtons/>
                </AccordionMenu> 
                <AccordionMenu title="faq.kids" answer="faq.kidsanswer" />
                <AccordionMenu title="faq.gift" answer="faq.giftanswer" />
                <AccordionMenu title="faq.venue" answer="faq.venueanswer" />
                <AccordionMenu title="faq.sleep" answer="faq.sleepanswer" />

            </div>
        </div>

    )
}

export default FAQ;
