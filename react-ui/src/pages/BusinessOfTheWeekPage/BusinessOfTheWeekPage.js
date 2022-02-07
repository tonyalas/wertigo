import { useEffect } from 'react';
import { Container, Row, Col, Table, Carousel } from 'react-bootstrap';
import businessesData from '../../businessesData';
import './BusinessOfTheWeekPage.css'

function BusinessOfTheWeekPage() {

    // ! EDIT THIS NUMBER AND MATCH IT WITH THE NUMBER IN BusinessOfTheWeek.js
    const thisWeekBusiness = businessesData.find(x => x.id === 35)

    useEffect(() => {
        document.title = 'Wertigo - Business of the Week'
    }, []);

    return (
        <>
            <div className='Jumbotron'>
                <h1>Business of the Week</h1>
                {/* EDIT THIS TO UPDATE THE WEEK BELOW */}
                <h4>The featured business of the week for February 7 - February 14, 2022 is:</h4>
                <h2 id='businessNameLarge'>{thisWeekBusiness.name}</h2>
                <br></br>
                {/* UPDATE THESE PICTURES */}
                <Carousel controls={false} indicators={false}>
                    <Carousel.Item interval={2500}>
                        <img className='sliding-image' src={thisWeekBusiness.picturePath} alt='' />
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <img className='sliding-image' src='/images/businessoftheweek/flowersbytoni2.jpg' alt='' />
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <img className='sliding-image' src='/images/businessoftheweek/flowersbytoni3.jpg' alt='' />
                    </Carousel.Item>
                </Carousel>
            </div>

            <Container>
                <Row className='justify-content-center'>
                    <Col>
                        <div className='centeredText'>
                            <h1>{thisWeekBusiness.category}</h1>
                            <h2>{thisWeekBusiness.subcategory}</h2>
                            <div className='block-text'>
                                <p id='informationText'>{thisWeekBusiness.description} Order your beautiful flower arrangement just in time for Valentine's Day! <br></br>Email, call, or message on Facebook to place your order today!<br></br><b>$65 for a dozen roses.</b><br></br>Please contact for other prices.</p>
                            </div>
                            {(thisWeekBusiness.phoneNumber != '') &&
                                <h4><a href={'tel:' + thisWeekBusiness.phoneNumber} className='phonenumber'>{thisWeekBusiness.phoneNumber} {thisWeekBusiness.phoneNumberDescription}</a></h4>
                            }
                            {(thisWeekBusiness.phoneNumber2 != '') &&
                                <h4><a href={'tel:' + thisWeekBusiness.phoneNumber2} className='phonenumber'>{thisWeekBusiness.phoneNumber2} {thisWeekBusiness.phoneNumberDescription2}</a></h4>
                            }

                            {/* If they have a public phone number, display it here */}
                            {(thisWeekBusiness.phoneNumber != '') &&
                                <br></br>
                            }

                            {/* <!-- * IF they have a Website Link --> */}
                            {(thisWeekBusiness.websiteURL != '') &&
                                <>
                                    <div className='businessLinkPic'>
                                        <img src='/images/website_logo.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'><a href={thisWeekBusiness.websiteURL} target='_blank' rel='noopener noreferrer'
                                                className='businessLinks'>{thisWeekBusiness.name} Website</a></p>
                                        </div>
                                    </div>
                                    <br></br>
                                </>
                            }

                            {/* <!-- * IF they have a Facebook Link --> */}
                            {(thisWeekBusiness.facebookURL != '') &&
                                <>
                                    <div className='businessLinkPic'>
                                        <img src='/images/facebook-logo.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'><a href={thisWeekBusiness.facebookURL} target='_blank' rel='noopener noreferrer'
                                                className='businessLinks'>{thisWeekBusiness.name} Facebook</a></p>
                                        </div>
                                    </div>
                                    <br></br>
                                </>
                            }

                            {/* <!-- * IF they have an Etsy Link --> */}
                            {(thisWeekBusiness.etsyURL != '') &&
                                <>
                                    <div className='businessLinkPic'>
                                        <img src='/images/etsy-logo.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'><a href={thisWeekBusiness.etsyURL} target='_blank' rel='noopener noreferrer'
                                                className='businessLinks'>{thisWeekBusiness.name} Etsy</a></p>
                                        </div>
                                    </div>
                                    <br></br>
                                </>
                            }

                            {/* <!-- * Instagram Section --> ONLY SHOW IF THEY HAVE AN INSTAGRAM */}
                            {(thisWeekBusiness.instagramURL != '') &&
                                <>
                                    <div className='businessLinkPic'>
                                        <img src='/images/instagramlogo.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'><a href={thisWeekBusiness.instagramURL} target='_blank'
                                                rel='noopener noreferrer' className='businessLinks'>@{thisWeekBusiness.instagramUsername}</a></p>
                                        </div>
                                    </div>
                                    <br></br>
                                </>
                            }

                            {/* ONLY SHOW SECOND INSTAGRAM IF THERE IS TWO */}
                            {(thisWeekBusiness.instagramURL2 != '') &&
                                <>
                                    <div className='businessLinkPic'>
                                        <img src='/images/instagramlogo.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'><a href={thisWeekBusiness.instagramURL2} target='_blank' rel='noopener noreferrer' className='businessLinks'>@{thisWeekBusiness.instagramUsername2}</a></p>
                                        </div>
                                    </div>
                                    <br></br>
                                </>
                            }

                            {/* IF they have a public email */}
                            {(thisWeekBusiness.publicEmail != '') &&
                                <>
                                    <div className='businessLinkPic'>
                                        <img src='/images/email-icon.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'><a href={'mailto:' + thisWeekBusiness.publicEmail} className='businessLinks'>Email {thisWeekBusiness.name}</a></p>
                                        </div>
                                    </div>
                                    <br></br>
                                </>
                            }
                            <br></br>

                            {/* IF they have a description for their phone number (in other words, a location name), display it */}
                            {(thisWeekBusiness.location1Name != '') &&
                                <h3>{thisWeekBusiness.location1Name} Location</h3>
                            }

                            {/* <!-- * Business Address - IF THERE IS NO SPECIFIC ADDRESS, DO NOT ADD A <a> TAG --> */}
                            {(thisWeekBusiness.address == 'Windsor, ON' || thisWeekBusiness.address == 'Lasalle, ON') &&
                                <>
                                    <div className='businessLinkPic'>
                                        <img src='/images/pin-icon.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'>{thisWeekBusiness.address}</p>
                                        </div>
                                    </div>
                                </>
                            }

                            {/* <!-- * Business Address - IF THERE IS A SPECIFIC ADDRESS, KEEP THE <a> TAG --> */}
                            {(thisWeekBusiness.address != 'Windsor, ON' && thisWeekBusiness.address != 'Lasalle, ON' && thisWeekBusiness.address != '') &&
                                <>
                                    <div className='businessLinkPic'>
                                        <img src='/images/pin-icon.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'><a href={thisWeekBusiness.googleMapsLink}
                                                target='_blank' rel='noopener noreferrer' className='businessLinks'>{thisWeekBusiness.address}</a></p>
                                        </div>
                                    </div>

                                </>
                            }

                            <br></br>

                            {/* Google embedded maps link (only if they have a physical address) */}
                            {(thisWeekBusiness.embeddedMapsLink != '') &&
                                <div>
                                    <iframe title={thisWeekBusiness.name}
                                        src={thisWeekBusiness.embeddedMapsLink}
                                        width='95%' height='450' allowfullscreen='' loading='lazy'></iframe>
                                </div>
                            }

                            {/* If they have a description for their SECOND phone number (in other words, a location name), display it */}
                            {(thisWeekBusiness.location2Name != '') &&
                                <>
                                    <br></br>
                                    <h3>{thisWeekBusiness.location2Name} Location</h3>
                                </>
                            }

                            {/* Only allow if there is two addresses */}
                            {(thisWeekBusiness.address2 != '') &&
                                <>
                                    <div className='businessLinkPic'>
                                        <img src='/images/pin-icon.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'><a href={thisWeekBusiness.googleMapsLink2} target='_blank' rel='noopener noreferrer' className='businessLinks'>{thisWeekBusiness.address2}</a></p>
                                        </div>
                                    </div>
                                </>
                            }

                            <br></br>

                            {/* Google embedded maps 2 (only if they have TWO addresses) */}
                            {(thisWeekBusiness.embeddedMapsLink2 != '') &&
                                <div>
                                    <iframe title={thisWeekBusiness.id}
                                        src={thisWeekBusiness.embeddedMapsLink2}
                                        width='95%' height='450' allowfullscreen='' loading='lazy'></iframe>
                                    <br></br>
                                    <br></br>
                                </div>
                            }

                            {/* <!-- * IF the business has HOURS (and extra information) --> */}
                            {(thisWeekBusiness.hasHours == true) &&
                                <>
                                    <h1>Hours</h1>
                                    <h5>{thisWeekBusiness.hoursMessage}</h5>
                                    {/* IF the business has only ONE LOCATION */}
                                    {(thisWeekBusiness.hasMultipleLocations == false) &&
                                        <>
                                            <Table striped bordered>
                                                <tbody>
                                                    {(thisWeekBusiness.hoursDays?.first != null) &&
                                                        <tr>
                                                            <td id='days'>{thisWeekBusiness.hoursDays?.first}</td>
                                                            <td id='hours'><b>{thisWeekBusiness.hoursTimes?.first}</b></td>
                                                        </tr>
                                                    }
                                                    {(thisWeekBusiness.hoursDays?.second != null) &&
                                                        <tr>
                                                            <td id='days'>{thisWeekBusiness.hoursDays?.second}</td>
                                                            <td id='hours'><b>{thisWeekBusiness.hoursTimes?.second}</b></td>
                                                        </tr>
                                                    }
                                                    {(thisWeekBusiness.hoursDays?.third != null) &&
                                                        <tr>
                                                            <td id='days'>{thisWeekBusiness.hoursDays?.third}</td>
                                                            <td id='hours'><b>{thisWeekBusiness.hoursTimes?.third}</b></td>
                                                        </tr>
                                                    }
                                                    {(thisWeekBusiness.hoursDays?.fourth != null) &&
                                                        <tr>
                                                            <td id='days'>{thisWeekBusiness.hoursDays?.fourth}</td>
                                                            <td id='hours'><b>{thisWeekBusiness.hoursTimes?.fourth}</b></td>
                                                        </tr>
                                                    }
                                                    {(thisWeekBusiness.hoursDays?.fifth != null) &&
                                                        <tr>
                                                            <td id='days'>{thisWeekBusiness.hoursDays?.fifth}</td>
                                                            <td id='hours'><b>{thisWeekBusiness.hoursTimes?.fifth}</b></td>
                                                        </tr>
                                                    }
                                                </tbody>
                                            </Table>
                                        </>
                                    }

                                    {/* IF the business has MULTIPLE LOCATIONS */}
                                    {(thisWeekBusiness.hasMultipleLocations == true) &&
                                        <>
                                            {/* IF these 2 (or more) locations have the SAME HOURS */}
                                            {(thisWeekBusiness.locationsHaveDifferentHours != true) &&
                                                <>
                                                    <h3>All Locations</h3>
                                                    <Table striped bordered>
                                                        <tbody>
                                                            {(thisWeekBusiness.hoursDays?.first != null) &&
                                                                <tr>
                                                                    <td id='days'>{thisWeekBusiness.hoursDays?.first}</td>
                                                                    <td id='hours'><b>{thisWeekBusiness.hoursTimes?.first}</b></td>
                                                                </tr>
                                                            }
                                                            {(thisWeekBusiness.hoursDays?.second != null) &&
                                                                <tr>
                                                                    <td id='days'>{thisWeekBusiness.hoursDays?.second}</td>
                                                                    <td id='hours'><b>{thisWeekBusiness.hoursTimes?.second}</b></td>
                                                                </tr>
                                                            }
                                                            {(thisWeekBusiness.hoursDays?.third != null) &&
                                                                <tr>
                                                                    <td id='days'>{thisWeekBusiness.hoursDays?.third}</td>
                                                                    <td id='hours'><b>{thisWeekBusiness.hoursTimes?.third}</b></td>
                                                                </tr>
                                                            }
                                                            {(thisWeekBusiness.hoursDays?.fourth != null) &&
                                                                <tr>
                                                                    <td id='days'>{thisWeekBusiness.hoursDays?.fourth}</td>
                                                                    <td id='hours'><b>{thisWeekBusiness.hoursTimes?.fourth}</b></td>
                                                                </tr>
                                                            }
                                                            {(thisWeekBusiness.hoursDays?.fifth != null) &&
                                                                <tr>
                                                                    <td id='days'>{thisWeekBusiness.hoursDays?.fifth}</td>
                                                                    <td id='hours'><b>{thisWeekBusiness.hoursTimes?.fifth}</b></td>
                                                                </tr>
                                                            }
                                                        </tbody>
                                                    </Table>
                                                </>
                                            }

                                            {/* IF BUSINESS HAS 2 LOCATIONS WITH DIFFERENT HOURS */}
                                            {(thisWeekBusiness.locationsHaveDifferentHours == true) &&
                                                <>
                                                    {/* DISPLAY FIRST LOCATION'S HOURS HERE */}
                                                    <h3>{thisWeekBusiness.phoneNumberDescription} Location</h3>
                                                    <Table striped bordered>
                                                        <tbody>
                                                            {(thisWeekBusiness.hoursDays?.first != null) &&
                                                                <tr>
                                                                    <td id='days'>{thisWeekBusiness.hoursDays?.first}</td>
                                                                    <td id='hours'><b>{thisWeekBusiness.hoursTimes?.first}</b></td>
                                                                </tr>
                                                            }
                                                            {(thisWeekBusiness.hoursDays?.second != null) &&
                                                                <tr>
                                                                    <td id='days'>{thisWeekBusiness.hoursDays?.second}</td>
                                                                    <td id='hours'><b>{thisWeekBusiness.hoursTimes?.second}</b></td>
                                                                </tr>
                                                            }
                                                            {(thisWeekBusiness.hoursDays?.third != null) &&
                                                                <tr>
                                                                    <td id='days'>{thisWeekBusiness.hoursDays?.third}</td>
                                                                    <td id='hours'><b>{thisWeekBusiness.hoursTimes?.third}</b></td>
                                                                </tr>
                                                            }
                                                            {(thisWeekBusiness.hoursDays?.fourth != null) &&
                                                                <tr>
                                                                    <td id='days'>{thisWeekBusiness.hoursDays?.fourth}</td>
                                                                    <td id='hours'><b>{thisWeekBusiness.hoursTimes?.fourth}</b></td>
                                                                </tr>
                                                            }
                                                            {(thisWeekBusiness.hoursDays?.fifth != null) &&
                                                                <tr>
                                                                    <td id='days'>{thisWeekBusiness.hoursDays?.fifth}</td>
                                                                    <td id='hours'><b>{thisWeekBusiness.hoursTimes?.fifth}</b></td>
                                                                </tr>
                                                            }
                                                        </tbody>
                                                    </Table>

                                                    {/* DISPLAY SECOND LOCATION'S HOURS HERE */}
                                                    <h3>{thisWeekBusiness.phoneNumberDescription2} Location</h3>
                                                    <Table striped bordered>
                                                        <tbody>
                                                            {(thisWeekBusiness.hoursDaysLocation2?.first != null) &&
                                                                <tr>
                                                                    <td id='days'>{thisWeekBusiness.hoursDaysLocation2?.first}</td>
                                                                    <td id='hours'><b>{thisWeekBusiness.hoursTimesLocation2?.first}</b></td>
                                                                </tr>
                                                            }
                                                            {(thisWeekBusiness.hoursDaysLocation2?.second != null) &&
                                                                <tr>
                                                                    <td id='days'>{thisWeekBusiness.hoursDaysLocation2?.second}</td>
                                                                    <td id='hours'><b>{thisWeekBusiness.hoursTimesLocation2?.second}</b></td>
                                                                </tr>
                                                            }
                                                            {(thisWeekBusiness.hoursDaysLocation2?.third != null) &&
                                                                <tr>
                                                                    <td id='days'>{thisWeekBusiness.hoursDaysLocation2?.third}</td>
                                                                    <td id='hours'><b>{thisWeekBusiness.hoursTimesLocation2?.third}</b></td>
                                                                </tr>
                                                            }
                                                            {(thisWeekBusiness.hoursDaysLocation2?.fourth != null) &&
                                                                <tr>
                                                                    <td id='days'>{thisWeekBusiness.hoursDaysLocation2?.fourth}</td>
                                                                    <td id='hours'><b>{thisWeekBusiness.hoursTimesLocation2?.fourth}</b></td>
                                                                </tr>
                                                            }
                                                            {(thisWeekBusiness.hoursDaysLocation2?.fifth != null) &&
                                                                <tr>
                                                                    <td id='days'>{thisWeekBusiness.hoursDaysLocation2?.fifth}</td>
                                                                    <td id='hours'><b>{thisWeekBusiness.hoursTimesLocation2?.fifth}</b></td>
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

export default BusinessOfTheWeekPage;