import { Container, Row } from 'react-bootstrap';
import BusinessTile from '../../components/BusinessTile/BusinessTile'
import { useEffect, useState } from 'react';
import FilterButton from '../../components/FilterButton/FilterButton';
import { Accordion } from 'react-bootstrap';
import ptag from '../../pTags'
import noneButton from '../../NoneButtons'


function DiscoverPage(props) {

    // This will update the Businesses/Business Tiles section
    const [filterItem, setFilterItem] = useState([]);
    // This will update the Subcategory buttons
    const [filterItemSubButtons, setFilterItemSubButtons] = useState([]);
    // This will update the buttons (not really used in my case)
    // eslint-disable-next-line no-unused-vars
    const [buttons, setButtons] = useState([]);
    // This SHOULD update the <p> tags inside the Sub Category section
    const [filterPTag, setPTags] = useState([]);
    // This will update and keep track of all of the NONE buttons that look the same, but change with each category
    const [filterNoneButtons, setNoneButton] = useState([]);
    // This will update and keep track of the <p> tag inside of the subcategory area so it only displays this text by default or when Recently Added is clicked
    const [defaultPTag, setDefaultPTag] = useState('Please select a category from above to see subcategory options.');

    // To fix any potential errors in the future, do not load the props inside of the useState above (line 12), but instead populate it using this hook
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
            setNoneButton([])
            setDefaultPTag('Please select a category from above to see subcategory options.')
            return;
        }

        setDefaultPTag('')
        // This will grab any Business tiles that meet the criteria (ex: filter chosen) 
        const filteredData = props.businesses.filter(item => item.category === button);
        const filteredDataTag = ptag.filter(item => item.name === button);
        const filteredDataNoneButton = noneButton.filter(item => item.name === button);
        setFilterItem(filteredData)
        setFilterItemSubButtons(filteredData)
        setPTags(filteredDataTag)
        setNoneButton(filteredDataNoneButton)
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

                {/* This component displays all of the main Category buttons */}
                <FilterButton button={buttons} filter={filter} />

                <div className='filter-subcategory-area'>
                    <Accordion flush>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>
                                <h4 className='subHeader'>Filter Results by Subcategory</h4>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className='button-section'>
                                    <p>{defaultPTag}</p>

                                    {/* This will display the name of the category that is currently chosen */}
                                    {filterPTag.map(cat => {
                                        return (
                                            <p key={cat.name}>{cat.name}</p>
                                        )
                                    })}

                                    {/* This is a static "Reset All" button that does not change regardless of the category or subcategory chosen */}
                                    <button type='button' className='btn btn-secondary category-button filter-button' onClick={() => filter('Recently Added')}>Reset All</button>

                                    {/* This will show a "None" button that will reset any subcategory filters to show all of the tiles of the same category */}
                                    {filterNoneButtons.map(cat => {
                                        return (
                                            <button key={cat.name} className='btn btn-secondary category-button filter-button' onClick={() => filter(cat.name)}>None</button>
                                        )
                                    })}

                                    {/* This will show all of the relevant subcategory buttons that are derived from the category that is currently chosen */}
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
                        {/* This will display all of the Businesses in the tile component. Uses filterItem since this is what gets updated when certain filters are applied to it */}
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