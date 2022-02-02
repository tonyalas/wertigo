import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { makeFriendlyURL } from '../../utils/urlUtils';
import { Col, Container, Row, Table } from 'react-bootstrap';
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className='Jumbotron'>
                <h1>{business?.name}</h1>
                <br></br>
                <img className='business_image' src={business?.picturePath} alt='' />
            </div>
            <Container>
                <Row className='justify-content-center'>
                    <Col>
                        <div className='centeredText'>
                            <h1>{business?.category}</h1>
                            <h2>{business?.subcategory}</h2>
                            <div className='block-text'>
                                <p id='informationText'>{business?.description}</p>
                            </div>
                            {(business?.phoneNumber != '') &&
                                <h4><a href={'tel:' + business?.phoneNumber} className='phonenumber'>{business?.phoneNumber} {business?.phoneNumberDescription}</a></h4>
                            }
                            {(business?.phoneNumber2 != '') &&
                                <h4><a href={'tel:' + business?.phoneNumber2} className='phonenumber'>{business?.phoneNumber2} {business?.phoneNumberDescription2}</a></h4>
                            }

                            {/* If they have a public phone number, display it here */}
                            {(business?.phoneNumber != '') &&
                                <br></br>
                            }

                            {/* <!-- * IF they have a Website Link --> */}
                            {(business?.websiteURL != '') &&
                                <>
                                    <div className='businessLinkPic'>
                                        <img src='/images/website_logo.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'><a href={business?.websiteURL} target='_blank' rel='noopener noreferrer'
                                                className='businessLinks'>{business?.name} Website</a></p>
                                        </div>
                                    </div>
                                    <br></br>
                                </>
                            }

                            {/* <!-- * IF they have a Facebook Link --> */}
                            {(business?.facebookURL != '') &&
                                <>
                                    <div className='businessLinkPic'>
                                        <img src='/images/facebook-logo.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'><a href={business?.facebookURL} target='_blank' rel='noopener noreferrer'
                                                className='businessLinks'>{business?.name} Facebook</a></p>
                                        </div>
                                    </div>
                                    <br></br>
                                </>
                            }

                            {/* <!-- * IF they have an Etsy Link --> */}
                            {(business?.etsyURL != '') &&
                                <>
                                    <div className='businessLinkPic'>
                                        <img src='/images/etsy-logo.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'><a href={business?.etsyURL} target='_blank' rel='noopener noreferrer'
                                                className='businessLinks'>{business?.name} Etsy</a></p>
                                        </div>
                                    </div>
                                    <br></br>
                                </>
                            }

                            {/* <!-- * Instagram Section --> ONLY SHOW IF THEY HAVE AN INSTAGRAM */}
                            {(business?.instagramURL != '') &&
                                <>
                                    <div className='businessLinkPic'>
                                        <img src='/images/instagramlogo.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'><a href={business?.instagramURL} target='_blank'
                                                rel='noopener noreferrer' className='businessLinks'>@{business?.instagramUsername}</a></p>
                                        </div>
                                    </div>
                                    <br></br>
                                </>
                            }

                            {/* ONLY SHOW SECOND INSTAGRAM IF THERE IS TWO */}
                            {(business?.instagramURL2 != '') &&
                                <>
                                    <div className='businessLinkPic'>
                                        <img src='/images/instagramlogo.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'><a href={business?.instagramURL2} target='_blank' rel='noopener noreferrer' className='businessLinks'>@{business?.instagramUsername2}</a></p>
                                        </div>
                                    </div>
                                    <br></br>
                                </>
                            }

                            {/* IF they have a public email */}
                            {(business?.publicEmail != '') &&
                                <>
                                    <div className='businessLinkPic'>
                                        <img src='/images/email-icon.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'><a href={'mailto:' + business?.publicEmail} className='businessLinks'>Email {business?.name}</a></p>
                                        </div>
                                    </div>
                                    <br></br>
                                </>
                            }
                            <br></br>

                            {/* IF they have a description for their phone number (in other words, a location name), display it */}
                            {(business?.location1Name != '') &&
                                <h3>{business?.location1Name} Location</h3>
                            }

                            {/* <!-- * Business Address - IF THERE IS NO SPECIFIC ADDRESS, DO NOT ADD A <a> TAG --> */}
                            {(business?.address == 'Windsor, ON' || business?.address == 'Lasalle, ON') &&
                                <>
                                    <div className='businessLinkPic'>
                                        <img src='/images/pin-icon.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'>{business?.address}</p>
                                        </div>
                                    </div>
                                </>
                            }

                            {/* <!-- * Business Address - IF THERE IS A SPECIFIC ADDRESS, KEEP THE <a> TAG --> */}
                            {(business?.address != 'Windsor, ON' && business?.address != 'Lasalle, ON' && business?.address != '') &&
                                <>
                                    <div className='businessLinkPic'>
                                        <img src='/images/pin-icon.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'><a href={business?.googleMapsLink}
                                                target='_blank' rel='noopener noreferrer' className='businessLinks'>{business?.address}</a></p>
                                        </div>
                                    </div>

                                </>
                            }

                            <br></br>

                            {/* Google embedded maps link (only if they have a physical address) */}
                            {(business?.embeddedMapsLink != '') &&
                                <div>
                                    <iframe title={business?.name}
                                        src={business?.embeddedMapsLink}
                                        width='95%' height='450' allowfullscreen='' loading='lazy'></iframe>
                                </div>
                            }

                            {/* If they have a description for their SECOND phone number (in other words, a location name), display it */}
                            {(business?.location2Name != '') &&
                                <>
                                    <br></br>
                                    <h3>{business?.location2Name} Location</h3>
                                </>
                            }

                            {/* Only allow if there is two addresses */}
                            {(business?.address2 != '') &&
                                <>
                                    <div className='businessLinkPic'>
                                        <img src='/images/pin-icon.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'><a href={business?.googleMapsLink2} target='_blank' rel='noopener noreferrer' className='businessLinks'>{business?.address2}</a></p>
                                        </div>
                                    </div>
                                </>
                            }

                            <br></br>

                            {/* Google embedded maps 2 (only if they have TWO addresses) */}
                            {(business?.embeddedMapsLink2 != '') &&
                                <div>
                                    <iframe title={business?.id}
                                        src={business?.embeddedMapsLink2}
                                        width='95%' height='450' allowfullscreen='' loading='lazy'></iframe>
                                    <br></br>
                                    <br></br>
                                </div>
                            }

                            {/* <!-- * IF the business has HOURS (and extra information) --> */}
                            {(business?.hasHours == true) &&
                                <>
                                    <h1>Hours</h1>
                                    <h5>{business?.hoursMessage}</h5>
                                    {/* IF the business has only ONE LOCATION */}
                                    {(business?.hasMultipleLocations == false) &&
                                        <>
                                            {/* <p id='informationTextLinks'>
                                                {business?.hoursDays?.first} <b>{business?.hoursTimes?.first}</b>
                                                <br></br>
                                                {business?.hoursDays?.second} <b>{business?.hoursTimes?.second}</b>
                                                <br></br>
                                                {business?.hoursDays?.third} <b>{business?.hoursTimes?.third}</b>
                                                <br></br>
                                                {business?.hoursDays?.fourth} <b>{business?.hoursTimes?.fourth}</b>
                                                <br></br>
                                                {business?.hoursDays?.fifth} <b>{business?.hoursTimes?.fifth}</b>
                                            </p> */}
                                            <Table striped bordered>
                                                <tbody>
                                                    {(business?.hoursDays?.first != null) &&
                                                        <tr>
                                                            <td id='days'>{business?.hoursDays?.first}</td>
                                                            <td id='hours'><b>{business?.hoursTimes?.first}</b></td>
                                                        </tr>
                                                    }
                                                    {(business?.hoursDays?.second != null) &&
                                                        <tr>
                                                            <td id='days'>{business?.hoursDays?.second}</td>
                                                            <td id='hours'><b>{business?.hoursTimes?.second}</b></td>
                                                        </tr>
                                                    }
                                                    {(business?.hoursDays?.third != null) &&
                                                        <tr>
                                                            <td id='days'>{business?.hoursDays?.third}</td>
                                                            <td id='hours'><b>{business?.hoursTimes?.third}</b></td>
                                                        </tr>
                                                    }
                                                    {(business?.hoursDays?.fourth != null) &&
                                                        <tr>
                                                            <td id='days'>{business?.hoursDays?.fourth}</td>
                                                            <td id='hours'><b>{business?.hoursTimes?.fourth}</b></td>
                                                        </tr>
                                                    }
                                                    {(business?.hoursDays?.fifth != null) &&
                                                        <tr>
                                                            <td id='days'>{business?.hoursDays?.fifth}</td>
                                                            <td id='hours'><b>{business?.hoursTimes?.fifth}</b></td>
                                                        </tr>
                                                    }
                                                </tbody>
                                            </Table>
                                        </>
                                    }

                                    {/* IF the business has MULTIPLE LOCATIONS */}
                                    {(business?.hasMultipleLocations == true) &&
                                        <>
                                            {/* IF these 2 (or more) locations have the SAME HOURS */}
                                            {(business?.locationsHaveDifferentHours != true) &&
                                                <>
                                                    <h3>All Locations</h3>
                                                    {/* <p id='informationTextLinks'>
                                                        {business?.hoursDays?.first} <b>{business?.hoursTimes?.first}</b>
                                                        <br></br>
                                                        {business?.hoursDays?.second} <b>{business?.hoursTimes?.second}</b>
                                                        <br></br>
                                                        {business?.hoursDays?.third} <b>{business?.hoursTimes?.third}</b>
                                                        <br></br>
                                                        {business?.hoursDays?.fourth} <b>{business?.hoursTimes?.fourth}</b>
                                                        <br></br>
                                                        {business?.hoursDays?.fifth} <b>{business?.hoursTimes?.fifth}</b>
                                                    </p> */}
                                                    <Table striped bordered>
                                                        <tbody>
                                                            {(business?.hoursDays?.first != null) &&
                                                                <tr>
                                                                    <td id='days'>{business?.hoursDays?.first}</td>
                                                                    <td id='hours'><b>{business?.hoursTimes?.first}</b></td>
                                                                </tr>
                                                            }
                                                            {(business?.hoursDays?.second != null) &&
                                                                <tr>
                                                                    <td id='days'>{business?.hoursDays?.second}</td>
                                                                    <td id='hours'><b>{business?.hoursTimes?.second}</b></td>
                                                                </tr>
                                                            }
                                                            {(business?.hoursDays?.third != null) &&
                                                                <tr>
                                                                    <td id='days'>{business?.hoursDays?.third}</td>
                                                                    <td id='hours'><b>{business?.hoursTimes?.third}</b></td>
                                                                </tr>
                                                            }
                                                            {(business?.hoursDays?.fourth != null) &&
                                                                <tr>
                                                                    <td id='days'>{business?.hoursDays?.fourth}</td>
                                                                    <td id='hours'><b>{business?.hoursTimes?.fourth}</b></td>
                                                                </tr>
                                                            }
                                                            {(business?.hoursDays?.fifth != null) &&
                                                                <tr>
                                                                    <td id='days'>{business?.hoursDays?.fifth}</td>
                                                                    <td id='hours'><b>{business?.hoursTimes?.fifth}</b></td>
                                                                </tr>
                                                            }
                                                        </tbody>
                                                    </Table>
                                                </>
                                            }

                                            {/* IF BUSINESS HAS 2 LOCATIONS WITH DIFFERENT HOURS */}
                                            {(business?.locationsHaveDifferentHours == true) &&
                                                <>
                                                    {/* DISPLAY FIRST LOCATION'S HOURS HERE */}
                                                    <h3>{business?.phoneNumberDescription} Location</h3>
                                                    {/* <p id='informationTextLinks'>
                                                        {business?.hoursDays?.first} <b>{business?.hoursTimes?.first}</b>
                                                        <br></br>
                                                        {business?.hoursDays?.second} <b>{business?.hoursTimes?.second}</b>
                                                        <br></br>
                                                        {business?.hoursDays?.third} <b>{business?.hoursTimes?.third}</b>
                                                        <br></br>
                                                        {business?.hoursDays?.fourth} <b>{business?.hoursTimes?.fourth}</b>
                                                        <br></br>
                                                        {business?.hoursDays?.fifth} <b>{business?.hoursTimes?.fifth}</b>
                                                    </p> */}
                                                    <Table striped bordered>
                                                        <tbody>
                                                            {(business?.hoursDays?.first != null) &&
                                                                <tr>
                                                                    <td id='days'>{business?.hoursDays?.first}</td>
                                                                    <td id='hours'><b>{business?.hoursTimes?.first}</b></td>
                                                                </tr>
                                                            }
                                                            {(business?.hoursDays?.second != null) &&
                                                                <tr>
                                                                    <td id='days'>{business?.hoursDays?.second}</td>
                                                                    <td id='hours'><b>{business?.hoursTimes?.second}</b></td>
                                                                </tr>
                                                            }
                                                            {(business?.hoursDays?.third != null) &&
                                                                <tr>
                                                                    <td id='days'>{business?.hoursDays?.third}</td>
                                                                    <td id='hours'><b>{business?.hoursTimes?.third}</b></td>
                                                                </tr>
                                                            }
                                                            {(business?.hoursDays?.fourth != null) &&
                                                                <tr>
                                                                    <td id='days'>{business?.hoursDays?.fourth}</td>
                                                                    <td id='hours'><b>{business?.hoursTimes?.fourth}</b></td>
                                                                </tr>
                                                            }
                                                            {(business?.hoursDays?.fifth != null) &&
                                                                <tr>
                                                                    <td id='days'>{business?.hoursDays?.fifth}</td>
                                                                    <td id='hours'><b>{business?.hoursTimes?.fifth}</b></td>
                                                                </tr>
                                                            }
                                                        </tbody>
                                                    </Table>

                                                    {/* DISPLAY SECOND LOCATION'S HOURS HERE */}
                                                    <h3>{business?.phoneNumberDescription2} Location</h3>
                                                    {/* <p id='informationTextLinks'>
                                                        {business?.hoursDaysLocation2?.first} <b>{business?.hoursTimesLocation2?.first}</b>
                                                        <br></br>
                                                        {business?.hoursDaysLocation2?.second} <b>{business?.hoursTimesLocation2?.second}</b>
                                                        <br></br>
                                                        {business?.hoursDaysLocation2?.third} <b>{business?.hoursTimesLocation2?.third}</b>
                                                        <br></br>
                                                        {business?.hoursDaysLocation2?.fourth} <b>{business?.hoursTimesLocation2?.fourth}</b>
                                                        <br></br>
                                                        {business?.hoursDaysLocation2?.fifth} <b>{business?.hoursTimesLocation2?.fifth}</b>
                                                    </p> */}
                                                    <Table striped bordered>
                                                        <tbody>
                                                            {(business?.hoursDaysLocation2?.first != null) &&
                                                                <tr>
                                                                    <td id='days'>{business?.hoursDaysLocation2?.first}</td>
                                                                    <td id='hours'><b>{business?.hoursTimesLocation2?.first}</b></td>
                                                                </tr>
                                                            }
                                                            {(business?.hoursDaysLocation2?.second != null) &&
                                                                <tr>
                                                                    <td id='days'>{business?.hoursDaysLocation2?.second}</td>
                                                                    <td id='hours'><b>{business?.hoursTimesLocation2?.second}</b></td>
                                                                </tr>
                                                            }
                                                            {(business?.hoursDaysLocation2?.third != null) &&
                                                                <tr>
                                                                    <td id='days'>{business?.hoursDaysLocation2?.third}</td>
                                                                    <td id='hours'><b>{business?.hoursTimesLocation2?.third}</b></td>
                                                                </tr>
                                                            }
                                                            {(business?.hoursDaysLocation2?.fourth != null) &&
                                                                <tr>
                                                                    <td id='days'>{business?.hoursDaysLocation2?.fourth}</td>
                                                                    <td id='hours'><b>{business?.hoursTimesLocation2?.fourth}</b></td>
                                                                </tr>
                                                            }
                                                            {(business?.hoursDaysLocation2?.fifth != null) &&
                                                                <tr>
                                                                    <td id='days'>{business?.hoursDaysLocation2?.fifth}</td>
                                                                    <td id='hours'><b>{business?.hoursTimesLocation2?.fifth}</b></td>
                                                                </tr>
                                                            }
                                                        </tbody>
                                                    </Table>
                                                </>
                                            }
                                        </>
                                    }
                                </>
                            }
                        </div>
                    </Col>
                </Row>

                <br></br>
                <a href='/discover' className='backToDiscoverLink'>
                    <p>{'\u2190'} Back to Discover Page</p>
                </a>

                {/* <!-- * ADDS FILLER/PADDING TO PAGE BELOW --> */}
                <div className='row justify-content-center' id='filler-area'>
                    <div className='col'>
                        <div className='centeredText'>
                            <br></br>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default BusinessPage;