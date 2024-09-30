// import Footer from "../components/Reusable/Footer"
// import InConstruction from "../components/Reusable/InConstruction"
import { FormattedMessage } from "react-intl";
import { MatterportIntegration } from "../components/Reusable/MatterportIntegration";
import LeafletMap from "../components/TravelStay/LeafletMap";


const TravelStay = () => {
    // const isInConstruction = true;

    return (
        <section className="relative flex w-full justify-center gap-10 pl-10 pr-10 p-10 overflow-auto flex-wrap">
            {/* {isInConstruction === false &&
                <div className="h-screen">


                </div>}
            {isInConstruction === true &&
                <InConstruction />
            } */}
            <div className="sm:text-4xl md:text-5xl text-3xl flex justify-center text-vlorange pt-12 ">  
                <FormattedMessage
                id="travelstay.title"
                defaultMessage="Where will it be?" />
            </div>
            <div className="relative flex w-full justify-center gap-10 pl-10 pr-10 p-10 overflow-auto flex-wrap ">
                {/* <MatterportIntegration /> */}
                <LeafletMap />
            </div>

        </section>
    )
}

export default TravelStay
