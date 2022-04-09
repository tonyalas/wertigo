import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './WhatsNewPage.css'

function WhatsNewPage() {
    useEffect(() => {
        document.title = 'Wertigo - What\'s New'
    }, []);

    return (
        <>
            <div className='Jumbotron'>
                <h1>What's New</h1>
            </div>
            <Container>
                <div className='row justify-content-center'>
                    <div className='col'>
                        <div className='centeredText'>
                            <h2>April 11, 2022</h2>
                            <h4>Business of the Week: April 11 - 18, 2022</h4>
                            <p className='whatsnewtext'>Demarco's specializes in bringing the best available fresh produce and goods to their local neighbourhood. They have just recently celebrated <b>4</b> years of being open!</p>
                            <img src='/images/demarcosfinefoods.jpeg' alt='' className='business_image' />
                            <Link target='_blank' rel='noopener noreferrer' className='businessHeaderLink' to={'/businessoftheweek'}><p className='whatsnewtext'>See the new Business of the Week here!</p></Link>
                            <br></br>
                            <hr></hr>
                            <h2>March 14, 2022</h2>
                            <h4>Business of the Week: March 14 - 21, 2022</h4>
                            <p className='whatsnewtext'>Whether you are interested in renting or purchasing art, framing your own collection, or creating a custom gift, they have everything you need to acquire that perfect piece of art.</p>
                            <img src='/images/nancyjohnsgallery.png' alt='' className='business_image' />
                            <Link target='_blank' rel='noopener noreferrer' className='businessHeaderLink' to={'/discover/NancyJohnsGallery'}><p className='whatsnewtext'>Check out Nancy Johns Gallery here!</p></Link>
                            <br></br>
                            <hr></hr>
                            <h2>February 28, 2022</h2>
                            <h4>Business of the Week: February 28 - March 7, 2022</h4>
                            <p className='whatsnewtext'>By shopping our wide selection of Eco-Friendly and Cruelty-Free products, you will significantly help reduce waste and contribute to the well-being of the planet! Help us better the Earth!</p>
                            <img src='/images/greenenvy.jpg' alt='' className='business_image' />
                            <Link target='_blank' rel='noopener noreferrer' className='businessHeaderLink' to={'/discover/GreenEnvy'}><p className='whatsnewtext'>Check out Green Envy here!</p></Link>
                            <br></br>
                            <hr></hr>
                            <h2>February 18, 2022</h2>
                            <h4>Open Now button</h4>
                            <p className='whatsnewtext'>The newest addition to the Wertigo Discover page is the "Open Now" button! Under the "Filter Results by Subcategory" section on the Discover page, you will find a new, green button labeled "Open Now".<br></br>You can either press this button with no category selected to show any business currently open, OR you can select a category first and press the button to see any businesses of that category that are currently open.<br></br>This new button looks like this:</p>
                            <img src='/images/OpenNowButton.jpg' alt='' className='openNowButton' />
                            <p className='whatsnewtext'>So now if you're craving a late night snack, looking where to go out with some friends on a Friday night or want to do a quick run to a business in the evening, you can find out what's currently open!</p>
                            <br></br>
                            <hr></hr>
                            <h2>February 14, 2022</h2>
                            <h4>Business of the Week: February 14 - 21, 2022</h4>
                            <p className='whatsnewtext'>Craving something delicious to add to your food? Look no further than Felipe's Blazin BBQ sauces! They are a brother- sister duo that make homemade, gourmet bbq sauce using fresh, locally sourced ingredients.</p>
                            <img src='/images/felipebbq.png' alt='' className='business_image' />
                            <Link target='_blank' rel='noopener noreferrer' className='businessHeaderLink' to={'/discover/FelipesBlazinBBQ'}><p className='whatsnewtext'>Check out Felipe's Blazin BBQ here!</p></Link>
                            <br></br>
                            <hr></hr>
                            <h2>February 7, 2022</h2>
                            <h4>The first Business of the Week starts today!</h4>
                            <p className='whatsnewtext'>Just in time for Valentine's Day, Flowers by Toni is the first business to be featured for the new "Business of the Week" page. The business of the week is featured on the Home page as well as its own page which can be found at the top navigation bar or by clicking the "Learn More" button on the Home page.</p>
                            <img src='/images/flowersbytoni.jpg' alt='' className='business_image' />
                            <Link target='_blank' rel='noopener noreferrer' className='businessHeaderLink' to={'/discover/FlowersbyToni'}><p className='whatsnewtext'>Check out Flowers by Toni here!</p></Link>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col'>
                        <div className='centeredText'>
                            <br></br>
                        </div>
                    </div>
                </div>
                {/* <!-- ADDS FILLER/PADDING TO PAGE BELOW --> */}
                <div className='row justify-content-center'>
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

export default WhatsNewPage;