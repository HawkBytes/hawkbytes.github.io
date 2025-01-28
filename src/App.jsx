import Navbar from './components/Navbar'
import Hero from './Pages/Hero'
import Statusbar from './Pages/Statusbar'
import About from "../src/Pages/About/index"

function App() {

  return (
    <>
      <div className="bg-gray-200 h-auto w-full">
        <Navbar/>
        <Hero/>
        <Statusbar/>
        <About />
      </div>
      
    </>
  )
}

export default App
