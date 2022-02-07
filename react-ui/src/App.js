import {
  Route, Routes
} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import BusinessPage from './pages/BusinessPage/BusinessPage';
import ContactFormFailure from './pages/ContactFormResults/ContactFormFailure';
import ContactFormSuccess from './pages/ContactFormResults/ContactFormSuccess';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import DiscoverPage from './pages/DiscoverPage/DiscoverPage';
import FAQPage from './pages/FAQPage/FAQPage';
import HomePage from './pages/HomePage/HomePage';
import WhatsNewPage from './pages/WhatsNewPage/WhatsNewPage';
import businessesData from './businessesData';
import BusinessOfTheWeekPage from './pages/BusinessOfTheWeekPage/BusinessOfTheWeekPage';


function App() {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/discover' element={<DiscoverPage businesses={businessesData} />} />

        <Route path='/discover/:businessName' element={<BusinessPage businesses={businessesData} />} />
        {/* 
          This is how it was before...If you clicked on a business tile, it would have the URL and have '.../businessPages/...' included.
          This is also found in the BusinessTile.js file.
        <Route path='/discover/businessPages/:businessName' element={<BusinessPage businesses={businesses} />} /> */}

        <Route path='/contactus' element={<ContactUsPage />} />

        <Route path='/faq' element={<FAQPage />} />

        <Route path='/whatsnew' element={<WhatsNewPage />} />

        <Route path='/businessoftheweek' element={<BusinessOfTheWeekPage />} />

        <Route path='/contactformsuccess' element={<ContactFormSuccess />} />

        <Route path='/contactformfailure' element={<ContactFormFailure />} />

        <Route path='*' element={<HomePage />}></Route>

      </Routes>

      <Footer />
    </div>
  );
}

export default App;