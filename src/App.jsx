import Navbar from './components/Navbar'
import Hero from './Pages/Hero'
import Statusbar from './Pages/Statusbar'

function App() {

  return (
    <>

      <div className="bg-gray-200 h-auto w-full">
        
        <Navbar/>
        <Hero/>
        <Statusbar/>
      </div>
      
    </>
  )
}

export default App
