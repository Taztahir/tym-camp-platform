import './App.css'
import Home from './component/Landing/Home'
import Navbar from './component/Landing/Navbar'
import About from './component/Landing/About'
import HowItWorks from './component/Landing/HowToRegister'
import Contact from './component/Landing/Contact'
import Footer from './component/Landing/Footer'
import Gallery from './component/Landing/Gallery'
import DonateGallery from './component/Landing/Donation'
import Countdown from './component/Landing/CountDown'

function App() {
  return (
    <div className='nunito'>
      <Navbar />
      <Home />
      <Countdown/>
      <About />
      <Gallery />
      <HowItWorks />
      <Contact />
      <DonateGallery />
      <Footer />
    </div>
  )
}

export default App
