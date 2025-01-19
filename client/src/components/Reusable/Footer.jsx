import LanguageSelector from "./LanguageSelector"

const Footer = () => {
    return (
        <footer className=" w-full  items-center  border-vlorange/50 border-t  bg-[var(--background)]  z-10 bottom-0 absolute flex   justify-between ">
            <div className="justify-left px-8 py-4">


                <LanguageSelector />
            </div>
           
        </footer>
    )
}

export default Footer
