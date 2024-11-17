import { useState } from "react"

function ProgressBar() {
    const [progressCount, setProgressCount]  = useState(50);

    const handleChange = (event:any) => {
        const inputValue = parseInt(event.target.value);
        if(inputValue > 0 && inputValue <= 100 ){
            setProgressCount(event.target.value);
        }
    };
  return (
    <>
        <h1 className="font-bold text-center text-xl">Progress Bar</h1>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width : progressCount + "%"}}> {progressCount}%</div>
        </div>
        <div>
            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Small input</label>
            <input onChange={handleChange} type="number" id="small-input" className="block w-full p-2 border rounded-md" placeholder="Enter progress number"/>
        </div>
    </>
  )
}

export default ProgressBar