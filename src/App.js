import {
  Route, Routes
} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import BusinessPage from './pages/BusinessPage/BusinessPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import DiscoverPage from './pages/DiscoverPage/DiscoverPage';
import FAQPage from './pages/FAQPage/FAQPage';
import HomePage from './pages/HomePage/HomePage';

const businesses = [
  {
    name: 'business 1',
    description: 'description 1',
    id: 1
  },
  {
    name: 'business 2',
    description: 'description 2',
    id: 2
  },
  {
    name: 'demarco\'s fine foods',
    description: 'grocery store',
    id: 3
  }
]

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/discover' element={<DiscoverPage businesses={businesses} />} />

        <Route path='/discover/businessPages/:businessName' element={<BusinessPage businesses={businesses} />} />

        <Route path='/contactus' element={<ContactUsPage />} />

        <Route path='/faq' element={<FAQPage />} />

        <Route path='*' element={<HomePage />}></Route>

      </Routes>

      <Footer />
    </div>
  );
}

export default App;