import { useState } from "react";
import { FormattedMessage } from "react-intl";

// eslint-disable-next-line react/prop-types
const AccordionMenu = ({ title, answer,children }) => {

    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="py-5  text-[var(--background)] text-2xl align-middle border-b border-[var(--background)]/10 text-justify  ">
            <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between w-full py-3 pl-5 pr-5">
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-left pr-2">  
                    <FormattedMessage
                    id={title}
                    defaultMessage="Question"/>  

                </span>
                {accordionOpen ? <span className="text-2xl font-bold ">  - </span> : <span className="text-2xl font-bold">  + </span>}

            </button>
            <div className={`grid overflow-hidden transition-all duration-500 ease-in-out  text-[var(--background)] text-base mx-2
            ${accordionOpen ? 'grid-rows-[1fr] opacity-100 py-6 ' : 'grid-rows-[0fr] opacity-0'
                }`
            }>
                <div className="overflow-hidden text-sm sm:text-base md:text-lg lg:text-xl ">
                { answer?<FormattedMessage
                        id={answer}
                        defaultMessage="Question"/> :<></>}
                    {children}

                </div>
            </div>
        </div>
    )
}

export default AccordionMenu
