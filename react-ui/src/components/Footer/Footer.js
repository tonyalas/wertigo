import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <footer className='page-footer'>
            <div className='footer-copyright text-center py-3'>Wertigo 2022
                <br></br>
                <br></br>
                <Link to='/' id='footer-links'>Home</Link>
                <Link to='/discover' id='footer-links'>Discover</Link>
                <Link to='/contactus' id='footer-links'>Contact Us</Link>
                <Link to='/faq' id='footer-links'>FAQ</Link>
                {/* <Link to='/whatsnew' id='footer-links'>What's New</Link> */}
                {/* <a href='/index' id='footer-links'>Home</a>
                <a href='/discover' id='footer-links'>Discover</a>
                <a href='/contactus' id='footer-links'>Add Your Business</a>
                <a href='/faq' id='footer-links'>FAQ</a> */}
                <br></br>
                <br></br>
                <Link to='/businessoftheweek' id='footer-links'>Business of the Week</Link>
                <Link to='/whatsnew' id='footer-links'>What's New</Link>
                <br></br>
                <br></br>
                <a href='https://github.com/tonyalas/wertigo' id='footer-links' target='_blank' rel='noopener noreferrer'>Github</a>
            </div>
        </footer>
    )
}

export default Footer;