import { useRef, useState } from 'react';

function MyCustomWatch() {
  const [num, setNum] = useState(0);
  const intervalRef = useRef<any>(null);

  const clearExistingInterval = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const increaseCount = () => {
    clearExistingInterval(); // Clear any existing interval
    intervalRef.current = setInterval(() => {
      setNum((prevNum) => prevNum + 1);
    }, 10);
  };

  const decreaseCount = () => {
    clearExistingInterval(); // Clear any existing interval
    intervalRef.current = setInterval(() => {
      setNum((prevNum) => prevNum - 1);
    }, 10);
  };

  const stopCount = () => {
    clearExistingInterval(); // Stop the interval
  };

  return (
    <div>
    <h1 className="font-bold text-center text-xl">Increase/ Decrease / Stop count</h1>
      <p>Interval num: {num}</p>

      <div className="mt-6 space-x-4">
        <button
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded"
          onClick={increaseCount}
        >
          Increase
        </button>
        <button
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded"
          onClick={decreaseCount}
        >
          Decrease
        </button>
        <button
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded"
          onClick={stopCount}
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default MyCustomWatch;
