
import './Timeline.css'

import firstPic from '../../assets/img/photos/firstPic.jpg'
import italyHoliday from '../../assets/img/photos/italyHoliday.jpg'


import trainHP from '../../assets/img/photos/trainHP.jpg'


import parisTrip from '../../assets/img/photos/parisTrip.jpg'


import lisbon from '../../assets/img/photos/lisbon.jpg'


import ana25th from '../../assets/img/photos/ana25th.jpg'

import reunion from '../../assets/img/photos/reunion.jpg'

import parisMask from '../../assets/img/photos/parisMask.jpg'

import pacs from '../../assets/img/photos/pacs.jpg'

import engaged from '../../assets/img/photos/engaged.jpg'
import { FormattedMessage } from 'react-intl'

function Timeline() {
    return (
        <section className="timeline-box">
            <div className="swiper-container text-center  text-[var(--background)] overflow-hidden">
                <div className="swiper-wrapper">

                    <div className="swiper-slide">
                        <div className="timestamp  h-[200px] sm:h-[250px]">

                            <span className="date">
                            <FormattedMessage id="story.image.firstPicDate" defaultMessage="February 2nd 2016" />
                                </span>
                        </div>
                        <div className="status">
                            <span>
                                <h1>
                                <FormattedMessage id="story.image.firstPic" defaultMessage="We met in Toronto" />
                                </h1>
                                <img src={firstPic} alt="firstPic" className="timeline-illustration max-w-[200px] sm:max-w-[250px]" />
                            </span>
                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="timestamp  h-[200px]  sm:h-[250px]">

                            <img src={italyHoliday} alt="italyHoliday" className="timeline-illustration max-w-[200px] sm:max-w-[250px]" />

                            <span className="date">
                            <FormattedMessage id="story.image.italyDate" defaultMessage="July 2018" />
                            
                            </span>
                        </div>
                        <div className="status">
                            <span>
                                <h1> 
                                    <FormattedMessage id="story.image.italy" defaultMessage="Trip to Italy" />
                                </h1>
                            </span>
                        </div>
                    </div>


                    <div className="swiper-slide">
                        <div className="timestamp  h-[200px]  sm:h-[250px]">
                            <span className="date">
                            <FormattedMessage id="story.image.parisDate" defaultMessage="March 2019" />
                            
                            </span>
                            </div>
                        <div className="status">
                            <span>
                                <h1>
                                    <FormattedMessage id="story.image.paris" defaultMessage="Trip to Paris" />
                                </h1>
                                <img src={parisTrip} alt="parisTrip" className="timeline-illustration max-w-[200px] sm:max-w-[250px]" />
                            </span>
                        </div>
                    </div>


                    <div className="swiper-slide">
                        <div className="timestamp  h-[200px]  sm:h-[250px] ">
                            <img src={lisbon} alt="lisbon" className="timeline-illustration max-w-[200px] sm:max-w-[250px]" />
                            <span className="date">
                                <FormattedMessage id="story.image.lisbonDate" defaultMessage="August 2019" /> 
                            
                            </span>
                        </div>
                        <div className="status">
                            <span>
                                <h1>
                                    <FormattedMessage id="story.image.lisbon" defaultMessage="Trip to Lisbon" />
                                    </h1>
                            </span>
                        </div>
                    </div>


                    <div className="swiper-slide">
                        <div className="timestamp  h-[200px]  sm:h-[250px]">
                            <span className="date">
                            <FormattedMessage id="story.image.birthdayanaDate" defaultMessage="February 2020" /> 
                            
                            </span>
                        </div>
                        <div className="status">
                            <span>
                                <h1>
                                    <FormattedMessage id="story.image.birthdayana" defaultMessage="Birthday" />
                                </h1>
                                <img src={ana25th} alt="ana25th" className="timeline-illustration max-w-[200px] sm:max-w-[250px]" />
                            </span>
                        </div>
                    </div>


                    <div className="swiper-slide">
                        <div className="timestamp  h-[200px]  sm:h-[250px]">
                            <img src={parisMask} alt="parisMask" className="timeline-illustration max-w-[200px] sm:max-w-[250px]" />

                            <span className="date">
                            <FormattedMessage id="story.image.livingtogetherDate" defaultMessage="September 2020" /> 
                            
                            </span>
                        </div>
                        <div className="status"><span><h1><FormattedMessage id="story.image.livingtogether" defaultMessage="Moving together" /></h1></span></div>
                    </div>


                    <div className="swiper-slide">
                        <div className="timestamp  h-[200px]  sm:h-[250px]">
                            <span className="date">
                            <FormattedMessage id="story.image.pacsDate" defaultMessage="December 13th 2021" /> 
                            
                            </span>
                        </div>
                        <div className="status">
                            <span>
                                <h1>
                                    <FormattedMessage id="story.image.pacs" defaultMessage="Signing our Civil union" />
                                </h1>
                                <img src={pacs} alt="pacs" className="timeline-illustration max-w-[200px] sm:max-w-[250px]" />
                            </span>
                        </div>
                    </div>


                    <div className="swiper-slide">
                        <div className="timestamp  h-[200px]  sm:h-[250px]">
                            <img src={reunion} alt="reunion" className="timeline-illustration max-w-[200px] sm:max-w-[250px]" />
                            <span className="date">
                            <FormattedMessage id="story.image.reunionDate" defaultMessage="December 2021" /> 
                            
                            </span>
                        </div>
                        <div className="status"><span><h1><FormattedMessage id="story.image.reunion" defaultMessage="Trip to La Réunion" /></h1></span></div>
                    </div>


                    <div className="swiper-slide">
                        <div className="timestamp  h-[200px]  sm:h-[250px]">
                            <span className="date">
                                <FormattedMessage id="story.image.scotlandDate" defaultMessage="April 2023" /> 
                                
                            </span>
                        </div>
                        <div className="status">
                            <span>
                                <h1>
                                    <FormattedMessage id="story.image.scotland" defaultMessage="Trip to Scotland" />
                                </h1>
                                <img src={trainHP} alt="trainHP" className="timeline-illustration max-w-[200px] sm:max-w-[250px]" />

                            </span>
                        </div>
                    </div>


                    <div className="swiper-slide">
                        <div className="timestamp  h-[200px]  sm:h-[250px]">
                            <img src={engaged} alt="engaged" className="timeline-illustration max-w-[200px] sm:max-w-[250px]" />
                            <span className="date">
                            <FormattedMessage id="story.image.engagedDate" defaultMessage="" />
                            </span>
                        </div>
                        <div className="status">
                            <span>                                
                                <h1>
                                    <FormattedMessage id="story.image.engaged" defaultMessage="Engaged in London" />
                                </h1>
                            </span>
                        </div>
                    </div>


                </div>
                <div className="swiper-pagination"></div>
            </div>
        </section >

    );
    

}

export default Timeline
