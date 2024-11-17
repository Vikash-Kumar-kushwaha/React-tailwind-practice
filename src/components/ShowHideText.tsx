import { useState } from "react"

function ShowHideText() {
    const [showText, setShowText] = useState(true);
    
  return (
    <div>
        <h1 className="font-bold text-center text-xl">Show Hide App Stay On Page Load</h1>
        { showText ? <h1 className="font-semibold m-2">This is demo text</h1> : null}
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => setShowText((showText) => !showText)}> Show / Hide</button>
    </div>
  )
}

export default ShowHideText