import { useState, useEffect } from 'react';

function Stopwatch () {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval : any;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (time) => {
    const getMilliseconds = `00${time % 1000}`.slice(-3); // Get last 3 digits
    const seconds = Math.floor(time / 1000);
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = Math.floor(seconds / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    return `${getMinutes}:${getSeconds}:${getMilliseconds}`;
  };

  return (
    <>
      <h1 className="font-bold text-center text-xl">Stopwatch/Timer</h1>
      <div className="flex flex-col items-center justify-center text-white">
        <div className="bg-black text-yellow-500 rounded-full p-8 shadow-lg">
          <h1 className="text-5xl font-bold">{formatTime(time)}</h1>
        </div>
        <div className="mt-6 space-x-4">
          <button
            onClick={() => setIsRunning(true)}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded"
          >
            Start
          </button>
          <button
            onClick={() => setIsRunning(false)}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded"
          >
            Stop
          </button>
          <button
            onClick={() => {
              setIsRunning(false);
              setTime(0);
            }}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
