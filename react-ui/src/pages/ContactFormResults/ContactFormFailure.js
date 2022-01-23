import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ContactFormResults.css'

function ContactFormFailure() {
    useEffect(() => {
        document.title = 'Contact Form Failed to Send';
    }, []);

    return (
        <>
            <div className='Jumbotron'>
                <h1>There's Been an Error!</h1>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div className='centeredText'>
                            <h1>Your contact form was <b>not</b> successfully submitted.</h1>
                            <div className='block-text'>
                                <p>
                                    Something went wrong! Please go back to the Contact Us the page and try again.
                                    <br></br><br></br>
                                    If it still does not work, please use the link at the bottom of the Contact Us page to manually send us an email.
                                    <br></br><br></br>
                                    Please note that the send process can take up to a minute depending on internet speeds and image sizes. Do not refresh the page after hitting the "Submit" button to ensure it can completely send.
                                    <br></br><br></br>
                                    Click the buttons below to go back to the Contact Us page and try again or go to the other pages:
                                    <br></br><br></br>
                                </p>
                            </div>
                            <a href='/contactus'><button type='button' className='btn btn-success' id='successButton'>Contact Us</button></a>
                            <br></br><br></br>
                            <a href='/discover'><button type='button' className='btn btn-primary' id='successButton'>Discover</button></a>

                            <a href='/'><button type='button' className='btn btn-primary' id='successButton'>Home</button></a>

                            <a href='/faq'><button type='button' className='btn btn-primary' id='successButton'>FAQ</button></a>
                        </div>
                    </Col>
                </Row>
                {/* <!-- ADDS FILLER/PADDING TO PAGE BELOW --> */}
                <div>
                    <br></br><br></br>
                    <br></br><br></br>
                    <br></br><br></br>
                </div>
            </Container>
        </>
    )
}

export default ContactFormFailure;