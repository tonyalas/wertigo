import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './WhatsNewPage.css'

function WhatsNewPage() {
    useEffect(() => {
        document.title = 'Wertigo - What\'s New'
    }, []);

    return (
        <>
            <div className='Jumbotron'>
                <h1>What's New</h1>
            </div>
            <Container>
                <div className='row justify-content-center'>
                    <div className='col'>
                        <div className='centeredText'>
                            <br></br>
                            <h2>February 7, 2022</h2>
                            <h4>The first Business of the Week starts today!</h4>
                            <p>Just in time for Valentine's Day, Flowers by Toni is the first business to be featured for the new "Business of the Week" page. The business of the week is featured on the Home page as well as its own page which can be found at the top navigation bar or by clicking the "Learn More" button on the Home page. Check out this new page <Link target='_blank' rel='noopener noreferrer' className='businessHeaderLink' to={'/businessoftheweek'}>here!</Link></p>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col'>
                        <div className='centeredText'>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col'>
                        <div className='centeredText'>
                            <br></br>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col'>
                        <div className='centeredText'>
                            <br></br>
                        </div>
                    </div>
                </div>
                {/* <!-- ADDS FILLER/PADDING TO PAGE BELOW --> */}
                <div className='row justify-content-center'>
                    <div className='col'>
                        <div className='centeredText'>
                            <br></br><br></br>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default WhatsNewPage;