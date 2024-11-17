import { useState , useEffect} from "react"

function Counter() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount != null ? parseInt(savedCount, 10) : 0;
  });
  const increment = () => setCount(increValue => increValue + 1);
  const decrement = () => setCount(decreValue => decreValue - 1);
  const reset = () => setCount(0);
  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);
  return (
    <div>
      <h1 className="text-center text-xl font-bold">Couter App Stay On Page Load</h1>
      <h2 className="border border-gray-200 rounded-lg text-center text-sm">Count: {count} </h2>
      <div className="flex justify-center mt-9">
        <button className="bg-white-400 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900 border" onClick={increment}>Increment</button>
        <button className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900" onClick={decrement}>Decrement</button>
        <button className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Counter