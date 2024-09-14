import { useState } from "react";
import { FormattedMessage } from "react-intl";

// eslint-disable-next-line react/prop-types
const AccordionMenu = ({ title, answer,children }) => {

    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="py-5 pl-4 text-green text-2xl font-semibold border-b border-t border-green/10 ">
            <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between w-full ">
                <span>  <FormattedMessage
                    id={title}
                    defaultMessage="Question"
                />  </span>
                {accordionOpen ? <span className="text-2xl font-bold ">  - </span> : <span className="text-2xl font-bold">  + </span>}

            </button>
            <div className={`grid overflow-hidden transition-all duration-500 ease-in-out text-green text-base font-semibold
            ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`
            }>
                <div className="overflow-hidden text-xl py-2 ">
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
