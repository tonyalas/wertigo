import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { makeFriendlyURL } from '../../utils/urlUtils';
import { Col, Container, Row } from 'react-bootstrap';
import './BusinessPage.css'

function BusinessPage(props) {

    const params = useParams();
    const business = props.businesses.find(
        (b) => makeFriendlyURL(b.name) == params.businessName
    )
    const navigate = useNavigate();
    // const [count, setCount] = useState(0);
    useEffect(() => {
        if (business == undefined) {
            navigate('/')
        }
        // Update the document title using the browser API
    }, [business, navigate]);

    useEffect(() => {
        document.title = business?.name;
    }, []);


    if (business?.websiteURL == '') {
        if (business?.etsyURL == '') {
            var websiteLink = business?.facebookURL
            var websiteImagePath = '/images/facebook-logo.png'
            var websiteTypeText = 'Facebook'
        }
        else {
            websiteLink = business?.etsyURL
            websiteImagePath = '/images/etsy-logo.png'
            websiteTypeText = 'Etsy'
        }
    }
    else {
        websiteLink = business?.websiteURL
        websiteImagePath = '/images/website_logo.png'
        websiteTypeText = 'Website'
    }

    return (
        <>
            <div className='Jumbotron'>
                <h1>{business?.name}</h1>
                <br></br>
                <img class='business_image' src={business?.picturePath} alt='' />
            </div>
            <Container>
                <Row className='justify-content-center'>
                    <Col>
                        <div className='centeredText'>
                            <div className='block-text'>
                                <p id='informationText'>{business?.description}</p>
                            </div>
                            <h1>{business?.category}</h1>
                            <h2>{business?.subcategory}</h2>
                            <br></br>
                            <h4><a href={'tel:' + business?.phoneNumber} class='phonenumber'>{business?.phoneNumber} {business?.phoneNumberDescription}</a></h4>
                            <h4><a href={'tel:' + business?.phoneNumber2} class='phonenumber'>{business?.phoneNumber2} {business?.phoneNumberDescription2}</a></h4>

                            {(business?.phoneNumber != '') &&
                                <br></br>
                            }

                            {/* <!-- * Website Link --> */}
                            <div class='businessLinkPic'>
                                <img src={websiteImagePath} class='linkLogosPage' alt='' />
                                <div class='businessLinkText'>
                                    <p id='informationTextLinks'><a href={websiteLink} target='_blank' rel='noopener noreferrer'
                                        class='businessLinks'>{websiteTypeText}</a></p>
                                </div>
                            </div>
                            <br></br>

                            {/* <!-- * Instagram Section --> */}
                            <div class='businessLinkPic'>
                                <img src='/images/instagramlogo.png' class='linkLogosPage' alt='' />
                                <div class='businessLinkText'>
                                    <p id='informationTextLinks'><a href={business?.instagramURL} target='_blank'
                                        rel='noopener noreferrer' class='businessLinks'>@{business?.instagramUsername}</a></p>
                                </div>
                            </div>

                            {/* ONLY SHOW SECOND INSTAGRAM IF THERE IS TWO */}
                            {(business?.instagramURL2 != '') &&
                                <>
                                    <br></br>
                                    <div className='businessLinkPic'>
                                        <img src='/images/instagramlogo.png' class='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p><a href={business?.instagramURL2} target='_blank' rel='noopener noreferrer' class='businessLinks'>{business?.instagramUsername2}</a></p>

                                        </div>
                                    </div>
                                </>
                            }
                            <br></br>
                            <br></br>

                            {/* <!-- * Business Address --> */}
                            <div class='businessLinkPic'>
                                <img src='/images/pin-icon.png' class='linkLogosPage' alt='' />
                                <div class='businessLinkText'>
                                    <p id='informationTextLinks'><a href={business?.googleMapsLink}
                                        target='_blank' rel='noopener noreferrer' class='businessLinks'>{business?.address}</a></p>
                                </div>
                            </div>

                            {/* Only allow if there is two addresses */}
                            {(business?.address2 != '') &&
                                <>
                                    <br></br>
                                    <div class='businessLinkPic'>
                                        <img src='/images/pin-icon.png' class='linkLogosPage' alt='' />
                                        <div class='businessLinkText'>
                                            <p><a href={business?.googleMapsLink2} target='_blank' rel='noopener noreferrer' class='businessLinks'>{business?.address2}</a></p>
                                        </div>
                                    </div>
                                </>
                            }

                            <br></br>
                            <br></br>

                            {(business?.embeddedMapsLink != '') &&
                                <div>
                                    <iframe title={business?.name}
                                        src={business?.embeddedMapsLink}
                                        width='95%' height='450' allowfullscreen='' loading='lazy'></iframe>
                                </div>
                            }

                            <br></br>

                            {/* <!-- * Hours and information --> */}
                            {(business?.hasHours != false) &&
                                <>
                                    <h1>Hours</h1>
                                    <p id='informationTextLinks'>
                                        {business?.hoursDays?.first} <b>{business?.hoursTimes?.first}</b>
                                        <br></br>
                                        {business?.hoursDays?.second} <b>{business?.hoursTimes?.second}</b>
                                        <br></br>
                                        {business?.hoursDays?.third} <b>{business?.hoursTimes?.third}</b>
                                    </p>

                                </>
                            }



                        </div>
                    </Col>
                </Row>

                <br></br>
                <a href='/discover' class='backToDiscoverLink'>
                    <p>Back to Discover Page</p>
                </a>

                {/* <!-- * ADDS FILLER/PADDING TO PAGE BELOW --> */}
                <div class='row justify-content-center'>
                    <div class='col'>
                        <div class='centeredText'>
                            <br></br>
                        </div>
                    </div>
                </div>
            </Container>

            {/* {count}
            <button onClick={() => { setCount(count + 1) }}>Click here</button> */}
        </>
    )
}

export default BusinessPage;