import './BusinessTile.css'
import { Link } from 'react-router-dom';
import { makeFriendlyURL } from '../../utils/urlUtils';
import { Col } from 'react-bootstrap';


function BusinessTile(props, { filterItem }) {
    return (

        <Col className='col-md-4 border-bottom border-2 item'>

            <Link target='_blank' rel='noopener noreferrer' className='businessHeaderLink' to={`/discover/${makeFriendlyURL(props.name)}`}>
                <h1>{props.name}</h1>
            </Link>

            <h3>{props.category}</h3>
            <h4>{props.subcategory}</h4>
            <img className='business_image' src={props.picturePath} alt='' />
            <br></br>
            <h5><a href={'tel:' + props.phoneNumber} className='phonenumber'>{props.phoneNumber} {props.phoneNumberDescription}</a></h5>
            <h5><a href={'tel:' + props.phoneNumber2} className='phonenumber'>{props.phoneNumber2} {props.phoneNumberDescription2}</a></h5>

            {/* <!-- * IF they have a Website Link --> */}
            {(props.websiteURL != '') &&
                <>
                    <div className='businessLinkPic'>
                        <img src='/images/website_logo.png' className='linkLogos' alt='' />
                        <div className='businessLinkText'>
                            <p><a href={props.websiteURL} target='_blank'
                                rel='noopener noreferrer' className='businessLinks'>Website</a></p>
                        </div>
                    </div>
                </>
            }

            {/* <!-- * IF they have a Facebook Link --> */}
            {/* {(props.facebookURL != '') &&
                <>
                    <br></br>
                    <div className='businessLinkPic'>
                        <img src='/images/facebook-logo.png' className='linkLogos' alt='' />
                        <div className='businessLinkText'>
                            <p><a href={props.facebookURL} target='_blank'
                                rel='noopener noreferrer' className='businessLinks'>Facebook</a></p>
                        </div>
                    </div>
                </>
            } */}

            {/* <!-- * IF they have an Etsy Link --> */}
            {(props.etsyURL != '') &&
                <>
                    <br></br>
                    <div className='businessLinkPic'>
                        <img src='/images/etsy-logo.png' className='linkLogos' alt='' />
                        <div className='businessLinkText'>
                            <p><a href={props.etsyURL} target='_blank'
                                rel='noopener noreferrer' className='businessLinks'>Etsy</a></p>
                        </div>
                    </div>
                </>
            }

            {/* <!-- * Instagram Section --> ONLY SHOW IF THEY HAVE AN INSTAGRAM */}
            {(props.instagramURL != '') &&
                <>
                    <br></br>
                    <div className='businessLinkPic'>
                        <img src='/images/instagramlogo.png' className='linkLogos' alt='' />
                        <div className='businessLinkText'>
                            <p><a href={props.instagramURL} target='_blank'
                                rel='noopener noreferrer' className='businessLinks'>@{props.instagramUsername}</a></p>
                        </div>
                    </div>
                </>
            }

            {/* ONLY SHOW SECOND INSTAGRAM IF THERE IS TWO */}
            {(props.instagramURL2 != '') &&
                <>
                    <br></br>
                    <div className='businessLinkPic'>
                        <img src='/images/instagramlogo.png' className='linkLogos' alt='' />
                        <div className='businessLinkText'>
                            <p><a href={props.instagramURL2} target='_blank' rel='noopener noreferrer' className='businessLinks'>{props.instagramUsername2}</a></p>

                        </div>
                    </div>
                </>
            }

            <br></br>
            {/* <!-- * Business Address - IF THERE IS NO SPECIFIC ADDRESS, DO NOT ADD A <a> TAG --> */}
            {(props.address == 'Windsor, ON' || props.address == 'Lasalle, ON') &&
                <div className='businessLinkPic'>
                    <img src='/images/pin-icon.png' className='linkLogos' alt='' />
                    <div className='businessLinkText'>
                        <p>{props.address}</p>
                    </div>
                </div>
            }

            {/* <!-- * Business Address - IF THERE IS A SPECIFIC ADDRESS, KEEP THE <a> TAG --> */}
            {(props.address != 'Windsor, ON' && props.business != 'Lasalle, ON') &&
                <div className='businessLinkPic'>
                    <img src='/images/pin-icon.png' className='linkLogos' alt='' />
                    <div className='businessLinkText'>
                        <p><a href={props.googleMapsLink}
                            target='_blank' rel='noopener noreferrer' className='businessLinks'>{props.address}</a></p>
                    </div>
                </div>
            }

            {/* Only allow if there is two addresses */}
            {(props.address2 != '') &&
                <>
                    <br></br>
                    <div className='businessLinkPic'>
                        <img src='/images/pin-icon.png' className='linkLogos' alt='' />
                        <div className='businessLinkText'>
                            <p><a href={props.googleMapsLink2} target='_blank' rel='noopener noreferrer' className='businessLinks'>{props.address2}</a></p>
                        </div>
                    </div>
                </>
            }

        </Col>

    )
}

export default BusinessTile;