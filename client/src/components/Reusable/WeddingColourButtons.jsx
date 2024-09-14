//import {  useState } from "react";
import './ColorButton.css'

const WeddingColourButtons = () => {
    const colours = [ "bg-[#b39a87]", "bg-[#ecbca0]", "bg-[#23381f]","bg-[#994c4f]", "bg-[#767964]"];
    // const [showText, setShowText] = useState(true);
  return (
    <div className="flex gap-5 self-center m-5">
      {colours.map((color, i)=>{
        return <p key={color} className={`w-20 h-20 rounded-full ${colours[i]}`} /* onMouseEnter={()=>{setShowText(true)}} onMouseLeave={()=>{setShowText(false)}}*/>
        </p>
      })}
    </div>
  )
}


export default WeddingColourButtons
