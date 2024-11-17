import './App.css'
import Counter from './components/Counter'
import MaxCount from './components/MaxCount'
import MyCustomWatch from './components/MyCustomWatch'
import ProgressBar from './components/ProgressBar'
import ShowHideText from './components/ShowHideText'
import ShowHoverText from './components/ShowHoverText'
import Stopwatch from './components/Stopwatch'
import Todo from './components/Todo'

function App() {

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-3 gap-2 mt-3'>
        <div className="bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
          <Counter/>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
          <ShowHideText />
        </div>
        <div className=" row-span-2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
          <Todo />
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
          <ShowHoverText />
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
          <Stopwatch />
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
          <MyCustomWatch />
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
          <ProgressBar />
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
          <MaxCount />
        </div>
      </div>
    </div>
  )
}

export default App
