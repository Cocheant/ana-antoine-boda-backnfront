import { useState } from "react";
import current from "../../lang/current"
import { FormattedMessage } from "react-intl";



const LanguageSelector = () => {
    const langs = ['en', 'es', 'fr'];
    let languageText = current.language;

    const [selected, setSelected] = useState(languageText);

    return (

        <div className=" font-medium  h-10  overflow-x" >


            <div className="bg-[var(--dark-green)] opacity-80 rounded text-center items-center flex flex-row overflow-x-auto " >
                <p

                    className="mr-2  flex text-center items-center justify-center rounded  text-vlorange bg-[var(--dark-green)]   w-24 h-10"

                >
                    <FormattedMessage
                        id="global.language"
                        defaultMessage="Language"
                    />:
                </p>
                {langs?.map((country) => (
                    <p
                        key={country}
                        className={`${country === selected && "bg-vlorange text-green "} ${country !== selected && "text-vlorange bg-[var(--dark-green)]"}
                        mr-2  cursor-pointer flex text-center items-center justify-center rounded hover:bg-vlorange hover:text-green  w-10 h-10`}
                        onClick={() => {

                            if (country !== selected) {
                                setSelected(country);
                                localStorage.setItem("PreferredLang", country);
                                window.location.reload();
                            }

                        }}
                    >
                        {country}
                    </p>
                ))}
            </div>
        </div >
    )
}

export default LanguageSelector
