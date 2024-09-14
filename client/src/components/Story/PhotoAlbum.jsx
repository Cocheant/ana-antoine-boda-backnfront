

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import firstPic from '/src/assets/img/photos/firstPic.jpg'
import albufera from '/src/assets/img/photos/albufera.jpg'
import spainHoliday from '/src/assets/img/photos/spainHoliday.jpg'
import cascade from '/src/assets/img/photos/cascade.jpeg'
import weddingAnniv from '/src/assets/img/photos/weddingAnniv.jpg'
import trainHP from '/src/assets/img/photos/trainHP.jpg'
import monetBridge from '/src/assets/img/photos/monetBridge.jpg'
import mainHero from '/src/assets/img/photos/mainHero.jpeg'

import { Suspense } from "react";
import { FormattedMessage } from "react-intl";


const images = [

    {
        src: firstPic,
        text: "firstPic",
        width: 1920,
        height: 1080
    },
    {
        src: albufera,
        text: "albufera",

        width: 3264,
        height: 1840
    },
    {
        src: spainHoliday,
        text: "spainHoliday",

        width: 1600,
        height: 900
    },
    {
        src: cascade,
        text: "cascade",

        width: 960,
        height: 1280
    },
    {
        src: weddingAnniv,
        text: "weddingAnniv",

        width: 2896,
        height: 5152
    },
    {
        src: trainHP,
        text: "trainHP",

        width: 2405,
        height: 1359
    },
    {
        src: monetBridge,
        text: "monetBridge",

        width: 4032,
        height: 2268
    },
    {
        src: mainHero,
        text: "mainHero",

        width: 2916,
        height: 1200
    }

];


const PhotoAlbum = () => {


    return (
        <Suspense>

            <div className="flex justify-center">
                <Carousel showArrows={true} dynamicHeight={false} infiniteLoop={true} showThumbs={false} width="800px" className="h-auto" >
                    {images.map((image, index) =>
                        <div key={index} style={{ maxHeight: "500px", width: "auto", display: "flex", justifyContent: "center", alignContent: "center" }} >

                            <img src={image.src} style={{ maxHeight: "500px", width: "auto" }} />
                            <p className="legend bg-transparent"><FormattedMessage
                                id={"story.image." + image.text}
                                defaultMessage=" "
                            />
                            </p>
                        </div>
                    )}


                </Carousel>
            </div>
        </Suspense>

    );

}

export default PhotoAlbum
