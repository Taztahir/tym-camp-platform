import './App.css'
import Home from './component/Landing/Home'
import Navbar from './component/Landing/Navbar'
import About from './component/Landing/About'
import HowItWorks from './component/Landing/HowToRegister'
import Contact from './component/Landing/Contact'
import Footer from './component/Landing/Footer'
import Gallery from './component/Landing/Gallery'
import Countdown from './component/Landing/CountDown'
import Donation from './component/Landing/Donation'
import DonateModal from './DonateModal'

function App() {
  return (
    <div className='nunito'>
      <Navbar />
      <DonateModal/>
      <Home />
      <Countdown/>
      <About />
      <Donation/>
      <Gallery />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
