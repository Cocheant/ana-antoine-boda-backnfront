import LanguageSelector from "./LanguageSelector"

const Footer = () => {
    return (
        <footer className=" w-full  items-center  border-vlorange/50 border-t  bg-[var(--background)]  z-10 bottom-0 absolute flex   justify-between ">
            <div className="justify-left px-8 py-4">


                <LanguageSelector />
            </div>
            <div className="justify-right flex text-center items-center font-medium  h-auto  overflow-visible mr-10">


                <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="flex text-center items-center justify-center  ">
                    <div className="relative w-8 h-8 text-center items-center justify-center pt-3">
                        <div className="absolute bg-vlorange 
                            w-6 h-6 rotate-45">
                        </div>
                        <div className="absolute bg-[var(--background)] 
                            w-6 h-6 rotate-45 translate-y-1">
                        </div>
                    </div>

                </button>            </div>


        </footer>
    )
}

export default Footer
