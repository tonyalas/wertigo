import './Navbar.css'
import { Link } from 'react-router-dom';
import NavbarRB from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { useState } from 'react';

function Navbar() {

    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <NavbarRB className='navbar-light bg-light' expand='lg' expanded={expanded}>
                <Container fluid>
                    <NavbarRB.Brand href='/'>Wertigo</NavbarRB.Brand>
                    <NavbarRB.Toggle aria-controls='basic-navbar-nav' onClick={() => setExpanded(expanded ? false : 'expanded')} />
                    <NavbarRB.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <Link to='/' id='links' onClick={() => setExpanded(false)}><Nav.Link href='/' id='links'>Home</Nav.Link></Link>
                            <Link to='/discover' id='links' onClick={() => setExpanded(false)}><Nav.Link href='/discover' id='links'>Discover</Nav.Link></Link>
                            <Link to='/contactus' id='links' onClick={() => setExpanded(false)}><Nav.Link href='/contactus' id='links'>Add Your Business</Nav.Link></Link>
                            <Link to='/faq' id='links' onClick={() => setExpanded(false)}><Nav.Link href='/faq' id='links'>FAQ</Nav.Link></Link>
                            <Link to='/businessofthemonth' id='links' onClick={() => setExpanded(false)}><Nav.Link href='/businessofthemonth' id='links'>Business of the Month</Nav.Link></Link>
                            <Link to='/whatsnew' id='links' onClick={() => setExpanded(false)}><Nav.Link href='/whatsnew' id='links'>What's New</Nav.Link></Link>
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