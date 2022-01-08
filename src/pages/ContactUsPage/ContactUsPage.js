import { Container } from 'react-bootstrap';
import './ContactUsPage.css'

function ContactUsPage() {
    return (
        <>
            <div className='Jumbotron'>
                <h1>Contact Us</h1>
            </div>
            <Container>
                <div class='row justify-content-center'>
                    <div class='col'>
                        <div class='centeredText'>
                            <h1>Do you own a business?</h1>
                            <p>We want to have you join us! Please fill out the form below and we will act quickly to add your
                                business to Wertigo.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Section for the first form --> */}
                <div class='row justify-content-center'>
                    {/* <!-- Contact form for owners of local businesses to contact me --> */}
                    <form class='owner-contact-form' method='POST' action='/contactus' enctype='multipart/form-data'>
                        {/* <!-- Row 1 of Form 1 --> */}
                        <div class='form-group'>
                            <div class='row'>
                                <div class='col-md-4'>
                                    <input placeholder='Full Name*' id='name' name='name' type='text' class='form-control'
                                        required />
                                </div>
                                <br></br>
                                <br></br>
                                <div class='col-md-4'>
                                    <input placeholder='Email*' id='email' type='email' name='email' class='form-control'
                                        aria-describedby='emailHelp' required />
                                </div>
                                <br></br>
                                <br></br>
                                <div class='col-md-4'>
                                    <input placeholder='Business Phone Number' id='phoneNumber' type='text' name='phoneNumber'
                                        class='form-control' />
                                </div>
                            </div>
                        </div>
                        <br></br>

                        {/* <!-- * Test check --> */}
                        <div class='form-group'>
                            <div class='row'>
                                <div class='col'>
                                    <select placeholder='Share Your Information?' id='privacyCheck' name='privacyCheck' class='form-control'
                                        required>
                                        <option>Share Your Email and Phone Number? *</option>
                                        <option>Yes (Post both on Wertigo)</option>
                                        <option>Email only</option>
                                        <option>Phone Number only</option>
                                        <option>None (Do not post either publicly on Wertigo)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <br></br>

                        {/* <!-- Row 2 of Form 1 --> */}
                        <div class='form-group'>
                            <div class='row'>
                                <div class='col-md-4'>
                                    <input placeholder='Business Name*' id='businessName' name='businessName' type='text'
                                        class='form-control' required />
                                </div>
                                <br></br>
                                <br></br>
                                <div class='col-md-4'>
                                    <select placeholder='Business Category' id='category' name='businessCategory' class='form-control'
                                        required>
                                        <option>Select a Business Category *</option>
                                        <option>Restaurant</option>
                                        <option>Food (Other)</option>
                                        <option>Bar</option>
                                        <option>Health & Wellness</option>
                                        <option>Shopping</option>
                                        <option>Accessories</option>
                                        <option>Events</option>
                                        <option>Entertainment</option>
                                        <option>Automotive</option>
                                        <option>Contractors</option>
                                        <option>Other (please specify in textbox below)</option>
                                    </select>
                                </div>
                                <br></br>
                                <br></br>
                                <div class='col-md-4'>
                                    <input placeholder='Subcategories (ex: Cafe, Gifts, Nails, etc.)' id='businessSubcategory'
                                        name='businessSubcategory' type='text' class='form-control' />
                                </div>
                            </div>
                        </div>
                        <br></br>
                        {/* <!-- Row 3 of Form 1 --> */}
                        <div class='form-group'>
                            <div class='row'>
                                <div class='col-md-4'>
                                    <input placeholder='Website URL' id='websiteURL' name='websiteURL' type='text'
                                        class='form-control' />
                                </div>
                                <br></br>
                                <br></br>
                                <div class='col-md-4'>
                                    <input placeholder='Instagram Account @ Name' id='instagramName' name='instagramName'
                                        type='text' class='form-control' />
                                </div>
                                <br></br>
                                <br></br>
                                <div class='col-md-4'>
                                    <input placeholder='Other Social Media URL' id='otherURL' name='otherURL' type='text'
                                        class='form-control' />
                                </div>
                            </div>
                        </div>
                        <br></br>
                        {/* <!-- Row 4 of Form 1 --> */}
                        <div class='form-group'>
                            <div class='row'>
                                <p id='subtext'>Address is only required if you have a physical storefront.</p>
                                <div class='col-md-4'>
                                    <input placeholder='Address' id='address' name='address' type='text' class='form-control' />
                                </div>
                                <br></br>
                                <br></br>
                                <div class='col-md-4'>
                                    <input placeholder='City' id='city' name='city' type='text' class='form-control' />
                                </div>
                                <br></br>
                                <br></br>
                                <div class='col-md-4'>
                                    <input placeholder='Postal Code' id='postalCode' name='postalCode' type='text' class='form-control' />
                                </div>
                            </div>
                        </div>

                        {/* <!-- ! File Upload (for business logo) --> */}
                        <br></br>
                        <div class='form-group'>
                            <div class='row'>
                                <div class='col-md-4'>
                                    <label for='businessLogoFile' className='subtextClass'>Attach your business logo (.jpg or .png)</label>
                                    <input type='file' class='form-control' id='businessLogoFile' name='logoImage'></input>
                                </div>
                            </div>
                        </div>

                        {/* <!-- * Message section --> */}
                        <br></br>
                        <div class='form-group'>
                            <textarea placeholder='Have other information (ex: business hours) to let us know? Leave your message here.' id='message'
                                name='message' class='form-control' rows='3'></textarea>
                        </div>
                        <br></br>
                        <div class='centeredText'>
                            <button type='submit' value='submit' class='btn btn-primary submit'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <br></br>
                <hr></hr>

                {/* <!-- Start of the next part for people to recommend other places --> */}
                <div class='row justify-content-center'>
                    <div class='col'>
                        <div class='centeredText'>
                            <h1>Know someone else with a business?</h1>
                            <p>If you don't own a business yourself, fill out the form below to recommend a local business!</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Contact form for other people to nominate local businesses --> */}
                <div class='row justify-content-center'>
                    <form class='customer-contact-form' method='POST' action='/contactus' enctype='multipart/form-data'>
                        <div class='form-group'>
                            {/* <!-- Row 1 of Form 2 --> */}
                            <div class='row'>
                                <div class='col-md-6'>
                                    <input placeholder='Full Name*' id='customerName' name='customerName' type='text' class='form-control' required />
                                </div>
                                <br></br>
                                <br></br>
                                <div class='col-md-6'>
                                    <input placeholder='Email*' id='customerEmail' type='email' name='customerEmail' class='form-control'
                                        aria-describedby='emailHelp' required />
                                </div>
                            </div>
                        </div>
                        <br></br>
                        {/* <!-- Row 2 of Form 2 --> */}
                        <div class='form-group'>
                            <input placeholder='Business Name to Recommend*' id='customerbusinessName' name='customerbusinessName' type='text' class='form-control'
                                required />
                        </div>
                        <br></br>
                        {/* <!-- Row 3 of Form 2 --> */}
                        <div class='form-group'>
                            <textarea placeholder='Please leave your message and information about the business you wish to recommend here.' id='customerMessage' name='customerMessage' class='form-control' rows='3' required></textarea>
                        </div>
                        <br></br>
                        <div class='centeredText'>
                            <button type='submit' value='submit' class='btn btn-primary'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <br></br>
                <p id='subtext'>Forms above not working or have a general inquiry? You can also email us <a href='mailto:wertigosupport@gmail.com'>here</a>.</p>
                <br></br>
            </Container>
        </>
    )
}

export default ContactUsPage;