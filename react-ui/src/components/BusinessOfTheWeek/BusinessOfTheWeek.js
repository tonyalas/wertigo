import './BusinessOfTheWeek.css';
import { Col } from 'react-bootstrap';
import businessesData from '../../businessesData';
import { Link } from 'react-router-dom';
import { makeFriendlyURL } from '../../utils/urlUtils';

function BusinessOfTheWeek() {
    const thisWeekBusiness = businessesData.find(x => x.id === 29)
    return (
        <>
            <h1 id='header'>Business Of The Week!</h1>
            <p className='center'>Get to know this week's Business Of The Week: {thisWeekBusiness.name}!<br></br>
                {thisWeekBusiness.name} specializes in...Click the link below to get more information about them!
            </p>
            <hr></hr>
            {/* <h2>{businessesData[5].name}</h2> */}
            {/* <h2>{thisWeekBusiness.name}</h2> */}
            {/* <Link target='_blank' rel='noopener noreferrer' className='businessHeaderLink' to={`/discover/${makeFriendlyURL(thisWeekBusiness.name)}`}>
                <h2>{thisWeekBusiness.name}</h2>
            </Link> */}
            <Col className='col item'>

                <Link target='_blank' rel='noopener noreferrer' className='businessHeaderLink' to={`/discover/${makeFriendlyURL(thisWeekBusiness.name)}`}>
                    <h2>{thisWeekBusiness.name}</h2>
                </Link>

                <h3>{thisWeekBusiness.category}</h3>
                <h4>{thisWeekBusiness.subcategory}</h4>
                <Link target='_blank' rel='noopener noreferrer' className='businessHeaderLink' to={`/discover/${makeFriendlyURL(thisWeekBusiness.name)}`}><img className='business_image' src={thisWeekBusiness.picturePath} alt='' /></Link>
                <br></br>
                {(thisWeekBusiness.phoneNumber != '') &&
                    <h5><a href={'tel:' + thisWeekBusiness.phoneNumber} className='phonenumber'>{thisWeekBusiness.phoneNumber} {thisWeekBusiness.phoneNumberDescription}</a></h5>
                }
                {(thisWeekBusiness.phoneNumber != '') &&
                    <h5><a href={'tel:' + thisWeekBusiness.phoneNumber2} className='phonenumber'>{thisWeekBusiness.phoneNumber2} {thisWeekBusiness.phoneNumberDescription2}</a></h5>
                }

                {/* <!-- * IF they have a Website Link --> */}
                {(thisWeekBusiness.websiteURL != '') &&
                    <>
                        <div className='businessLinkPic'>
                            <img src='/images/website_logo.png' className='linkLogos' alt='' />
                            <div className='businessLinkText'>
                                <p><a href={thisWeekBusiness.websiteURL} target='_blank'
                                    rel='noopener noreferrer' className='businessLinks'>Website</a></p>
                            </div>
                        </div>
                        <br></br>
                    </>
                }

                {/* <!-- * IF they have a Facebook Link --> */}
                {/* {(thisWeekBusiness.facebookURL != '') &&
                <>
                    <br></br>
                    <div className='businessLinkPic'>
                        <img src='/images/facebook-logo.png' className='linkLogos' alt='' />
                        <div className='businessLinkText'>
                            <p><a href={thisWeekBusiness.facebookURL} target='_blank'
                                rel='noopener noreferrer' className='businessLinks'>Facebook</a></p>
                        </div>
                    </div>
                </>
            } */}

                {/* <!-- * IF they have an Etsy Link --> */}
                {(thisWeekBusiness.etsyURL != '') &&
                    <>
                        <div className='businessLinkPic'>
                            <img src='/images/etsy-logo.png' className='linkLogos' alt='' />
                            <div className='businessLinkText'>
                                <p><a href={thisWeekBusiness.etsyURL} target='_blank'
                                    rel='noopener noreferrer' className='businessLinks'>Etsy</a></p>
                            </div>
                        </div>
                        <br></br>
                    </>
                }

                {/* <!-- * Instagram Section --> ONLY SHOW IF THEY HAVE AN INSTAGRAM */}
                {(thisWeekBusiness.instagramURL != '') &&
                    <>
                        <div className='businessLinkPic'>
                            <img src='/images/instagramlogo.png' className='linkLogos' alt='' />
                            <div className='businessLinkText'>
                                <p><a href={thisWeekBusiness.instagramURL} target='_blank'
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
                            <img src='/images/instagramlogo.png' className='linkLogos' alt='' />
                            <div className='businessLinkText'>
                                <p><a href={thisWeekBusiness.instagramURL2} target='_blank' rel='noopener noreferrer' className='businessLinks'>{thisWeekBusiness.instagramUsername2}</a></p>

                            </div>
                        </div>
                        <br></br>
                    </>
                }


                {/* <!-- * Business Address - IF THERE IS NO SPECIFIC ADDRESS, DO NOT ADD A <a> TAG --> */}
                {(thisWeekBusiness.address == 'Windsor, ON' || thisWeekBusiness.address == 'Lasalle, ON') &&
                    <>
                        <div className='businessLinkPic'>
                            <img src='/images/pin-icon.png' className='linkLogos' alt='' />
                            <div className='businessLinkText'>
                                <p>{thisWeekBusiness.address}</p>
                            </div>
                        </div>
                        <br></br>
                    </>
                }

                {/* <!-- * Business Address - IF THERE IS A SPECIFIC ADDRESS, KEEP THE <a> TAG --> */}
                {(thisWeekBusiness.address != 'Windsor, ON' && thisWeekBusiness.address != 'Lasalle, ON' && thisWeekBusiness.address != '') &&
                    <>
                        <div className='businessLinkPic'>
                            <img src='/images/pin-icon.png' className='linkLogos' alt='' />
                            <div className='businessLinkText'>
                                <p><a href={thisWeekBusiness.googleMapsLink}
                                    target='_blank' rel='noopener noreferrer' className='businessLinks'>{thisWeekBusiness.address}</a></p>
                            </div>
                        </div>
                        <br></br>
                    </>
                }

                {/* Only allow if there is two addresses */}
                {(thisWeekBusiness.address2 != '') &&
                    <>
                        <div className='businessLinkPic'>
                            <img src='/images/pin-icon.png' className='linkLogos' alt='' />
                            <div className='businessLinkText'>
                                <p><a href={thisWeekBusiness.googleMapsLink2} target='_blank' rel='noopener noreferrer' className='businessLinks'>{thisWeekBusiness.address2}</a></p>
                            </div>
                        </div>
                        <br></br>
                    </>
                }

            </Col>
            <hr></hr>
        </>
    )
}

export default BusinessOfTheWeek;