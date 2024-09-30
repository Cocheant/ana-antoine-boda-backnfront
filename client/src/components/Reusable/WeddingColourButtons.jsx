//import {  useState } from "react";
import './ColorButton.css'

const WeddingColourButtons = () => {
    const colours = [  "bg-[var(--light-red)]","bg-[var(--red)]", "bg-[var(--orange)]",   "bg-[var(--yellow)]", "bg-[var(--dark-green)]" , "bg-[var(--light-green)]"];
    // const [showText, setShowText] = useState(true);  --light-red: #d56f63 --orange: #d33d00; --red: #950028; --yellow: #fcab00; --light-green: #7b7e59; --dark-green: #3a4a2d;--background: #e6e7dc;
  return (
    <div className="flex gap-1 sm:gap-3  md:gap-5 self-center items-center justify-center m-5">
      {colours.map((color, i)=>{
        return <p key={color} className={`w-20 h-20 rounded-full  ${colours[i]}`} /* onMouseEnter={()=>{setShowText(true)}} onMouseLeave={()=>{setShowText(false)}}*/>
        </p>
      })}
    </div>
  )
}


export default WeddingColourButtons
