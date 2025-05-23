import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './pages/DashBoard.js';
import Vehicle from './pages/Vehicle.js';
import Notification from './pages/Notification.js';
import AdminDashBoard from './pages/AdminDashboard.js';
import AllReviews from './pages/AllReviews.js';
import VehicleProfile from './pages/VehicleProfile.js';
import LoginForm from './pages/LoginForm.jsx';
import { LoginModalProvider, useLoginModal } from './contexts/LoginModalContext';
import LoginModal from './components/LoginModal';
import AboutUs from './pages/AboutUs.js';
import BookingHistory from './pages/Booking.js';

function AppContent() {
  const { isLoginOpen } = useLoginModal();

  return (
    <div className={`App ${isLoginOpen ? 'blur' : ''}`}>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/vehicles" element={<Vehicle />} />
        <Route path="/Notifications" element={<Notification />} />
        <Route path='/AdminDashboard' element={<AdminDashBoard />} />
        <Route path='/AllReviews' element={<AllReviews />} />
        <Route path='/VehicleProfile' element={<VehicleProfile />} />
        <Route path='/Login' element={<LoginForm />} />
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/MyBooking' element={<BookingHistory/>}/>
      </Routes>
      {isLoginOpen && <LoginModal />}
    </div>
  );
}

function App() {
  return (
    <LoginModalProvider>
      <Router>
        <AppContent />
      </Router>
    </LoginModalProvider>
  );
}

export default App;
