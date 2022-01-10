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
    id: 1,
    name: 'Nancy John\'s Gallery',
    category: 'Shopping',
    subcategory: 'Framing and Art',
    picturePath: '/images/nancyjohnsgallery.jpg',
    description: 'Nancy Johns Gallery & Framing is a commercial art gallery, with custom picture framing services. We represent fine art from Windsor/Essex County and provide the city\'s only art rental program.',
    phoneNumber: '519-945-2222',
    websiteURL: 'https://www.nancyjohns.com',
    facebookURL: '',
    etsyURL: '',
    instagramURL: 'https://www.instagram.com/nancyjohnsgallery/',
    instagramUsername: 'nancyjohnsgallery',
    instagramURL2: '',
    address: '4755 Wyandotte St E, Windsor ON, N8Y 1H8',
    googleMapsLink: 'https://goo.gl/maps/p5pKiezHUttTf9yg6',
    address2: '',
  },
  {
    id: 2,
    name: 'Demarco\'s Fine Foods',
    category: 'Food',
    subcategory: 'Grocery Store',
    picturePath: '/images/demarcosfinefoods.jpeg',
    description: '',
    phoneNumber: '519-969-7887',
    websiteURL: 'https://www.demarcosfinefoods.com',
    facebookURL: '',
    etsyURL: '',
    instagramURL: 'https://www.instagram.com/demarcosfinefoods/',
    instagramUsername: 'demarcosfinefoods',
    instagramURL2: '',
    address: '1349 Grand Marais Rd W, Windsor ON, N9E 1E2',
    googleMapsLink: 'https://goo.gl/maps/iLQacLPVk3FFqKPZ8',
    address2: '',
  },
  {
    id: 3,
    name: 'The Cutting Board Deli',
    category: 'Food',
    subcategory: 'Deli',
    picturePath: '/images/thecuttingboarddeli.jpg',
    description: '',
    phoneNumber: '519-979-4406',
    websiteURL: '',
    facebookURL: 'https://www.facebook.com/thecuttingboarddeli.tecumseh/',
    etsyURL: '',
    instagramURL: 'https://www.instagram.com/thecuttingboarddeli/',
    instagramUsername: 'thecuttingboarddeli',
    instagramURL2: '',
    address: '14301 Tecumseh Rd E, Windsor, ON N8N 1M3',
    googleMapsLink: 'https://goo.gl/maps/WaHtWQoSxJime4NTA',
    address2: '',
  },
  {
    id: 4,
    name: 'The Barber\'s In',
    category: 'Health & Beauty',
    subcategory: 'Barber Shop',
    picturePath: '/images/defaultpicture.jpg',
    description: '',
    phoneNumber: '519-944-1315',
    phoneNumberDescription: '(Central Windsor)',
    phoneNumber2: '519-944-1315',
    phoneNumberDescription2: '(Riverside)',
    websiteURL: '',
    facebookURL: 'https://www.facebook.com/thebarbersin/',
    etsyURL: '',
    instagramURL: 'https://www.instagram.com/thebarbersinwindsor/',
    instagramUsername: 'thebarbersinwindsor',
    instagramURL2: '',
    address: '5124 Tecumseh Rd E, Windsor, ON N8T 1C1',
    googleMapsLink: 'https://goo.gl/maps/ns5usAMKJcYpDpw5A',
    address2: '12325 Riverside Dr E, Windsor, ON N8N 1A3',
    googleMapsLink2: 'https://goo.gl/maps/GRQ4FBNfdvJqVmZT7',
  },
  {
    id: 5,
    name: 'Bella Armande Jewelry',
    category: 'Accessories',
    subcategory: 'Jewelry',
    picturePath: '/images/bellaarmande.jpg',
    description: '',
    phoneNumber: '',
    websiteURL: '',
    facebookURL: '',
    etsyURL: 'https://www.etsy.com/ca/shop/BellaArmandeJewelry',
    instagramURL: 'https://www.instagram.com/bellaarmandejewelry/',
    instagramUsername: 'bellaarmandejewelry',
    instagramURL2: '',
    address: 'Windsor, ON',
    googleMapsLink: '',
    address2: '',
  },
  {
    id: 6,
    name: 'Felipe\'s Blazin BBQ',
    category: 'Food',
    subcategory: 'Sauces',
    picturePath: '/images/felipebbq.jpg',
    description: '',
    phoneNumber: '',
    websiteURL: '',
    facebookURL: 'https://www.facebook.com/felipesblazinbbq',
    etsyURL: '',
    instagramURL: 'https://www.instagram.com/felipesblazinbbq/',
    instagramUsername: 'felipesblazinbbq',
    instagramURL2: '',
    address: 'Lasalle, ON',
    googleMapsLink: '',
    address2: '',
  },
  {
    id: 7,
    name: 'Threedee Lab',
    category: 'Accessories',
    subcategory: 'Gifts',
    picturePath: '/images/3dlab.jpg',
    description: '',
    phoneNumber: '',
    websiteURL: '',
    facebookURL: '',
    etsyURL: 'https://www.etsy.com/ca/shop/MikesThreeDeeLab?ref=simple-shop-header-name&listing_id=954504717',
    instagramURL: 'https://www.instagram.com/threedee_lab/',
    instagramUsername: 'threedee_lab',
    instagramURL2: '',
    address: 'Windsor, ON',
    googleMapsLink: '',
    address2: '',
  },
  {
    id: 8,
    name: 'Manual Therapy Clinic',
    category: 'Health & Beauty',
    subcategory: 'Massage Therapy',
    picturePath: '/images/defaultpicture.jpg',
    description: '',
    phoneNumber: '226-260-2927',
    websiteURL: 'https://mtc.janeapp.com',
    facebookURL: '',
    etsyURL: 'https://www.etsy.com/ca/shop/MikesThreeDeeLab?ref=simple-shop-header-name&listing_id=954504717',
    instagramURL: 'https://www.instagram.com/nwagner.rmt/',
    instagramUsername: 'nwagner.rmt',
    instagramURL2: 'https://www.instagram.com/themtclinic/',
    instagramUsername2: 'themtclinic',
    address: '1236 Tecumseh Rd E, Windsor ON, N8W 1B8',
    googleMapsLink: 'https://goo.gl/maps/US8QV5Un6o9F94RF9',
    address2: '',
  },
  {
    id: 9,
    name: 'Glamour Events',
    category: 'Events',
    subcategory: 'Weddings and Events Decor',
    picturePath: '/images/glamourevents.jpg',
    description: '',
    phoneNumber: '226-344-2490',
    websiteURL: '',
    facebookURL: 'https://www.facebook.com/Glamour-Events-514389265312116',
    etsyURL: '',
    instagramURL: 'https://www.instagram.com/emma_glamourevents/',
    instagramUsername: 'emma_glamourevents',
    instagramURL2: '',
    address: 'Windsor, ON',
    googleMapsLink: '',
    address2: '',
  },
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