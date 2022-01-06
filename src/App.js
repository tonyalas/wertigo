import logo from './logo.svg';
import './App.css';
import BusinessTile from './components/BusinessTile/BusinessTile';

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {businesses.map(business => {
          return (
            <BusinessTile name={business.name} description={business.description} key= {business.id} />
          )
        })}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
