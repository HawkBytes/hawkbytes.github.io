import Navbar from './components/Navbar'
import Workareas from './components/Workareas'
import Hero from './Pages/Hero'
import Statusbar from './Pages/Statusbar'

import About from "../src/Pages/About/index"

import Experience from './components/Exp'

function App() {

  return (
    <>
      <div className="bg-gray-200 h-auto w-full">
        <Navbar/>
        <Hero/>
        <Statusbar/>

        <About />
        <Workareas/>
        <Experience/>
        <Statusbar/>

      </div>
      
    </>
  )
}

export default App
