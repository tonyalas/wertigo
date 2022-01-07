import './Navbar.css'
import { Link } from 'react-router-dom';
import NavbarRB from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

function Navbar() {
    return (
        <div>
            <NavbarRB className='navbar-light bg-light' expand='lg'>
                <Container fluid>
                    <NavbarRB.Brand href='/'>Wertigo</NavbarRB.Brand>
                    <NavbarRB.Toggle aria-controls='basic-navbar-nav' />
                    <NavbarRB.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/discover'>Discover</Nav.Link>
                            <Nav.Link href='/contactus'>Add Your Business</Nav.Link>
                            <Nav.Link href='/faq'>FAQ</Nav.Link>
                        </Nav>
                    </NavbarRB.Collapse>
                </Container>
            </NavbarRB>

            {/* <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid'>
                    <Link to='/' className='navbar-brand'>Wertigo</Link>
                    <a className="navbar-brand" href="index.html">Wertigo</a>

                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <div className='navbar-nav'>
                            <Link to='/' className='nav-link'>Home</Link>
                            <Link to='/discover' className='nav-link'>Discover</Link>
                            <Link to='/contactus' className='nav-link'>Add Your Business</Link>
                            <Link to='/faq' className='nav-link'>FAQ</Link>
                            <a className="nav-link active" aria-current="page" href="/index.html">Home</a>
                            <a className="nav-link" href="/discover.html">Discover</a>
                            <a className="nav-link" href="/contactus.html">Add Your Business</a>
                            <a className="nav-link" href="/faq.html">FAQ</a>
                        </div>
                    </div>
                </div>
            </nav> */}
        </div>
    )
}

export default Navbar;