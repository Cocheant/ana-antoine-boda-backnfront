import { Link } from "react-router-dom"
import { FormattedMessage } from 'react-intl';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from 'react-icons/fa'
import { useState } from "react";

const Navbar = () => {

    // nav is starting off false
    const [nav, setNav] = useState(false);
    // so when user clicks the hamburger button, it goes from false(!nav) to true(nav)
    const handleClick = () => setNav(!nav);

    return (
        <header className="flex  w-full justify-between  p-4 items-center px-8 py-4  mx-auto bg-[var(--background)] opacity-90 z-10 right-0 -left-0 top-0 sticky ">
            <Link to="/" className="w-10 h-10  items-center justify-start flex font-bold ">
                <p className="text-2xl orange-gradient_text hover:#B45309">A&A</p>

            </Link>

            <nav className=" text-base gap-9 font-light hidden md:flex ">
                <div className="">
                    <Link to="/#story" className="text-[var(--orange)]">
                        <FormattedMessage
                            id="navbar.story"
                            defaultMessage="Our Story"
                        />

                    </Link>
                </div>
                <Link to="/#travelstay"  className="text-[var(--orange)]">
                    <FormattedMessage
                        id="navbar.travelstay"
                        defaultMessage="Travel & Stay"
                    />

                </Link>

                <Link to="/#details"  className="text-[var(--orange)]">
                    <FormattedMessage
                        id="navbar.details"
                        defaultMessage="Details"
                    />

                </Link>

                <Link to="/#contact"  className="text-[var(--orange)]">
                    <FormattedMessage
                        id="navbar.contact"
                        defaultMessage="Contact"
                    />


                </Link>

            </nav>
            <nav className=" text-base  font-light md:hidden">

                {/* Mobile Menu */}


                <div className=' flex md:hidden z-10 justify-between  p-5 items-center ' onClick={handleClick}>
                    {nav ? <FaTimes size={25} color='rgb(253, 186, 116)' /> : <RxHamburgerMenu size={25} color='rgb(253, 186, 116)' />}
                </div>
                <ul
                    className={`space-y-7 ${nav
                        ? 'text-white opacity-100 transform translate-x-0 duration-500'
                        : 'opacity-0 transform -translate-y-full '
                        } transition-transform  duration-500 absolute top-0 left-0 w-full h-screen bg-[var(--background)] opacity-80 flex flex-col justify-center items-center text-2xl`}
                    onClick={() => setNav(false)}
                >
                    <Link to="/#story"  className="text-[var(--orange)]">
                        <FormattedMessage
                            id="navbar.story"
                            defaultMessage="Our Story"
                        />

                    </Link>

                    <Link to="/#travelstay"  className="text-[var(--orange)]">
                        <FormattedMessage
                            id="navbar.travelstay"
                            defaultMessage="Travel & Stay"
                        />
                    </Link>
                    <Link to="/#details"  className="text-[var(--orange)]">
                        <FormattedMessage
                            id="navbar.details"
                            defaultMessage="Details"
                        />

                    </Link>
                    <Link to="/#contact"  className="text-[var(--orange)]">
                        <FormattedMessage
                            id="navbar.contact"
                            defaultMessage="Contact"
                        />
                    </Link>

                </ul>

            </nav>

        </header>
    )
}

export default Navbar
