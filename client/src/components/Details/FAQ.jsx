import { FormattedMessage } from 'react-intl';
import AccordionMenu from '../Reusable/AccordionMenu';
import WeddingColourButtons from '../Reusable/WeddingColourButtons';

const FAQ = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className="sm:text-3xl md:text-4xl text-2xl flex justify-center  bg-[var(--dark-green)] text-[var(--background)] pb-10">
                <FormattedMessage id="faq.title" defaultMessage="Frequently asked questions" />
            </div>
            <div className="p-4 bg-lorange rounded-lg">
                
                <AccordionMenu title="faq.dressCode" answer="faq.dressCodeanswer">
                    <WeddingColourButtons/>
                </AccordionMenu> 
                <AccordionMenu title="faq.kids" answer="faq.kidsanswer" />
                <AccordionMenu title="faq.gift" answer="faq.giftanswer" />
                <AccordionMenu title="faq.venue" answer="faq.venueanswer" />

            </div>
        </div>

    )
}

export default FAQ;
