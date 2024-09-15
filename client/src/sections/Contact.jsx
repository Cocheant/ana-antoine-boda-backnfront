import { FormattedMessage } from "react-intl"

const Contact = ({ callback }) => {


    return (
        <section className=" relative flex-row">
      
            <div className="flex justify-center  pb-28 pt-28 bg-[var(--dark-green)] opacity-60">
                <div className="flex h-auto  justify-center flex-row text-vlorange md:text-xl sm:text-xl text-xl font-semibold  pb-20">
                    <div className="flex justify-center ">
                       
                    </div>
                    <div className="flex justify-center pl-6">
                    <button onClick={callback} className={'text-[var(--dark-bg)] bg-lorange opacity-100  rounded-xl min-w-20 min-h-10 transition-all duration-500 ease-in-out'}>
                        <FormattedMessage
                        id="navbar.contact"
                        defaultMessage="Confirm Presence"
                        />

                    </button>
                    </div>



                </div>
            </div>
        </section>
    )
}

export default Contact
