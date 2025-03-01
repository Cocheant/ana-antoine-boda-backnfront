import { FormattedMessage } from "react-intl"

import { useEffect, useState } from "react";

import mainUs from '../assets/img/photos/mainUs.png'


import orangeflower from '../assets/img/photos/orangeflower.png'

// import scotlandLake from '../assets/img/photos/scotlandLake.jpg'



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
        <section className="relative h-full flex-row pt-20">
            <div className="flex-row gap-1">

            <div className="bg-no-repeat bg-cover bg-center h-screen flex items-center w-full" style={{ backgroundImage: `url(${mainUs})` }}>

                <div className="mt-24 pt-8 pb-8 w-full bg-[var(--background-opaque)] flex flex-col items-center gap-4 select-none h-auto ">

                    
                    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 924.66 126.66" className='md:w-[38rem] sm:w-64 w-52 text-5xl  flex justify-center'>
                        <path className="cls-1 logo-path" pathLength="1" stroke="#d33d00" stroke-width="1" d="M101.98,125.83h-18.36l-9.29-27.92H14.1L.73,126.4l-.73-.74,13.22-28.33v-.46h.22L48.88,21.39,41.76,0h18.36l41.86,125.83ZM73.99,96.87L49.36,22.83,14.6,96.87h59.39ZM51.06,62.58v-.02s0-.07,0-.11c0,.04,0,.08,0,.12Z"/>
                        <path className="cls-1 logo-path" pathLength="1" stroke="#d33d00" stroke-width="1" d="M189.79,125.82h-12.8v-.16h-5.05c-6.73,0-12.18-5.44-12.2-12.16-.02-6.14-.04-13.4-.07-18.83,0-23.37-7.65-36.12-18.49-39.21-6.13-1.75-13.74-.68-22.78,4.72,2.84,3.72,5,8.99,5,17.83v35.11c0,3.56,1.2,6.56,3.61,9.01,2.4,2.45,5.53,3.68,9.37,3.68h-17.44c-3.85,0-7.02-1.23-9.52-3.68-2.5-2.45-3.75-5.45-3.75-9.01l-.55-71.05c0,9.31,7.39,10.93,12.77,17.48,28.24-20.23,48.57-5.81,56.2,13.9,1.17,3.03,2.87,11.31,2.87,25.29.05,5.79.1,12.15.15,17.24.48,2.33,1.58,4.39,3.3,6.15,2.4,2.45,5.53,3.68,9.37,3.68h0Z"/>
                        <path className="cls-1 logo-path" pathLength="1" stroke="#d33d00" stroke-width="1" d="M270.81,126.58h-17.44c-3.85,0-7.02-1.22-9.52-3.68-2.5-2.45-3.75-5.45-3.75-9.01l.53-41.99c-.44,2.62-2.97,7.71-15.2,11.43-27.86,9.71-25.13,40.41,1.68,35.43,0,0-24.79,12.81-34.11,5.7-12.52-10.57-4.09-38.29,34.42-43.3,14.04-2.96,12.69-13.71,12.69-13.71,0-3.75-1.61-9.07-4.01-11.47-2.31-2.13-6.3-3.2-10.52-3.32-12.88.56-18.35,12.46-18.7,18.81l-9.85-3.43c2.25-9.37,18.35-17.06,32.63-16.4,9.68.21,19.96,4.38,24.94,13.58,2.16,3.32,3.24,7.14,3.24,11.47v37.21c0,3.56,1.2,6.56,3.61,9.01,2.4,2.45,5.53,3.68,9.37,3.68Z"/>
                        <path className="cls-1 logo-path" pathLength="1" stroke="#d33d00" stroke-width="1" d="M414.26,106.36c0,3.13-1.12,5.79-3.34,7.98-2.23,2.19-4.91,3.29-8.04,3.29s-5.91-1.09-8.1-3.29c-2.19-2.19-3.29-4.85-3.29-7.98,0-1.09.19-2.31.59-3.64-3.14,1.4-6.15,2.52-9.1,4.52-1.5,1.31-3.05,2.66-4.65,4,.68.84,5.56,6.9,5.56,6.9h-.02c2.28,2.81,4.45,5.4,6.49,7.77h-14.45c-.93-1.07-1.88-2.2-2.86-3.36l-.05.02s-.29-.38-.82-1.06c-.53-.64-1.06-1.28-1.61-1.94.03-.02.05-.04.07-.05-.37-.48-.77-1.01-1.21-1.58-6.85,4.47-14.75,7.84-24.25,7.84-1.32,0-2.68-.07-4.07-.2-1.47.21-2.98.33-4.52.33-2.97,0-5.98-.51-9.04-1.53-5.95-1.95-10.62-5.2-14.02-9.74-3.4-4.54-5.1-9.58-5.1-15.14,0-2.66.31-5.05.94-7.16,1.02-3.99,2.89-7.67,5.63-11.03,2.74-3.36,5.87-6.14,9.39-8.33,1.78-1.11,3.54-2.01,5.26-2.72.88-.6,2.42-1.45,4.88-2.31-4.1-7.99-6.15-14.65-6.15-19.96,0-5,1.09-9.25,3.29-12.73,2.19-3.48,5.06-6.08,8.62-7.8,3.56-1.72,7.29-2.58,11.21-2.58,2.7,0,5.27.41,7.7,1.22-.02,0-.04.01-.06.02,1.99.46,11.74,4.53,12.43,16.13,0,2.5-.46,5.08-1.35,7.75-.55,2.54-1.5,4.91-2.85,6.99-3.41,5.24-8.98,8.28-16.12,8.81-1.1.07-2.14.15-3.14.24,1.5,3.12,3.33,6.46,5.49,10.02,6.95,11.43,15.04,22.97,24.28,34.62,1.65-1.38,3.25-2.77,4.79-4.12.66-.57,1.3-1.14,1.94-1.69,2.11-2.12,4.24-3.87,6.64-5.73,3.6-2.78,7.04-4.17,10.33-4.17h.68c.22,0,.43,0,.65,0,3.11,0,5.78,1.12,8,3.34,2.23,2.23,3.34,4.91,3.35,8.04ZM369,117.37c-7.09-9.26-21.47-28.13-25.06-33.64-3.42-5.5-7.6-12.37-8.29-13.64-.27-.49-.52-.98-.78-1.46-.23.08-.45.16-.66.23.13-.03.26-.06.39-.09-9.3,8.24-17.3,29.16-6.4,46.13,3.4,4.54,8.08,7.79,14.02,9.74.41.14.83.26,1.24.37,10.08.42,18.39-2.99,25.53-7.65ZM343.04,48.25c0,4.66,1.59,10.37,4.75,17.1,1.08-.1,2.22-.19,3.42-.26,6.9-.51,12.28-3.44,15.56-8.49,2.04-3.14,3.14-6.97,3.27-11.06.26-12.36-10.1-19.26-17.26-16.6-2.58,1.65-4.73,3.84-6.46,6.58-2.19,3.48-3.29,7.73-3.29,12.73Z"/>
                        <path className="cls-1 logo-path" pathLength="1" stroke="#d33d00" stroke-width="1" d="M541.73,125.83h-18.36l-9.29-27.92h-60.23l-13.38,28.48-.95-.45,13.44-28.62v-.46h.22l35.44-75.47-7.12-21.39h18.36l41.86,125.83ZM513.73,96.87l-24.63-74.03-34.76,74.03h59.39ZM490.8,62.58v-.02s0-.07,0-.11c0,.04,0,.08,0,.12Z"/>
                        <path className="cls-1 logo-path" pathLength="1" stroke="#d33d00" stroke-width="1" d="M629.53,125.82h-12.8v-.16h-5.05c-6.73,0-12.18-5.44-12.2-12.16-.02-6.14-.04-13.4-.07-18.83,0-23.37-7.65-36.12-18.49-39.21-6.13-1.75-13.74-.68-22.78,4.72,2.84,3.72,5,8.99,5,17.83v35.11c0,3.56,1.2,6.56,3.61,9.01,2.4,2.45,5.53,3.68,9.37,3.68h-17.44c-3.85,0-7.02-1.23-9.52-3.68-2.5-2.45-3.75-5.45-3.75-9.01l-.55-71.05c0,9.31,7.39,10.93,12.77,17.48,28.24-20.23,48.57-5.81,56.21,13.9,1.17,3.03,2.87,11.31,2.87,25.29.05,5.79.1,12.15.15,17.24.48,2.33,1.58,4.39,3.3,6.15,2.4,2.45,5.53,3.68,9.37,3.68h0Z"/>
                        <path className="cls-1 logo-path" pathLength="1" stroke="#d33d00" stroke-width="1" d="M663.92,61.9v1.05h-14.5c.34,2.04.54,3.28.54,5.9v44.53c0,3.56,1.2,6.56,3.61,9.01,2.4,2.45,5.53,3.68,9.37,3.68h-17.44c-3.85,0-7.02-1.23-9.52-3.68-2.5-2.45-3.75-5.45-3.75-9.01l-.35-50.43h-13.76v-1.05h13.75l-.19-28.99c0,12.89,14.17,12.08,17.55,28.99h14.69Z"/>
                        <path className="cls-1 logo-path" pathLength="1" stroke="#d33d00" stroke-width="1" d="M715.28,123.29c-18.82,8.56-41.01.24-49.56-18.57-8.56-18.82-.24-41.01,18.57-49.56,18.82-8.56,41.01-.24,49.56,18.57,8.56,18.82.24,41.01-18.57,49.56ZM718.62,80.66c-8.41-18.51-23.67-29.67-34.08-24.94-10.41,4.73-12.02,23.57-3.6,42.07,8.41,18.51,23.67,29.67,34.08,24.94,10.41-4.73,12.02-23.57,3.6-42.07Z"/>
                        <path className="cls-1 logo-path" pathLength="1" stroke="#d33d00" stroke-width="1" d="M751.7,42.8l-9.29-9.29,9.29-9.29,9.29,9.29-9.29,9.29ZM775.1,125.82h-17.44c-3.85,0-7.02-1.23-9.52-3.68-2.5-2.45-3.75-5.45-3.75-9.01l-.55-70c0,14.63,18.28,10.24,18.28,35.93v34.07c0,3.56,1.2,6.56,3.61,9.01,2.4,2.45,5.53,3.68,9.37,3.68Z"/>
                        <path className="cls-1 logo-path" pathLength="1" stroke="#d33d00" stroke-width="1" d="M858.42,125.82h-12.8v-.16h-5.05c-6.73,0-12.18-5.44-12.2-12.16-.02-6.14-.04-13.4-.07-18.83,0-23.37-7.65-36.12-18.49-39.21-6.13-1.75-13.74-.68-22.78,4.72,2.84,3.72,5,8.99,5,17.83v35.11c0,3.56,1.2,6.56,3.61,9.01,2.4,2.45,5.53,3.68,9.37,3.68h-17.44c-3.85,0-7.02-1.23-9.52-3.68-2.5-2.45-3.75-5.45-3.75-9.01l-.55-71.05c0,9.31,7.39,10.93,12.77,17.48,28.24-20.23,48.57-5.81,56.21,13.9,1.17,3.03,2.87,11.31,2.87,25.29.05,5.79.1,12.15.15,17.24.48,2.33,1.58,4.39,3.3,6.15,2.4,2.45,5.53,3.68,9.37,3.68h0Z"/>
                        <path className="cls-1 logo-path" pathLength="1" stroke="#d33d00" stroke-width="1" d="M876.35,104.6c8.68,13.85,21.12,21.43,30.02,17.38,5.05-2.29,8.02-7.91,8.79-15.19l2.3,8.3c-3.06,3.02-6.69,5.57-10.83,7.45-18.82,8.56-41.01.24-49.56-18.57-8.56-18.82-.24-41.01,18.57-49.56,18.14-8.25,39.4-.82,48.58,16.57l-.07.05c.06-.02.11-.05.18-.07l.34.99c-2.04.71-3.95,1.55-5.76,2.46l-8.83,5.71s0,0,0-.01c-4.12,3.24-7.63,6.82-10.92,10.17-6.94,7.07-13.29,13.53-22.79,14.32ZM898.39,89.54c3.37-3.43,6.98-7.1,11.22-10.41-8.49-18.04-23.46-28.83-33.71-24.16-10.4,4.73-12.02,23.57-3.6,42.07,1.05,2.31,2.21,4.51,3.46,6.58,9.33-.56,15.51-6.83,22.64-14.09Z"/>
                    </svg>
                    <div className="sm:text-2xl md:text-3xl text-xl flex justify-center text-[var(--orange)] mt-4  ">  
                        <FormattedMessage
                        id="home.hero.gettingmarried"
                        defaultMessage="We are getting married!"/> 
                    </div>
                    <div className="sm:text-2xl md:text-5xl text-3xl flex justify-center align-bottom  text-[var(--orange)]   sm:space-x-6 space-x-2 border-t-2 pt-5 px-4 border-[var(--orange)]">

                        <div className="sm:text-3xl md:text-4xl text-lg flex justify-center text-[var(--orange)]  sm:space-x-3 space-x-1">
                            <div>
                                {countDownDays}

                            </ div>
                            <div>
                                <FormattedMessage id="global.days" defaultMessage="days" />

                            </div>

                        </div>
                        <div className="sm:text-3xl md:text-4xl text-lg flex justify-center  text-[var(--orange)] ml-2 sm:space-x-2 space-x-1">
                            <div>

                                {countDownHours}
                            </div>

                            <div>

                                <FormattedMessage id="global.hours" defaultMessage="hours" />
                            </div>


                        </div>
                        <div className="sm:text-3xl md:text-4xl text-lg flex justify-center text-[var(--orange)] ml-1 sm:space-x-2 space-x-1">
                            <div>

                                {countDownMinutes}
                            </div>

                            <div>

                                <FormattedMessage id="global.minutes" defaultMessage="Minutes" />
                            </div>


                        </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="flex-col ">
                <div className="   w-full bg-[var(--background-)] flex flex-col items-center gap-4 select-none">
                    <div className="flex justify-center items-start flex-row bg-[var(--background)] pt-20 pb-5  md:text-xl sm:text-l text-md gap-6 sm:gap-12 md:gap-20">
                       
                    <div className="flex justify-center flex-col bg-[var(--background)]  gap-1 text-center ">
                    
                       
                        <div className="flex justify-center text-[var(--orange)]  px-4 md:text-2xl sm:text-xl text-lg mb-2 ">
                            <FormattedMessage
                                id="global.welcometext1"
                                defaultMessage="Welcome!"
                            />

                        </div>
                        <div className="flex justify-center text-[var(--orange)]  px-4 ">
                            <FormattedMessage
                                id="global.welcometext2"
                                defaultMessage="Welcome!"
                            />

                        </div>
                        <div className="flex justify-center text-[var(--orange)]  px-4 ">
                            <FormattedMessage
                                id="global.welcometext3"
                                defaultMessage="Welcome!"
                            />

                        </div>
                        <div className="flex justify-center text-[var(--orange)]  px-4 mt-2">
                            <FormattedMessage
                                id="global.welcometext4"
                                defaultMessage="Welcome!"
                            />

                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center align-middle w-full " >
                <img src={orangeflower} alt="orangeflower" className="max-w-[200px] sm:max-w-[300px] " />            
            </div>
            <div className="flex-col w-full">
                <div className=" w-full bg-[var(--background-opaque)]  flex-col items-center  select-none">
                    <div className="flex justify-center align-middle items-start flex-row bg-transparent pt-5   md:text-2xl sm:text-xl text-l gap-5 pl-5 pr-5 sm:gap-12 md:gap-20">
                        <div className="flex justify-center flex-col  bg-transparent  gap-1 w-96">
                            <div className="flex justify-center text-[var(--orange)] border-b-2 border-[var(--orange)] mb-2 pb-2 px-4 ">
                                <FormattedMessage
                                    id="global.date"
                                    defaultMessage="Date to be determined"
                                />

                            </div>
                          
                            <div className=" flex justify-center text-[var(--orange)]  ">
                                <FormattedMessage
                                    id="home.ceremonyTime"
                                    defaultMessage="Ceremony: 19.00"
                                />
                            </div>
                        
                        </div>
                        <div className="flex justify-center flex-col bg-transparent  gap-1 text-center w-96">
                        
                            <div className=" flex justify-center text-[var(--orange)] border-b-2 border-[var(--orange)] mb-2 pb-2  px-4">
                                <FormattedMessage
                                    id="home.molinogalan"
                                    defaultMessage="Molino Galán"
                                />
                            </div>
                            <div className="flex justify-center text-[var(--orange)]  px-4  ">
                                <FormattedMessage
                                    id="global.address1"
                                    defaultMessage="Partida del Molino Galán"
                                />

                            </div>
                            <div className="flex justify-center text-[var(--orange)]  px-4 ">
                                <FormattedMessage
                                    id="global.address2"
                                    defaultMessage="46369 Alborache"
                                />

                            </div>

                            <div className="flex justify-center text-[var(--orange)]">
                                <FormattedMessage
                                    id="global.address3"
                                    defaultMessage="Valencia, Spain"
                                />

                            </div>
                        </div>
                </div>
            </div>
            
        </div>
        
        </section >
       
    )
}

export default Home
