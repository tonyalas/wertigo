import './BusinessOfTheWeek.css';
import { Col } from 'react-bootstrap';
import businessesData from '../../businessesData';
import { Link } from 'react-router-dom';

function BusinessOfTheWeek() {
    // ! EDIT THIS NUMBER AND MATCH IT WITH THE NUMBER IN BusinessOfTheWeekPage.js
    const thisWeekBusiness = businessesData.find(x => x.id === 23)
    return (
        <>
            <h1 id='header'>Business Of The Month!</h1>
            {/* EDIT THIS DESCRIPTION */}
            <p className='center'>
                {thisWeekBusiness.name} is an all-local shop that makes beautiful <b>custom-made</b> furniture tailor made to your home. <br></br>Small or large, they can meet all your home wood-working needs!
            </p>
            <Col className='col item'>
                <Link target='_blank' rel='noopener noreferrer' className='businessHeaderLink' to={'/businessofthemonth'}>
                    <h2>{thisWeekBusiness.name}</h2>
                </Link>
                <h3>{thisWeekBusiness.category}</h3>
                <h4>{thisWeekBusiness.subcategory}</h4>
                <img className='business_image' src={thisWeekBusiness.picturePath} alt='' />
                <br></br>
                <Link target='_blank' rel='noopener noreferrer' to='/businessofthemonth'>
                    <button type='button' className='btn btn-primary'>Learn More</button>
                </Link>
            </Col>
            <hr></hr>
        </>
    )
}

export default BusinessOfTheWeek;