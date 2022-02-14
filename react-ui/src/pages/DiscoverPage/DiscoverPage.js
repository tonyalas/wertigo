import { Container, Row } from 'react-bootstrap';
import BusinessTile from '../../components/BusinessTile/BusinessTile'
import { useEffect, useState } from 'react';
import FilterButton from '../../components/FilterButton/FilterButton';
import { Accordion } from 'react-bootstrap';
import ptag from '../../pTags';
import noneButton from '../../NoneButtons';
import './DiscoverPage.css';


function DiscoverPage(props) {

    // This will update the Businesses/Business Tiles section
    const [filterItem, setFilterItem] = useState([]);
    // This will update the Subcategory buttons
    const [filterItemSubButtons, setFilterItemSubButtons] = useState([]);
    // This will keep track of which category is chosen/clicked on (used in the filterOpenNow function)
    const [categoryChosen, setCategoryChosen] = useState('Recently Added');
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
            setCategoryChosen('Recently Added')
            setDefaultPTag('Please select a category from above to see subcategory options.')
            return;
        }

        setDefaultPTag('')
        // This will grab any Business tiles that match the selected Category (i.e.,: filter chosen) 
        const filteredData = props.businesses.filter(item => item.category === button);

        // This will update which category is chosen and keep track of it
        setCategoryChosen(button)

        // This will get the current <p> tag text content (ex: the little tag that says the same of the category above the subcategory buttons)
        const filteredDataTag = ptag.filter(item => item.name === button);
        // This will get the appropriate None button based on which category was chosen, and will reset the tiles to the parent category that was initially chosen
        const filteredDataNoneButton = noneButton.filter(item => item.name === button);
        // This will set the business tiles to show only those under the category that was selected
        setFilterItem(filteredData)
        // This will set the <p> tag
        setPTags(filteredDataTag)
        // This will set the None button that shows
        setNoneButton(filteredDataNoneButton)
        // This will create a new set (only unique values) of the Subcategories of the selected Category 
        const filterSubButtons = [...new Set(filteredData.map(item => item.subcategory))];
        // This will pass an array of unique Subcategories to the button mapping below so that it will create a new button for each UNIQUE subcategory inside of the parent category.
        setFilterItemSubButtons(filterSubButtons)
        //console.log(filterSubButtons)
    }

    // This will filter out Business Tiles based on which Subcategory is selected
    const filterSubCategory = (subButton) => {
        const filteredDataSubCategory = props.businesses.filter(item => item.subcategory === subButton);
        setFilterItem(filteredDataSubCategory)
    }


    function filterOpenNow() {
        // ! The solution here should be to add a leading 0 before HOURS if the current hour is single digit (1am to 9am, includes midnight since it is 00:00)
        // ! Then, also add a leading 0 before MINUTES if the current minute is single digit (0-9). 
        // ! This will fix the problem of the Open Now button working incorrectly when the current time is single digits.
        // ! Try to solve this by adding an if statement that concatenates a '0' when necessary and prints the regular time else
        var today = new Date()
        // IF the current hour is SINGLE DIGIT
        if (today.getHours() == '0' || today.getHours() == '1' || today.getHours() == '2' || today.getHours() == '3' || today.getHours() == '4' || today.getHours() == '5' || today.getHours() == '6' || today.getHours() == '7' || today.getHours() == '8' || today.getHours() == '9') {
            // IF the current minute is SINGLE DIGIT (AND the hour is single digit)
            if (today.getMinutes() == '0' || today.getMinutes() == '1' || today.getMinutes() == '2' || today.getMinutes() == '3' || today.getMinutes() == '4' || today.getMinutes() == '5' || today.getMinutes() == '6' || today.getMinutes() == '7' || today.getMinutes() == '8' || today.getMinutes() == '9') {
                console.log('single digit hours and minutes')
                // eslint-disable-next-line no-useless-concat
                var time = '0' + today.getHours() + ':' + '0' + today.getMinutes()
            }
            // IF only the hour is single digit but NOT the minutes as well
            else {
                console.log('single digit hours and double digit minutes')
                time = '0' + today.getHours() + ':' + today.getMinutes()
            }
        }
        // IF the current hour is DOUBLE DIGIT 
        else {
            // IF the current hour is DOUBLE DIGIT but the current minutes are SINGLE DIGIT
            if (today.getMinutes() == '0' || today.getMinutes() == '1' || today.getMinutes() == '2' || today.getMinutes() == '3' || today.getMinutes() == '4' || today.getMinutes() == '5' || today.getMinutes() == '6' || today.getMinutes() == '7' || today.getMinutes() == '8' || today.getMinutes() == '9') {
                console.log('double digit hours and single digit minutes')
                // eslint-disable-next-line no-useless-concat
                time = today.getHours() + ':' + '0' + today.getMinutes()
            }
            // IF the current hour and minutes are BOTH DOUBLE DIGITS (aka normal)
            else {
                console.log('double digit hours and minutes')
                time = today.getHours() + ':' + today.getMinutes()
            }
        }
        //var time = today.getHours() + ':' + today.getMinutes()
        var dayOfTheWeek = today.getDay()
        console.log(time)
        console.log(dayOfTheWeek)
        console.log(categoryChosen)
        var filteredDataOpenNow

        // if it is SUNDAY
        if (dayOfTheWeek == 0) {
            console.log('Today is Sunday')
            // If there is no category chosen, display any place that is currently open
            if (categoryChosen == 'Recently Added') {
                console.log('Recently Added is currently chosen')
                filteredDataOpenNow = props.businesses.filter(item => time < item.closingHours.sunday && time >= item.openingHours.sunday && item.closingHours.sunday != 'Closed')
            }
            // If there is a category chosen, only show places that are open and of the chosen category
            else {
                filteredDataOpenNow = props.businesses.filter(item => time < item.closingHours.sunday && time >= item.openingHours.sunday && item.category === categoryChosen && item.closingHours.sunday != 'Closed')
            }
            console.log(filteredDataOpenNow)
            setFilterItem(filteredDataOpenNow)
        }
        // if it is MONDAY
        if (dayOfTheWeek == 1) {
            console.log('Today is Monday')
            // If there is no category chosen, display any place that is currently open
            if (categoryChosen == 'Recently Added') {
                console.log('Recently Added is currently chosen')
                filteredDataOpenNow = props.businesses.filter(item => time < item.closingHours.monday && time >= item.openingHours.monday && item.closingHours.monday != 'Closed')
            }
            // If there is a category chosen, only show places that are open and of the chosen category
            else {
                filteredDataOpenNow = props.businesses.filter(item => time < item.closingHours.monday && time >= item.openingHours.monday && item.category === categoryChosen && item.closingHours.monday != 'Closed')
            }
            setFilterItem(filteredDataOpenNow)
        }
        // if it is TUESDAY
        if (dayOfTheWeek == 2) {
            console.log('Today is Tuesday')
            // If there is no category chosen, display any place that is currently open
            if (categoryChosen == 'Recently Added') {
                console.log('Recently Added is currently chosen')
                filteredDataOpenNow = props.businesses.filter(item => time < item.closingHours.tuesday && time >= item.openingHours.tuesday && item.closingHours.tuesday != 'Closed')
            }
            // If there is a category chosen, only show places that are open and of the chosen category
            else {
                filteredDataOpenNow = props.businesses.filter(item => time < item.closingHours.tuesday && time >= item.openingHours.tuesday && item.category === categoryChosen && item.closingHours.tuesday != 'Closed')
            }
            setFilterItem(filteredDataOpenNow)
        }
        // if it is WEDNESDAY
        if (dayOfTheWeek == 3) {
            console.log('Today is Wednesday')
            // If there is no category chosen, display any place that is currently open
            if (categoryChosen == 'Recently Added') {
                console.log('Recently Added is currently chosen')
                filteredDataOpenNow = props.businesses.filter(item => time < item.closingHours.wednesday && time >= item.openingHours.wednesday && item.closingHours.wednesday != 'Closed')
            }
            // If there is a category chosen, only show places that are open and of the chosen category
            else {
                filteredDataOpenNow = props.businesses.filter(item => time < item.closingHours.wednesday && time >= item.openingHours.wednesday && item.category === categoryChosen && item.closingHours.wednesday != 'Closed')
            }
            setFilterItem(filteredDataOpenNow)
        }
        // if it is THURSDAY
        if (dayOfTheWeek == 4) {
            // var tempTime = new Date()
            // tempTime.setHours(8, 35)
            // var fakeTime = '0' + tempTime.getHours() + ':' + tempTime.getMinutes()
            // console.log('test ' + fakeTime)

            // If there is no category chosen, display any place that is currently open
            if (categoryChosen == 'Recently Added') {
                //console.log('Recently Added is currently chosen')
                filteredDataOpenNow = props.businesses.filter(item => time < item.closingHours.thursday && time >= item.openingHours.thursday && item.closingHours.thursday != 'Closed')
            }
            // If there is a category chosen, only show places that are open and of the chosen category
            else {
                filteredDataOpenNow = props.businesses.filter(item => time < item.closingHours.thursday && time >= item.openingHours.thursday && item.category === categoryChosen && item.closingHours.thursday != 'Closed')
            }
            console.log('Today is Thursday')
            console.log(filteredDataOpenNow)
            setFilterItem(filteredDataOpenNow)
        }
        // if it is FRIDAY
        if (dayOfTheWeek == 5) {
            console.log('Today is Friday')
            // If there is no category chosen, display any place that is currently open
            if (categoryChosen == 'Recently Added') {
                //console.log('Recently Added is currently chosen')
                // ! This has the addition of the OR case where a business object has the key "openPastMidnight" which refers to the store being open late on a particular day. In this case, it checks for openPastMidnight.thursday because it would roll over from a late closing time from technically the "previous day".
                // * For example, a bar that is open on a Thursday from 2pm to 2am would technically close Friday at 2am, but re-open again at 1pm on Friday. So to avoid having weird glitches like that, the values in openPastMidnight refer to the day before. So in this example, I set openPastMidnight.thursday to 2am so that it technically rolls over from Thursday into Friday.
                filteredDataOpenNow = props.businesses.filter(item => (time < item.closingHours.friday && time >= item.openingHours.friday && item.closingHours.friday != 'Closed') || (item.openPastMidnight != undefined && time < item.openPastMidnight.thursday && item.openPastMidnight.thursday != false))
            }
            // If there is a category chosen, only show places that are open and of the chosen category
            else {
                filteredDataOpenNow = props.businesses.filter(item => time < item.closingHours.friday && time >= item.openingHours.friday && item.category === categoryChosen && item.closingHours.friday != 'Closed')
            }
            console.log(filteredDataOpenNow)
            setFilterItem(filteredDataOpenNow)
        }
        // if it is SATURDAY
        if (dayOfTheWeek == 6) {
            console.log('Today is Saturday')
            // If there is no category chosen, display any place that is currently open
            if (categoryChosen == 'Recently Added') {
                console.log('Recently Added is currently chosen')
                filteredDataOpenNow = props.businesses.filter(item => (time < item.closingHours.saturday && time >= item.openingHours.saturday && item.closingHours.saturday != 'Closed') || (item.openPastMidnight != undefined && time < item.openPastMidnight.friday))
            }
            // If there is a category chosen, only show places that are open and of the chosen category
            else {
                filteredDataOpenNow = props.businesses.filter(item => (time < item.closingHours.saturday && time >= item.openingHours.saturday && item.category === categoryChosen && item.closingHours.saturday != 'Closed') || (item.openPastMidnight != undefined && time < item.openPastMidnight.friday && item.category === categoryChosen))
            }
            console.log(filteredDataOpenNow)
            setFilterItem(filteredDataOpenNow)
        }
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
                                    <button type='button' className='btn btn-warning category-button filter-button' onClick={() => filter('Recently Added')}>Reset All</button>

                                    {/* This is a static "Open Now" button that does not change regardless of the category or subcategory chosen 
                                    <button type='button' className='btn btn-success category-button filter-button' onClick={() => filterOpenNow()}>Open Now</button> */}

                                    {/* This will show a "None" button that will reset any subcategory filters to show all of the tiles of the same category */}
                                    {filterNoneButtons.map(cat => {
                                        return (
                                            <button key={cat.name} className='btn btn-danger category-button filter-button' onClick={() => filter(cat.name)}>None</button>
                                        )
                                    })}

                                    {/* This will show all of the relevant subcategory buttons that are derived from the category that is currently chosen */}
                                    {filterItemSubButtons.map(subButton => {
                                        return (
                                            <button key={subButton} className='btn btn-secondary category-button filter-button' onClick={() => filterSubCategory(subButton)}>{subButton}</button>
                                        )
                                    })}

                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <hr></hr>
                <h6>Click on a business' name or logo to open a separate page and get more information about them!</h6>
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
                <div className='centeredText'>
                    <h3>More businesses to come!</h3>
                    <br></br>
                </div>
            </Container>


        </>
    )
}

export default DiscoverPage;