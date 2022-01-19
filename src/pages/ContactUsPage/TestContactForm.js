import { Container } from 'react-bootstrap';
import './ContactUsPage.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function TestContactForm() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [privacyCheck, setPrivacyCheck] = useState();
    const [businessName, setBusinessName] = useState();
    const [businessCategory, setBusinessCategory] = useState();
    const [businessSubcategory, setBusinessSubcategory] = useState();
    const [websiteURL, setWebsiteURL] = useState();
    const [instagramName, setInstagramName] = useState();
    const [otherURL, setOtherURL] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [postalCode, setPostalCode] = useState();
    const [message, setMessage] = useState();
    const [file, setFile] = useState();

    useEffect(() => {
        document.title = 'Wertigo - TEST CONTACT'
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', name);
        data.append('email', email);
        data.append('phoneNumber', phoneNumber);
        data.append('privacyCheck', privacyCheck);
        data.append('businessName', businessName);
        data.append('businessCategory', businessCategory);
        data.append('businessSubcategory', businessSubcategory);
        data.append('websiteURL', websiteURL);
        data.append('instagramName', instagramName);
        data.append('otherURL', otherURL);
        data.append('address', address);
        data.append('city', city);
        data.append('postalCode', postalCode);
        data.append('message', message);
        data.append('file', file);

        fetch('/', {
            method: 'POST',
            body: data
        })
    }

    const send = event => {
        const data = new FormData();
        data.append('name', name);
        data.append('email', email);
        data.append('phoneNumber', phoneNumber);
        data.append('privacyCheck', privacyCheck);
        data.append('businessName', businessName);
        data.append('businessCategory', businessCategory);
        data.append('businessSubcategory', businessSubcategory);
        data.append('websiteURL', websiteURL);
        data.append('instagramName', instagramName);
        data.append('otherURL', otherURL);
        data.append('address', address);
        data.append('city', city);
        data.append('postalCode', postalCode);
        data.append('message', message);
        data.append('file', file);


        // Axios.post('/contact', data)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err));
        console.log(data);
    };

    return (
        <>
            <div className='Jumbotron'>
                <h1>Contact Us</h1>
            </div>
            <Container>
                <div className='row justify-content-center'>
                    <div className='col'>
                        <div className='centeredText'>
                            <h1>Do you own a business?</h1>
                            <p>We want to have you join us! Please fill out the form below and we will act quickly to add your
                                business to Wertigo.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Section for the first form --> */}
                <div className='row justify-content-center'>
                    {/* <!-- Contact form for owners of local businesses to contact me --> */}
                    <form className='owner-contact-form' onSubmit={handleSubmit}>
                        {/* <!-- Row 1 of Form 1 --> */}
                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <input placeholder='Full Name*' id='name' name='name' type='text' className='form-control'
                                        required
                                        onChange={event => {
                                            const { value } = event.target;
                                            setName(value);
                                        }}
                                    />
                                </div>
                                <br></br>
                                <br></br>
                                <div className='col-md-4'>
                                    <input placeholder='Email*' id='email' type='email' name='email' className='form-control'
                                        aria-describedby='emailHelp' required
                                        onChange={event => {
                                            const { value } = event.target;
                                            setEmail(value);
                                        }}
                                    />
                                </div>
                                <br></br>
                                <br></br>
                                <div className='col-md-4'>
                                    <input placeholder='Business Phone Number' id='phoneNumber' type='text' name='phoneNumber'
                                        className='form-control'
                                        onChange={event => {
                                            const { value } = event.target;
                                            setPhoneNumber(value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <br></br>

                        {/* <!-- * Test check --> */}
                        <div className='form-group'>
                            <div className='row'>
                                <div className='col'>
                                    <select placeholder='Share Your Information?' id='privacyCheck' name='privacyCheck' className='form-control'
                                        required
                                        onChange={event => {
                                            const { value } = event.target;
                                            setPrivacyCheck(value);
                                        }}>
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
                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <input placeholder='Business Name*' id='businessName' name='businessName' type='text'
                                        className='form-control' required
                                        onChange={event => {
                                            const { value } = event.target;
                                            setBusinessName(value);
                                        }}
                                    />
                                </div>
                                <br></br>
                                <br></br>
                                <div className='col-md-4'>
                                    <select placeholder='Business Category' id='category' name='businessCategory' className='form-control'
                                        required
                                        onChange={event => {
                                            const { value } = event.target;
                                            setBusinessCategory(value);
                                        }}>
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
                                <div className='col-md-4'>
                                    <input placeholder='Subcategories (ex: Cafe, Gifts, Nails, etc.)' id='businessSubcategory'
                                        name='businessSubcategory' type='text' className='form-control'
                                        onChange={event => {
                                            const { value } = event.target;
                                            setBusinessSubcategory(value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <br></br>
                        {/* <!-- Row 3 of Form 1 --> */}
                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <input placeholder='Website URL' id='websiteURL' name='websiteURL' type='text'
                                        className='form-control'
                                        onChange={event => {
                                            const { value } = event.target;
                                            setWebsiteURL(value);
                                        }}
                                    />
                                </div>
                                <br></br>
                                <br></br>
                                <div className='col-md-4'>
                                    <input placeholder='Instagram Account @ Name' id='instagramName' name='instagramName'
                                        type='text' className='form-control'
                                        onChange={event => {
                                            const { value } = event.target;
                                            setInstagramName(value);
                                        }}
                                    />
                                </div>
                                <br></br>
                                <br></br>
                                <div className='col-md-4'>
                                    <input placeholder='Other Social Media URL' id='otherURL' name='otherURL' type='text'
                                        className='form-control'
                                        onChange={event => {
                                            const { value } = event.target;
                                            setOtherURL(value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <br></br>
                        {/* <!-- Row 4 of Form 1 --> */}
                        <div className='form-group'>
                            <div className='row'>
                                <p>Address is only required if you have a physical storefront.</p>
                                <div className='col-md-4'>
                                    <input placeholder='Address' id='address' name='address' type='text' className='form-control'
                                        onChange={event => {
                                            const { value } = event.target;
                                            setAddress(value);
                                        }}
                                    />
                                </div>
                                <br></br>
                                <br></br>
                                <div className='col-md-4'>
                                    <input placeholder='City' id='city' name='city' type='text' className='form-control'
                                        onChange={event => {
                                            const { value } = event.target;
                                            setCity(value);
                                        }}
                                    />
                                </div>
                                <br></br>
                                <br></br>
                                <div className='col-md-4'>
                                    <input placeholder='Postal Code' id='postalCode' name='postalCode' type='text' className='form-control'
                                        onChange={event => {
                                            const { value } = event.target;
                                            setPostalCode(value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* <!-- ! File Upload (for business logo) --> */}
                        <br></br>
                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <label htmlFor='businessLogoFile' className='subtextClass'>Attach your business logo (.jpg or .png)</label>
                                    <input type='file' className='form-control' id='businessLogoFile' name='logoImage'
                                        onChange={event => {
                                            const file = event.target.files[0];
                                            setFile(file);
                                        }}
                                    ></input>
                                </div>
                            </div>
                        </div>

                        {/* <!-- * Message section --> */}
                        <br></br>
                        <div className='form-group'>
                            <textarea placeholder='Have other information (ex: business hours) to let us know? Leave your message here.' id='message'
                                name='message' className='form-control' rows='3'
                                onChange={event => {
                                    const { value } = event.target;
                                    setMessage(value);
                                }}></textarea>
                        </div>
                        <br></br>
                        <div className='centeredText'>
                            <button type='submit' value='submit' className='btn btn-primary submit'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <br></br>
                <hr></hr>

                {/* <!-- Start of the next part for people to recommend other places --> */}
                <div className='row justify-content-center'>
                    <div className='col'>
                        <div className='centeredText'>
                            <h1>Know someone else with a business?</h1>
                            <p>If you don't own a business yourself, fill out the form below to recommend a local business!</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Contact form for other people to nominate local businesses --> */}
                <div className='row justify-content-center'>
                    <form className='customer-contact-form' action='#'>
                        <div className='form-group'>
                            {/* <!-- Row 1 of Form 2 --> */}
                            <div className='row'>
                                <div className='col-md-6'>
                                    <input placeholder='Full Name*' id='customerName' name='customerName' type='text' className='form-control' required />
                                </div>
                                <br></br>
                                <br></br>
                                <div className='col-md-6'>
                                    <input placeholder='Email*' id='customerEmail' type='email' name='customerEmail' className='form-control'
                                        aria-describedby='emailHelp' required />
                                </div>
                            </div>
                        </div>
                        <br></br>
                        {/* <!-- Row 2 of Form 2 --> */}
                        <div className='form-group'>
                            <input placeholder='Business Name to Recommend*' id='customerbusinessName' name='customerbusinessName' type='text' className='form-control'
                                required />
                        </div>
                        <br></br>
                        {/* <!-- Row 3 of Form 2 --> */}
                        <div className='form-group'>
                            <textarea placeholder='Please leave your message and information about the business you wish to recommend here.' id='customerMessage' name='customerMessage' className='form-control' rows='3' required></textarea>
                        </div>
                        <br></br>
                        <div className='centeredText'>
                            <button type='submit' value='submit' className='btn btn-primary'>
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
    );
};

export default TestContactForm;