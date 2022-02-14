import './BusinessOfTheWeek.css';
import { Col } from 'react-bootstrap';
import businessesData from '../../businessesData';
import { Link } from 'react-router-dom';

function BusinessOfTheWeek() {
    // ! EDIT THIS NUMBER AND MATCH IT WITH THE NUMBER IN BusinessOfTheWeekPage.js
    const thisWeekBusiness = businessesData.find(x => x.id === 4)
    return (
        <>
            <h1 id='header'>Business Of The Week!</h1>
            {/* EDIT THIS DESCRIPTION */}
            <p className='center'>
                {thisWeekBusiness.name} specializes in making homemade, gourmet bbq sauce using fresh, locally sourced ingredients.<br></br>Click the button below for more information.
            </p>
            <Col className='col item'>
                <Link target='_blank' rel='noopener noreferrer' className='businessHeaderLink' to={'/businessoftheweek'}>
                    <h2>{thisWeekBusiness.name}</h2>
                </Link>
                <h3>{thisWeekBusiness.category}</h3>
                <h4>{thisWeekBusiness.subcategory}</h4>
                <img className='business_image' src={thisWeekBusiness.picturePath} alt='' />
                <br></br>
                <Link target='_blank' rel='noopener noreferrer' to='/businessoftheweek'>
                    <button type='button' className='btn btn-primary'>Learn More</button>
                </Link>
            </Col>
            <hr></hr>
        </>
    )
}

export default BusinessOfTheWeek;