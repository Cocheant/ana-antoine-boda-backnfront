import { FormattedMessage } from "react-intl"
import monetDuo from '../../assets/img/photos/monetDuo.jpg'

const InConstruction = () => {
    return (
        <div>
            <div className="sm:text-3xl md:text-4xl text-2xl flex justify-center text-vlorange  pt-28">
                <FormattedMessage
                    id="global.inConstruction1"
                    defaultMessage="Sorry, come back later!"
                /> </div>
            <div className="md:text-7xl sm:text-6xl text-5xl flex justify-center text-vlorange pb-28">
                <FormattedMessage
                    id="global.inConstruction2"
                    defaultMessage="In construction!"
                />
            </div>
            <div className="bg-hero bg-no-repeat  bg-center bg-fixed bg-cover h-screen"
                style={{ backgroundImage: `url(${monetDuo})` }}>


                <div className="flex justify-center pt-28">

                </div>
            </div>
        </div>
    )
}

export default InConstruction
