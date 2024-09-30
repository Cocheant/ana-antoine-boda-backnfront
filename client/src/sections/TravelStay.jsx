// import Footer from "../components/Reusable/Footer"
// import InConstruction from "../components/Reusable/InConstruction"
import { FormattedMessage } from "react-intl";
import LeafletMap from "../components/TravelStay/LeafletMap";


const TravelStay = () => {
    // const isInConstruction = true;

    return (
        <section className="relative flex w-full justify-center pl-10 pr-10 p-10 overflow-auto flex-wrap text-[var(--orange)]">
            {/*

                "travelstay.cartaxi":     
                "travelstay.cartaxiText1":
                "travelstay.cartaxiText2":
                "travelstay.autobus":     
                "travelstay.autobusText1":
                "travelstay.autobusText2":

                </div> */}
            
            <div className="relative  w-full justify-center pl-8 pr-8 flex flex-col items-center">
            
                
                <div className='w-full max-w-3xl -z-0'>
                    <div className="flex flex-row justify-between items-center ">  
                        <div className="sm:text-2xl md:text-3xl text-lg">
                            <FormattedMessage
                            id="travelstay.title"
                            defaultMessage="Where will it be?" />
                        </div>
                        <div className="sm:text-xl md:text-2xl text-sm">
                            <FormattedMessage
                            id="travelstay.place"
                            defaultMessage="" />
                        </div>                
                
                    </div>
                    <LeafletMap />
                    <div className="flex flex-row justify-end items-center ">  
                    
                        <div className="sm:text-lg md:text-xl text-sm">
                            <FormattedMessage
                            id="travelstay.address"
                            defaultMessage="address" />
                        </div>                
                
                    </div>
                    <div className="flex flex-row justify-end items-center mt-4">
                        
                        <button className="sm:text-lg md:text-xl text-sm text-[var(--background)] font-normal bg-[var(--orange)] opacity-100  px-3 rounded-xl min-w-20 min-h-10" onClick={() => { window.open('https://maps.app.goo.gl/g7ttj6btucyVG8np9');}} >
                                <FormattedMessage
                                id="travelstay.googlemaps"
                                defaultMessage="Open in Google Maps" />
                        </button>
                    </div>

                </div>
                <div className='w-full max-w-3xl mt-10 gap-3 flex flex-col '>

                    <div className="sm:text-lg md:text-xl text-sm">
                                <FormattedMessage
                                    id="travelstay.cartaxi"
                                    defaultMessage="cartaxi" />
                    </div>
                    <div className="sm:text-lg md:text-xl text-sm ml-4">
                                <FormattedMessage
                                    id="travelstay.cartaxiText1"
                                    defaultMessage="cartaxi" />
                    </div>
                    <div className="sm:text-lg md:text-xl text-sm ml-4">
                                <FormattedMessage
                                    id="travelstay.cartaxiText2"
                                    defaultMessage="cartaxi" />
                    </div>

                </div>
                <div className='w-full max-w-3xl mt-10 gap-3 flex flex-col '>

                    <div className="sm:text-lg md:text-xl text-sm">
                                <FormattedMessage
                                    id="travelstay.autobus"
                                    defaultMessage="autobus" />
                    </div>
                    <div className="sm:text-lg md:text-xl text-sm ml-4">
                                <FormattedMessage
                                    id="travelstay.autobusText1"
                                    defaultMessage="autobus" />
                    </div>
                    <div className="sm:text-lg md:text-xl text-sm ml-4">
                                <FormattedMessage
                                    id="travelstay.autobusText2"
                                    defaultMessage="autobus" />
                    </div>

                </div>

            </div>

        </section>
    )
}

export default TravelStay;
