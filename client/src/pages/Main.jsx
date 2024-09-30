import React from 'react'
import { Home, Story, TravelStay, Details } from '../pages'
import Footer from '../components/Reusable/Footer'
import { useRef, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { FaTimes } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import WebSiteInfo from '../sections/WebSiteInfo'
import logo from '../assets/logo/logo.svg'

import '../App.css'

import Modal from '../components/Reusable/Modal'

const Main = () => {
    // nav is starting off false
  const [nav, setNav] = useState(false);

  var state = "home";

  // so when user clicks the hamburger button, it goes from false(!nav) to true(nav)
  const handleClick = () => setNav(!nav);

  const home = useRef(null);
  const story = useRef(null);
  const travelstay = useRef(null);
  const details = useRef(null);
  const contact = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const setModalVisibility = (bShow) => {
    setIsModalOpen(bShow);
  };

  const scrollToSection = (elementRef) => {

    state = elementRef.current.className;

    window.scrollTo({
      top: elementRef.current.offsetTop - 71,
      behavior: "smooth",
    });
  };
  return (
    <main className='bg-[var(--background)] h-screen '>
      <header className="flex fixed  w-full justify-center gap-12 p-4 items-center px-8 py-4  mx-auto bg-[var(--background)] opacity-90 z-10 right-0 -left-0 top-0  cursor-pointer ">
        <button onClick={() => scrollToSection(home)} className="items-center justify-start flex font-bold cursor-pointer rounded-xl">
          
          <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 924.66 126.66" className='w-52 cursor-pointer'>
            <path class="cls-1" d="M101.98,125.83h-18.36l-9.29-27.92H14.1L.73,126.4l-.73-.74,13.22-28.33v-.46h.22L48.88,21.39,41.76,0h18.36l41.86,125.83ZM73.99,96.87L49.36,22.83,14.6,96.87h59.39ZM51.06,62.58v-.02s0-.07,0-.11c0,.04,0,.08,0,.12Z"/>
            <path class="cls-1" d="M189.79,125.82h-12.8v-.16h-5.05c-6.73,0-12.18-5.44-12.2-12.16-.02-6.14-.04-13.4-.07-18.83,0-23.37-7.65-36.12-18.49-39.21-6.13-1.75-13.74-.68-22.78,4.72,2.84,3.72,5,8.99,5,17.83v35.11c0,3.56,1.2,6.56,3.61,9.01,2.4,2.45,5.53,3.68,9.37,3.68h-17.44c-3.85,0-7.02-1.23-9.52-3.68-2.5-2.45-3.75-5.45-3.75-9.01l-.55-71.05c0,9.31,7.39,10.93,12.77,17.48,28.24-20.23,48.57-5.81,56.2,13.9,1.17,3.03,2.87,11.31,2.87,25.29.05,5.79.1,12.15.15,17.24.48,2.33,1.58,4.39,3.3,6.15,2.4,2.45,5.53,3.68,9.37,3.68h0Z"/>
            <path class="cls-1" d="M270.81,126.58h-17.44c-3.85,0-7.02-1.22-9.52-3.68-2.5-2.45-3.75-5.45-3.75-9.01l.53-41.99c-.44,2.62-2.97,7.71-15.2,11.43-27.86,9.71-25.13,40.41,1.68,35.43,0,0-24.79,12.81-34.11,5.7-12.52-10.57-4.09-38.29,34.42-43.3,14.04-2.96,12.69-13.71,12.69-13.71,0-3.75-1.61-9.07-4.01-11.47-2.31-2.13-6.3-3.2-10.52-3.32-12.88.56-18.35,12.46-18.7,18.81l-9.85-3.43c2.25-9.37,18.35-17.06,32.63-16.4,9.68.21,19.96,4.38,24.94,13.58,2.16,3.32,3.24,7.14,3.24,11.47v37.21c0,3.56,1.2,6.56,3.61,9.01,2.4,2.45,5.53,3.68,9.37,3.68Z"/>
            <path class="cls-1" d="M414.26,106.36c0,3.13-1.12,5.79-3.34,7.98-2.23,2.19-4.91,3.29-8.04,3.29s-5.91-1.09-8.1-3.29c-2.19-2.19-3.29-4.85-3.29-7.98,0-1.09.19-2.31.59-3.64-3.14,1.4-6.15,2.52-9.1,4.52-1.5,1.31-3.05,2.66-4.65,4,.68.84,5.56,6.9,5.56,6.9h-.02c2.28,2.81,4.45,5.4,6.49,7.77h-14.45c-.93-1.07-1.88-2.2-2.86-3.36l-.05.02s-.29-.38-.82-1.06c-.53-.64-1.06-1.28-1.61-1.94.03-.02.05-.04.07-.05-.37-.48-.77-1.01-1.21-1.58-6.85,4.47-14.75,7.84-24.25,7.84-1.32,0-2.68-.07-4.07-.2-1.47.21-2.98.33-4.52.33-2.97,0-5.98-.51-9.04-1.53-5.95-1.95-10.62-5.2-14.02-9.74-3.4-4.54-5.1-9.58-5.1-15.14,0-2.66.31-5.05.94-7.16,1.02-3.99,2.89-7.67,5.63-11.03,2.74-3.36,5.87-6.14,9.39-8.33,1.78-1.11,3.54-2.01,5.26-2.72.88-.6,2.42-1.45,4.88-2.31-4.1-7.99-6.15-14.65-6.15-19.96,0-5,1.09-9.25,3.29-12.73,2.19-3.48,5.06-6.08,8.62-7.8,3.56-1.72,7.29-2.58,11.21-2.58,2.7,0,5.27.41,7.7,1.22-.02,0-.04.01-.06.02,1.99.46,11.74,4.53,12.43,16.13,0,2.5-.46,5.08-1.35,7.75-.55,2.54-1.5,4.91-2.85,6.99-3.41,5.24-8.98,8.28-16.12,8.81-1.1.07-2.14.15-3.14.24,1.5,3.12,3.33,6.46,5.49,10.02,6.95,11.43,15.04,22.97,24.28,34.62,1.65-1.38,3.25-2.77,4.79-4.12.66-.57,1.3-1.14,1.94-1.69,2.11-2.12,4.24-3.87,6.64-5.73,3.6-2.78,7.04-4.17,10.33-4.17h.68c.22,0,.43,0,.65,0,3.11,0,5.78,1.12,8,3.34,2.23,2.23,3.34,4.91,3.35,8.04ZM369,117.37c-7.09-9.26-21.47-28.13-25.06-33.64-3.42-5.5-7.6-12.37-8.29-13.64-.27-.49-.52-.98-.78-1.46-.23.08-.45.16-.66.23.13-.03.26-.06.39-.09-9.3,8.24-17.3,29.16-6.4,46.13,3.4,4.54,8.08,7.79,14.02,9.74.41.14.83.26,1.24.37,10.08.42,18.39-2.99,25.53-7.65ZM343.04,48.25c0,4.66,1.59,10.37,4.75,17.1,1.08-.1,2.22-.19,3.42-.26,6.9-.51,12.28-3.44,15.56-8.49,2.04-3.14,3.14-6.97,3.27-11.06.26-12.36-10.1-19.26-17.26-16.6-2.58,1.65-4.73,3.84-6.46,6.58-2.19,3.48-3.29,7.73-3.29,12.73Z"/>
            <path class="cls-1" d="M541.73,125.83h-18.36l-9.29-27.92h-60.23l-13.38,28.48-.95-.45,13.44-28.62v-.46h.22l35.44-75.47-7.12-21.39h18.36l41.86,125.83ZM513.73,96.87l-24.63-74.03-34.76,74.03h59.39ZM490.8,62.58v-.02s0-.07,0-.11c0,.04,0,.08,0,.12Z"/>
            <path class="cls-1" d="M629.53,125.82h-12.8v-.16h-5.05c-6.73,0-12.18-5.44-12.2-12.16-.02-6.14-.04-13.4-.07-18.83,0-23.37-7.65-36.12-18.49-39.21-6.13-1.75-13.74-.68-22.78,4.72,2.84,3.72,5,8.99,5,17.83v35.11c0,3.56,1.2,6.56,3.61,9.01,2.4,2.45,5.53,3.68,9.37,3.68h-17.44c-3.85,0-7.02-1.23-9.52-3.68-2.5-2.45-3.75-5.45-3.75-9.01l-.55-71.05c0,9.31,7.39,10.93,12.77,17.48,28.24-20.23,48.57-5.81,56.21,13.9,1.17,3.03,2.87,11.31,2.87,25.29.05,5.79.1,12.15.15,17.24.48,2.33,1.58,4.39,3.3,6.15,2.4,2.45,5.53,3.68,9.37,3.68h0Z"/>
            <path class="cls-1" d="M663.92,61.9v1.05h-14.5c.34,2.04.54,3.28.54,5.9v44.53c0,3.56,1.2,6.56,3.61,9.01,2.4,2.45,5.53,3.68,9.37,3.68h-17.44c-3.85,0-7.02-1.23-9.52-3.68-2.5-2.45-3.75-5.45-3.75-9.01l-.35-50.43h-13.76v-1.05h13.75l-.19-28.99c0,12.89,14.17,12.08,17.55,28.99h14.69Z"/>
            <path class="cls-1" d="M715.28,123.29c-18.82,8.56-41.01.24-49.56-18.57-8.56-18.82-.24-41.01,18.57-49.56,18.82-8.56,41.01-.24,49.56,18.57,8.56,18.82.24,41.01-18.57,49.56ZM718.62,80.66c-8.41-18.51-23.67-29.67-34.08-24.94-10.41,4.73-12.02,23.57-3.6,42.07,8.41,18.51,23.67,29.67,34.08,24.94,10.41-4.73,12.02-23.57,3.6-42.07Z"/>
            <path class="cls-1" d="M751.7,42.8l-9.29-9.29,9.29-9.29,9.29,9.29-9.29,9.29ZM775.1,125.82h-17.44c-3.85,0-7.02-1.23-9.52-3.68-2.5-2.45-3.75-5.45-3.75-9.01l-.55-70c0,14.63,18.28,10.24,18.28,35.93v34.07c0,3.56,1.2,6.56,3.61,9.01,2.4,2.45,5.53,3.68,9.37,3.68Z"/>
            <path class="cls-1" d="M858.42,125.82h-12.8v-.16h-5.05c-6.73,0-12.18-5.44-12.2-12.16-.02-6.14-.04-13.4-.07-18.83,0-23.37-7.65-36.12-18.49-39.21-6.13-1.75-13.74-.68-22.78,4.72,2.84,3.72,5,8.99,5,17.83v35.11c0,3.56,1.2,6.56,3.61,9.01,2.4,2.45,5.53,3.68,9.37,3.68h-17.44c-3.85,0-7.02-1.23-9.52-3.68-2.5-2.45-3.75-5.45-3.75-9.01l-.55-71.05c0,9.31,7.39,10.93,12.77,17.48,28.24-20.23,48.57-5.81,56.21,13.9,1.17,3.03,2.87,11.31,2.87,25.29.05,5.79.1,12.15.15,17.24.48,2.33,1.58,4.39,3.3,6.15,2.4,2.45,5.53,3.68,9.37,3.68h0Z"/>
            <path class="cls-1" d="M876.35,104.6c8.68,13.85,21.12,21.43,30.02,17.38,5.05-2.29,8.02-7.91,8.79-15.19l2.3,8.3c-3.06,3.02-6.69,5.57-10.83,7.45-18.82,8.56-41.01.24-49.56-18.57-8.56-18.82-.24-41.01,18.57-49.56,18.14-8.25,39.4-.82,48.58,16.57l-.07.05c.06-.02.11-.05.18-.07l.34.99c-2.04.71-3.95,1.55-5.76,2.46l-8.83,5.71s0,0,0-.01c-4.12,3.24-7.63,6.82-10.92,10.17-6.94,7.07-13.29,13.53-22.79,14.32ZM898.39,89.54c3.37-3.43,6.98-7.1,11.22-10.41-8.49-18.04-23.46-28.83-33.71-24.16-10.4,4.73-12.02,23.57-3.6,42.07,1.05,2.31,2.21,4.51,3.46,6.58,9.33-.56,15.51-6.83,22.64-14.09Z"/>
          </svg>

        </button>

        <nav className=" text-base gap-9 font-normal hidden md:flex cursor-pointer ">
          <div className="">
            <button onClick={() => scrollToSection(story)} className={'text-[var(--orange)] hover:border-[var(--orange)] border-b-[1px] rounded-xl min-w-20  min-h-10 border-transparent transition-all duration-500 ease-in-out'}>
              <FormattedMessage
                id="navbar.story"
                defaultMessage="Our Story"
              />

            </button>
          </div>
          <button onClick={() => scrollToSection(travelstay)} className={'text-[var(--orange)] hover:border-[var(--orange)] border-b-[1px] rounded-xl min-w-20  min-h-10 border-transparent transition-all duration-500 ease-in-out'}>
            <FormattedMessage
              id="navbar.travelstay"
              defaultMessage="Travel & Stay"
            />

          </button>

          <button onClick={() => scrollToSection(details)} className={'text-[var(--orange)] hover:border-[var(--orange)] border-b-[1px] rounded-xl min-w-20  min-h-10 border-transparent transition-all duration-500 ease-in-out'}>
            <FormattedMessage
              id="navbar.details"
              defaultMessage="Details"
            />

          </button>

          <button onClick={() => setModalVisibility(true)} className={'text-[var(--background)] font-normal bg-[var(--orange)] opacity-100  px-3 rounded-xl min-w-20 min-h-10 transition-all duration-500 ease-in-out hover:animate-wiggle'}>
            <FormattedMessage
              id="navbar.contact"
              defaultMessage="Confirm Presence"
            />


          </button>

        </nav> 
        <nav className=" text-base  font-light md:hidden  cursor-pointer select-none">

          {/* Mobile Menu */}


          <div className=' flex md:hidden z-50 justify-between  p-5 items-center ' onClick={handleClick}>
            {nav ? <FaTimes size={25} color='var(--orange)' /> : <RxHamburgerMenu size={25} color='var(--orange)' />}
          </div>
          <ul
            className={`space-y-7 ${nav
              ? 'text-white opacity-100 transform translate-x-0 duration-500'
              : 'opacity-0 transform translate-x-full '
              } transition-transform  duration-500 absolute top-0 left-0 w-full h-screen bg-[var(--background-opaque)]  flex flex-col justify-center items-center text-2xl font-bold `}
            onClick={() => setNav(false)}
          >
            <div onClick={() => scrollToSection(story)} className="text-[var(--orange)]">
              <FormattedMessage
                id="navbar.story"
                defaultMessage="Our Story"
              />

            </div>

            <div onClick={() => scrollToSection(travelstay)} className="text-[var(--orange)]">
              <FormattedMessage
                id="navbar.travelstay"
                defaultMessage="Travel & Stay"
              />
            </div>
            <div onClick={() => scrollToSection(details)} className="text-[var(--orange)]">
              <FormattedMessage
                id="navbar.details"
                defaultMessage="Details"
              />

            </div>
            <div onClick={() => scrollToSection(contact)} className="text-[var(--orange)]">
              <FormattedMessage
                id="navbar.contact"
                defaultMessage="Contact"
              />
            </div>

          </ul>

        </nav>

      </header>

  
      <div className='content '>
         
        <section className="relative h-auto flex-row ">
        {isModalOpen && (
            <Modal closeCB={()=>{setIsModalOpen(false)}}/>
          )}
          <div ref={home} className="home">
            <Home />
          </div>
          <div ref={story} className="story">
            <Story />
          </div>
          <div ref={travelstay} className="travelstay">
            <TravelStay />
          </div>
          <div ref={details} className="details">

            <Details />
          </div>
      
          <div className="websiteInfo">

            <WebSiteInfo />
          </div>
          <Footer className="flex " />
        </section>
      </div>


    </main >
  )
}

export default Main
