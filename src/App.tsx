import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Landing/Home';
import Navbar from './component/Landing/Navbar';
import About from './component/Landing/About';
import HowItWorks from './component/Landing/HowToRegister';
import Contact from './component/Landing/Contact';
import Footer from './component/Landing/Footer';
import Gallery from './component/Landing/Gallery';
import Countdown from './component/Landing/CountDown';
import Donation from './component/Landing/Donation';
// import DonateModal from './DonateModal';
import Registration from './component/Registration';
import AdminLogin from './component/AdminLogin';
import AdminDashboard from './component/AdminDashboard';
import PrivateRoute from './component/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Landing Pages */}
        <Route
          path="/"
          element={
            <div className='nunito'>
              <Navbar />
              {/* <DonateModal /> */}
              <Home />
              <Countdown />
              <About />
              <Donation />
              <Gallery />
              <HowItWorks />
              <Registration />
              <Contact />
              <Footer />
            </div>
          }
        />

        {/* Admin Pages */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
