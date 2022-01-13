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
import { useEffect, useState } from 'react';


function App() {
    const [businessData, setBusinessData] = useState([])

    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            const URL = process.env.REACT_APP_API_URL || ''
            const data = await fetch(URL + '/api/v1/businesses');
            const businesses = await data.json()
            setBusinessData(businesses)
        }


        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, []);

    return (
        <div className='App'>
            <Navbar />

            <Routes>
                <Route path='/' element={<HomePage />} />

                <Route path='/discover' element={<DiscoverPage businesses={businessData} />} />

                <Route path='/discover/:businessName' element={<BusinessPage businesses={businessData} />} />
                {/* 
            This is how it was before...If you clicked on a business tile, it would have the URL and have '.../businessPages/...' included.
            This is also found in the BusinessTile.js file.
          <Route path='/discover/businessPages/:businessName' element={<BusinessPage businesses={businesses} />} /> */}

                <Route path='/contactus' element={<ContactUsPage />} />

                <Route path='/faq' element={<FAQPage />} />

                <Route path='/contactformsuccess' element={<ContactFormSuccess />} />

                <Route path='/contactformfailure' element={<ContactFormFailure />} />

                <Route path='*' element={<HomePage />}></Route>

            </Routes>

            <Footer />
        </div>
    );
}

export default App;