import './App.css'
import Home from './component/Landing/Home'
import Navbar from './component/Landing/Navbar'
import About from './component/Landing/About'
import HowItWorks from './component/Landing/HowToRegister'
import Contact from './component/Landing/Contact'
import Footer from './component/Landing/Footer'

function App() {
  return (
    <div className='nunito'>
      <Navbar />
      <Home />
      <About />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
