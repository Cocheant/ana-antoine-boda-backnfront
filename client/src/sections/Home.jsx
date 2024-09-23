import { FormattedMessage } from "react-intl"

import { useEffect, useState } from "react";

import scotlandBridge from '../assets/img/photos/scotlandBridgeCentered.jpg'
import scotlandLake from '../assets/img/photos/scotlandLake.jpg'



const Home = () => {
    const targetDate = "2025-07-15T19:00:00";

    const [countDownDays, setCountDownDays] = useState();
    const [countDownHours, setCountDownHours] = useState();
    const [countDownMinutes, setCountDownMinutes] = useState();



    const getReturnValues = (countDown) => {
        // calculate time left
        const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));

        return [days, hours, minutes];
    };

    useEffect(() => {


        const timerInterval = setInterval(() => {

            const countDownDate = new Date(targetDate).getTime();

            var diff = countDownDate - new Date().getTime()
            var dateValues = getReturnValues(diff);

            setCountDownDays(dateValues[0]);
            setCountDownHours(dateValues[1]);
            setCountDownMinutes(dateValues[2] + 1);

        }, 1000);


        // Cleanup the interval when the component unmounts
        return () => clearInterval(timerInterval);
    }, []); // The empty dependency array ensures the effect runs only once on mount

    return (
        <section className="relative h-full flex-row">

            <div className="bg-hero bg-no-repeat  bg-center bg-fixed bg-cover h-screen"
                style={{ backgroundImage: `url(${scotlandBridge})` }}>




                <div className="sm:text-3xl md:text-4xl text-2xl flex justify-center text-vlorange  pt-28">  <FormattedMessage
                    id="home.hero.gettingmarried"
                    defaultMessage="We are getting married!"
                /> </div>


                <div className="md:text-8xl sm:text-7xl text-5xl flex justify-center text-vlorange "> <FormattedMessage
                    id="global.names"
                    defaultMessage="Ana & Antoine"
                />
                </div>

                <div className="sm:text-2xl md:text-5xl text-3xl flex justify-center align-bottom  text-vlorange  pt-72 sm:space-x-9 space-x-4 ">

                    <div className="sm:text-3xl md:text-4xl text-2xl flex justify-center text-vlorange  sm:space-x-3 space-x-1.5">
                        <div>
                            {countDownDays}

                        </div>
                        <div>
                            <FormattedMessage id="global.days" defaultMessage="days" />

                        </div>

                    </div>
                    <div className="sm:text-3xl md:text-4xl text-2xl flex justify-center  text-vlorange sm:space-x-3 space-x-1.5">
                        <div>

                            {countDownHours}
                        </div>

                        <div>

                            <FormattedMessage id="global.hours" defaultMessage="hours" />
                        </div>


                    </div>
                    <div className="sm:text-3xl md:text-4xl text-2xl flex justify-center text-vlorange sm:space-x-2 space-x-3">
                        <div>

                            {countDownMinutes}
                        </div>

                        <div>

                            <FormattedMessage id="global.minutes" defaultMessage="Minutes" />
                        </div>


                    </div>


                </div>
            </div>

            <div className="flex justify-center flex-col pb-16  bg-[var(--dark-green)] opacity-60">
                <div className="flex justify-center text-vlorange md:text-4xl sm:text-4xl text-3xl   pt-20 pb-5">
                    <FormattedMessage
                        id="global.date"
                        defaultMessage="Date to be determined"
                    />

                </div>
                <div className="md:text-4xl sm:text-3xl text-2xl flex justify-center text-vlorange ">
                    <FormattedMessage
                        id="home.secondText"
                        defaultMessage="Molino Galán, Valencia, Espagne"
                    />
                </div>
            </div>
            <div className="bg-hero bg-no-repeat  bg-center bg-fixed bg-cover"
                style={{ backgroundImage: `url(${scotlandLake})` }}>

                <div className="md:text-8xl sm:text-7xl text-5xl flex justify-center text-vlorange pt-44 pb-80">

                </div>

            </div>

            {/* <Footer className="flex mt-10" /> */}

        </section >
    )
}

export default Home
