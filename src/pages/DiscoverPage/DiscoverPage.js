import { Container, Row } from 'react-bootstrap';
import BusinessTile from '../../components/BusinessTile/BusinessTile'
import DiscoverFilterByCategory from '../../components/DiscoverFilterByCategory/DiscoverFilterByCategory';
import { useEffect, useState } from 'react';
import FilterButton from '../../components/FilterButton/FilterButton';


function DiscoverPage(props) {
    //const allCategories = ['All', ...new Set(props.businesses.map(item => item.category))];
    //const allCategories = ['All', ...props.businesses.map(item => item.category)];

    // console.log(allCategories)

    const [filterItem, setFilterItem] = useState(props.businesses);
    const [buttons, setButtons] = useState([]);

    useEffect(() => {
        document.title = 'Wertigo - Discover'
    }, []);

    const filter = (button) => {

        if (button === 'Recently Added') {
            setFilterItem(props.businesses)
            return;
        }

        const filteredData = props.businesses.filter(item => item.category === button);
        setFilterItem(filteredData)
    }

    return (
        <>
            <div className='Jumbotron'>
                <h1>Discover Local</h1>
                <h4>From existing fan-favourites to hidden gems, discover great local businesses here!</h4>
            </div>

            <Container>
                <div className='row justify-content-center'>
                    <div className='col'>
                        <div className='centeredText'>
                            <br></br>
                            <p><b>Want to add your own business? Register <a href='/contactus' target='_blank' rel='noopener noreferrer'>here</a> today!</b></p>
                        </div>
                    </div>
                </div>
                <hr></hr>

                <FilterButton button={buttons} filter={filter} />

                <DiscoverFilterByCategory />


                <div className='discoverDiv'>
                    <Row>

                        {filterItem.map(business => {
                            return (
                                <BusinessTile name={business.name} category={business.category} key={business.id} businessID={business.id} subcategory={business.subcategory} picturePath={business.picturePath} description={business.description} phoneNumber={business.phoneNumber} websiteURL={business.websiteURL} instagramURL={business.instagramURL} instagramUsername={business.instagramUsername} address={business.address} googleMapsLink={business.googleMapsLink} facebookURL={business.facebookURL} phoneNumberDescription={business.phoneNumberDescription} phoneNumber2={business.phoneNumber2} phoneNumberDescription2={business.phoneNumberDescription2} address2={business.address2} googleMapsLink2={business.googleMapsLink2} etsyURL={business.etsyURL} instagramURL2={business.instagramURL2} instagramUsername2={business.instagramUsername2} embeddedMapsLink={business.embeddedMapsLink} embeddedMapsLink2={business.embeddedMapsLink2} hasHours={business.hasHours} />
                            )
                        })}
                    </Row>

                </div>

            </Container>


        </>
    )
}

export default DiscoverPage;