import { useState } from "react";
import { FormattedMessage } from "react-intl";

// eslint-disable-next-line react/prop-types
const AccordionMenu = ({ title, answer,children }) => {

    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="py-5 pl-4 bg-[var(--dark-green)] text-[var(--background)] text-2xl  border-b border-t border-[var(--background)]/10 ">
            <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between w-full ">
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl">  
                    <FormattedMessage
                    id={title}
                    defaultMessage="Question"/>  

                </span>
                {accordionOpen ? <span className="text-2xl font-bold ">  - </span> : <span className="text-2xl font-bold">  + </span>}

            </button>
            <div className={`grid overflow-hidden transition-all duration-500 ease-in-out  bg-[var(--dark-green)] text-[var(--background)] text-base
            ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`
            }>
                <div className="overflow-hidden py-2 text-sm sm:text-base md:text-lg lg:text-xl  ">
                    <FormattedMessage
                        id={answer}
                        defaultMessage="Question"
                    />
                    {children}

                </div>
            </div>
        </div>
    )
}

export default AccordionMenu
