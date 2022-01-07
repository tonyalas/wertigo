import './App.css';
import BusinessTile from './components/BusinessTile/BusinessTile';
import IndexCarousel from './components/IndexCarousel/IndexCarousel';
import JumbotronHeader from './components/JumbotronHeader/JumbotronHeader';
import Navbar from './components/Navbar/Navbar';
import Container from 'react-bootstrap/Container';
import IndexMainBody from './components/IndexMainBody/IndexMainBody';
import Footer from './components/Footer/Footer';

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
  }
]

function App() {
  return (
    <div className="App">

      <div>
        <Navbar />
      </div>

      <header>
        <JumbotronHeader />
      </header>

      <Container>
        <div>
          <IndexCarousel />

          <IndexMainBody />


          {
            /*
          {businesses.map(business => {
            return (
              <BusinessTile name={business.name} description={business.description} key={business.id} />
            )
          })}

            */
          }

        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;