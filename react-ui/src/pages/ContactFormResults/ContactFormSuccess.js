import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ContactFormResults.css'

function ContactFormSuccess() {
    useEffect(() => {
        document.title = 'Contact Form Successfully Sent!';
    }, []);

    return (
        <>
            <div className='Jumbotron'>
                <h1>Thank You!</h1>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div className='centeredText'>
                            <h1>Your contact form has been successfully submitted!</h1>
                            <div className='block-text'>
                                <p>
                                    Thank you for your interest in Wertigo. We will get back to you as soon as possible!
                                    <br></br><br></br>
                                    In the meantime, click the buttons below to Discover other local businesses or go to the other pages:
                                </p>
                            </div>
                            <a href='/discover'><button type='button' className='btn btn-success' id='successButton'>Discover</button></a>
                            <br></br><br></br>
                            <a href='/'><button type='button' className='btn btn-primary' id='successButton'>Home</button></a>

                            <a href='/contactus'><button type='button' className='btn btn-primary' id='successButton'>Contact Us</button></a>

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

export default ContactFormSuccess;