import { useState, useEffect } from "react";

function MaxCount() {
  const [count, setCount] = useState(10);
  const [clickCount, setClickCount] = useState(0);
  useEffect(() => {
    const expireCount = setInterval(() => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      } else {
        clearInterval(expireCount);
      }
    }, 1000);
    return () => clearInterval(expireCount);
  }, [count]);

  const restart = () => {
    setCount(10);
    setClickCount(0);
  }

  return (
    <div>
      <h1 className="font-bold text-center text-xl">
        No Of Click Until Timer Expire
      </h1>
      <div className="max-w-sm p-6  border border-gray-200 rounded-lg shadow bg-slate-300 flex flex-col items-center">
        <h1 className="mb-3 font-semibold text-xl text-center text-gray-900 ">
          {clickCount}
        </h1>
        {count > 0 ? (
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setClickCount((prevCount) => prevCount + 1)}
          >
            Click Here
          </button>
        ) : null}
        <h1 className="mt-3 font-semibold text-xl text-center text-gray-900 ">
          Time left : {count}
        </h1>
        {count == 0 ? (
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={restart}
          >
            Restart
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default MaxCount;
