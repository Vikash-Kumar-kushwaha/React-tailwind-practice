import { useState } from "react"

function ShowHoverText() {
    const [overShowText, setOverShowText] = useState(false);
    const demoText = "You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.";
  return (
    <div>
        <h1 className="font-bold text-center text-xl">Show Text on hover</h1>
        <button className="mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onMouseOver={() => setOverShowText(true)} onMouseLeave={() => setOverShowText(false)}> Hover Show</button>
        { overShowText ? <h1 className="font-semibold m-2">{demoText}</h1> : null}
    </div>
  )
}

export default ShowHoverText