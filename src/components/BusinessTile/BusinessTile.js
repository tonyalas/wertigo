import './BusinessTile.css'
import { Link } from 'react-router-dom';
import { makeFriendlyURL } from '../../utils/urlUtils';
import { Col } from 'react-bootstrap';


function BusinessTile(props, { filterItem }) {
    // This if/else statement will vary depending on whether or not a business has a personal website or just a facebook.
    if (props.websiteURL == '') {
        if (props.etsyURL == '') {
            var websiteLink = props.facebookURL
            var websiteImagePath = '/images/facebook-logo.png'
            var websiteTypeText = 'Facebook'
        }
        else {
            websiteLink = props.etsyURL
            websiteImagePath = '/images/etsy-logo.png'
            websiteTypeText = 'Etsy'
        }
    }
    else {
        websiteLink = props.websiteURL
        websiteImagePath = '/images/website_logo.png'
        websiteTypeText = 'Website'
    }
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

            {/* <!-- * Website Link --> */}
            <div className='businessLinkPic'>
                <img src={websiteImagePath} className='linkLogos' alt='' />
                <div className='businessLinkText'>
                    <p><a href={websiteLink} target='_blank' rel='noopener noreferrer'
                        className='businessLinks'>{websiteTypeText}</a></p>
                </div>
            </div>

            <br></br>
            {/* <!-- * Instagram Section --> */}
            <div className='businessLinkPic'>
                <img src='/images/instagramlogo.png' className='linkLogos' alt='' />
                <div className='businessLinkText'>
                    <p><a href={props.instagramURL} target='_blank'
                        rel='noopener noreferrer' className='businessLinks'>@{props.instagramUsername}</a></p>
                </div>
            </div>

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
            {/* <!-- * Business Address --> */}
            <div className='businessLinkPic'>
                <img src='/images/pin-icon.png' className='linkLogos' alt='' />
                <div className='businessLinkText'>
                    <p><a href={props.googleMapsLink}
                        target='_blank' rel='noopener noreferrer' className='businessLinks'>{props.address}</a></p>
                </div>
            </div>

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