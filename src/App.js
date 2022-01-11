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
    name: 'Nancy Johns Gallery',
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
    embeddedMapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.7601646094004!2d-82.9817573845015!3d42.326313945224655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2b458060690f%3A0x7c27c27b9d2055e5!2sNancy%20Johns%20Gallery%20%26%20Framing!5e0!3m2!1sen!2sca!4v1640644420421!5m2!1sen!2sca',
    hoursDays: {
      first: 'Sunday to Monday:',
      second: 'Tuesday - Friday:',
      third: 'Saturday:'
    },
    hoursTimes: {
      first: 'Closed',
      second: '10am to 6pm',
      third: '10am to 4pm'
    },
  },
  {
    id: 2,
    name: 'DeMarco\'s Fine Foods',
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
    embeddedMapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.5018781982026!2d-83.02871048450302!3d42.267808948915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2c2f9c35f17b%3A0xca5d55e263c8fd19!2sDeMarco%27s%20Fine%20Foods!5e0!3m2!1sen!2sca!4v1640657531167!5m2!1sen!2sca',
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
    embeddedMapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.3647072074837!2d-82.84742788450187!3d42.3134193460382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883ad5401226512d%3A0xa36876a3cc69d6f!2sThe%20Cutting%20Board%20Deli%20Tecumseh!5e0!3m2!1sen!2sca!4v1641484812596!5m2!1sen!2sca',
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
    embeddedMapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.5960981488975!2d-82.96618018450195!3d42.308483046349835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2b1055f62553%3A0xb1a5da190e5d10ec!2sBarber&#39;s%20In!5e0!3m2!1sen!2sca!4v1641860732037!5m2!1sen!2sca',
    embeddedMapsLink2: '',
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
    embeddedMapsLink: '',
    hasHours: false,
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
    embeddedMapsLink: '',
    hasHours: false,
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
    embeddedMapsLink: '',
    hasHours: false,
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
    embeddedMapsLink: '',
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
    embeddedMapsLink: '',
    hasHours: false,
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