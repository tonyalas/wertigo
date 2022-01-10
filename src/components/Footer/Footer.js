import './Footer.css'

function Footer() {
    return (
        <footer className='page-footer'>
            <div className='footer-copyright text-center py-3'>© 2021 Wertigo
                <br></br>
                <br></br>
                <a href='/index' id='footer-links'>Home</a>
                <a href='/discover' id='footer-links'>Discover</a>
                <a href='/contactus' id='footer-links'>Contact Us</a>
                <a href='/faq' id='footer-links'>FAQ</a>
                <br></br>
                <br></br>
                <a href='https://github.com/tonyalas/wertigo' id='footer-links'>Github</a>
            </div>
        </footer>
    )
}

export default Footer;