import { Home, Story, TravelStay, Details, Contact } from './pages'
import Footer from './components/Reusable/Footer'
import { useRef, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { FaTimes } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'




const App = () => {

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


  const scrollToSection = (elementRef) => {

    state = elementRef.current.className;

    window.scrollTo({
      top: elementRef.current.offsetTop - 71,
      behavior: "smooth",
    });
  };



  return (
    <main className='bg-[var(--dark-bg)] h-screen '>
      <header className="flex fixed  w-full justify-between  p-4 items-center px-8 py-4  mx-auto bg-[var(--dark-green)] opacity-90 z-10 right-0 -left-0 top-0  ">
        <div onClick={() => scrollToSection(home)} className="w-10 h-10  items-center justify-start flex font-bold cursor-pointer">
          <p className="text-2xl orange-gradient_text hover:#B45309">A&A</p>

        </div>

        <nav className=" text-base gap-9 font-light hidden md:flex cursor-pointer ">
          <div className="">
            <div onClick={() => scrollToSection(story)} className={'text-orange-300 hover:border-orange-300 border-b-[1px] border-transparent transition-all duration-500 ease-in-out'}>
              <FormattedMessage
                id="navbar.story"
                defaultMessage="Our Story"
              />

            </div>
          </div>
          <div onClick={() => scrollToSection(travelstay)} className={'text-orange-300 hover:border-orange-300 border-b-[1px] border-transparent transition-all duration-500 ease-in-out'}>
            <FormattedMessage
              id="navbar.travelstay"
              defaultMessage="Travel & Stay"
            />

          </div>

          <div onClick={() => scrollToSection(details)} className={'text-orange-300 hover:border-orange-300 border-b-[1px] border-transparent transition-all duration-500 ease-in-out'}>
            <FormattedMessage
              id="navbar.details"
              defaultMessage="Details"
            />

          </div>

          <div onClick={() => scrollToSection(contact)} className={'text-orange-300 hover:border-orange-300 border-b-[1px] border-transparent transition-all duration-500 ease-in-out'}>
            <FormattedMessage
              id="navbar.contact"
              defaultMessage="Contact"
            />


          </div>

        </nav>
        <nav className=" text-base  font-light md:hidden  cursor-pointer">

          {/* Mobile Menu */}


          <div className=' flex md:hidden z-10 justify-between  p-5 items-center ' onClick={handleClick}>
            {nav ? <FaTimes size={25} color='rgb(253, 186, 116)' /> : <RxHamburgerMenu size={25} color='rgb(253, 186, 116)' />}
          </div>
          <ul
            className={`space-y-7 ${nav
              ? 'text-white opacity-100 transform translate-x-0 duration-500'
              : 'opacity-0 transform -translate-y-full '
              } transition-transform  duration-500 absolute top-0 left-0 w-full h-screen bg-[var(--dark-green)] opacity-80 flex flex-col justify-center items-center text-2xl`}
            onClick={() => setNav(false)}
          >
            <div onClick={() => scrollToSection(story)} className={state === "story" ? 'text-amber-700' : 'text-orange-300'}>
              <FormattedMessage
                id="navbar.story"
                defaultMessage="Our Story"
              />

            </div>

            <div onClick={() => scrollToSection(travelstay)} className={state === "travelstay" ? 'text-amber-700' : 'text-orange-300'}>
              <FormattedMessage
                id="navbar.travelstay"
                defaultMessage="Travel & Stay"
              />
            </div>
            <div onClick={() => scrollToSection(details)} className={state === "details" ? 'text-amber-700' : 'text-orange-300'}>
              <FormattedMessage
                id="navbar.details"
                defaultMessage="Details"
              />

            </div>
            <div onClick={() => scrollToSection(contact)} className={state === "contact" ? 'text-amber-700' : 'text-orange-300'}>
              <FormattedMessage
                id="navbar.contact"
                defaultMessage="Contact"
              />
            </div>

          </ul>

        </nav>

      </header>


      <div className='content '>

        <section className="relative h-auto flex-row">
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
          <div ref={contact} className="contact">

            <Contact />
          </div>

          <Footer className="flex " />
        </section>
      </div>


    </main >


  )
}

export default App
