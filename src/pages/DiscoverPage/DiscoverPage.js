import { Container, Row } from 'react-bootstrap';
import BusinessTile from '../../components/BusinessTile/BusinessTile'
import { useEffect, useState } from 'react';
import FilterButton from '../../components/FilterButton/FilterButton';
import { Accordion } from 'react-bootstrap';
import ptag from '../../pTags'


function DiscoverPage(props) {

    // This will update the Businesses/Business Tiles 
    const [filterItem, setFilterItem] = useState([]);
    // This will update the Subcategory buttons
    const [filterItemSubButtons, setFilterItemSubButtons] = useState([]);
    // This will update the buttons (not really used in my case)
    const [buttons, setButtons] = useState([]);
    // This SHOULD update the <p> tags inside the Sub Category section
    const [filterPTag, setPTags] = useState([]);

    useEffect(() => {
        setFilterItem(props.businesses)
    }, [props.businesses])

    useEffect(() => {
        document.title = 'Wertigo - Discover'
    }, []);

    // This is what will filter out the Business Tiles based on which Button/Category is selected
    const filter = (button) => {

        if (button === 'Recently Added') {
            setFilterItem(props.businesses)
            setFilterItemSubButtons([])
            setPTags([])
            return;
        }

        // This will grab any Business tiles that meet the criteria (ex: filter chosen) 
        const filteredData = props.businesses.filter(item => item.category === button);
        const filteredDataTag = ptag.filter(item => item.name === button);
        setFilterItem(filteredData)
        setFilterItemSubButtons(filteredData)
        setPTags(filteredDataTag)
    }

    // This will filter out Business Tiles based on which Subcategory is selected
    const filterSubCategory = (subButton) => {
        const filteredDataSubCategory = props.businesses.filter(item => item.subcategory === subButton);
        setFilterItem(filteredDataSubCategory)
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

                <div className='filter-subcategory-area'>
                    <Accordion flush>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>
                                <h4 className='subHeader'>Filter Results by Subcategory</h4>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p>Please select a category from above to see subcategory options.</p>

                                {filterPTag.map(cat => {
                                    return (
                                        <p key={cat.name}>{cat.name}</p>
                                    )
                                })}

                                <div className='button-section'>
                                    <button type='button' className='btn btn-secondary category-button filter-button' onClick={() => filter('Recently Added')}>Reset All</button>

                                    <button className='btn btn-secondary category-button filter-button' onClick={() => filter(filterSubCategory.filteredDataSubCategory)}>None</button>

                                    {filterItemSubButtons.map(subButton => {
                                        return (
                                            <button key={subButton.subcategory} className='btn btn-secondary category-button filter-button' onClick={() => filterSubCategory(subButton.subcategory)}>{subButton.subcategory}</button>
                                        )
                                    })}

                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <hr></hr>

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