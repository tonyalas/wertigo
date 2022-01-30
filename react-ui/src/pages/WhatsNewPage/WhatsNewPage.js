import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
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
                            <br></br><br></br><br></br>
                            <h1>New features and any major changes will be posted here!<br></br>Keep an eye out in the future for updates.</h1>
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