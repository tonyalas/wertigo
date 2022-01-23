import { Alert, Container } from 'react-bootstrap';
import './ContactUsPage.css';
import { useEffect, useRef, useState } from 'react';

function ContactUsPage() {
    useEffect(() => {
        document.title = 'Wertigo - Contact Us'
    }, []);

    const [status, setStatus] = useState('Submit');
    const [statusUser, setStatusUser] = useState('Submit');
    const formRef = useRef()
    const [formSubmissionStatus, setFormSubmissionStatus] = useState(null);
    const [formSubmissionUserStatus, setFormSubmissionUserStatus] = useState(null);

    // ! This is the button handler for the Business owner form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        var data = new FormData();
        var imagedata = document.querySelector('input[type="file"]')

        const { name, email, phoneNumber, privacyCheck, businessName, businessCategory, businessSubcategory, websiteURL, instagramName, otherURL, address, city, postalCode, businessLogoFile, message } = e.target.elements;


        data.append('name', name.value);
        data.append('email', email.value);
        data.append('phoneNumber', phoneNumber.value);
        data.append('privacyCheck', privacyCheck.value);
        data.append('businessName', businessName.value);
        data.append('businessCategory', businessCategory.value);
        data.append('businessSubcategory', businessSubcategory.value);
        data.append('websiteURL', websiteURL.value);
        data.append('instagramName', instagramName.value);
        data.append('otherURL', otherURL.value);
        data.append('address', address.value);
        data.append('city', city.value);
        data.append('postalCode', postalCode.value);
        data.append('businessLogoFile', businessLogoFile.value);
        data.append('message', message.value);
        data.append('logoImage', imagedata.files[0]);

        const URL = process.env.REACT_APP_API_URL || ''
        try {
            const response = await fetch(URL + '/contact', {
                method: 'POST',
                body: data
            })
            if (response.status == 200) {
                setFormSubmissionStatus('success')
                formRef.current.reset()
            }
            else {
                setFormSubmissionStatus('error')
            }
        }
        catch (e) {
            setFormSubmissionStatus('error')
        }
        setStatus('Submit');
    };

    // ! This is the button handler for the user recommendation form
    const handleSubmitUser = async (e) => {
        e.preventDefault();
        setStatusUser('Sending...');

        var data = new FormData();

        const { customerName, customerEmail, customerBusinessName, customerMessage } = e.target.elements;

        data.append('customerName', customerName.value);
        data.append('customerEmail', customerEmail.value);
        data.append('customerBusinessName', customerBusinessName.value);
        data.append('customerMessage', customerMessage.value);

        const URL = process.env.REACT_APP_API_URL || ''
        try {
            const response = await fetch(URL + '/contact', {
                method: 'POST',
                body: data
            })
            if (response.status == 200) {
                setFormSubmissionUserStatus('success')
                formRef.current.reset()
            }
            else {
                setFormSubmissionUserStatus('error')
            }
        }
        catch (e) {
            setFormSubmissionUserStatus('error')
        }
        setStatusUser('Submit');
    }

    // ! The actual HTML for the two forms
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
                            {/* {formSubmissionStatus == 'success' &&
                                <Alert variant='success'>Email sent!</Alert>
                            }
                            {formSubmissionStatus == 'error' &&
                                <Alert variant='warning'>Uh oh! Something went wrong. Please try again.</Alert>
                            } */}
                        </div>
                    </div>
                </div>
                {/* <!-- Section for the first form --> */}
                <div className='row justify-content-center'>
                    {/* <!-- Contact form for owners of local businesses to contact me --> */}
                    <form onSubmit={handleSubmit} className='owner-contact-form' encType='multipart/form-data' ref={formRef}>
                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <input placeholder='Full Name*' id='name' name='name' type='text' className='form-control'
                                        required />
                                </div>
                                <br></br>
                                <br></br>
                                <div className='col-md-4'>
                                    <input placeholder='Email*' id='email' type='email' name='email' className='form-control'
                                        aria-describedby='emailHelp' required />
                                </div>
                                <br></br>
                                <br></br>
                                <div className='col-md-4'>
                                    <input placeholder='Business Phone Number' id='phoneNumber' type='text' name='phoneNumber'
                                        className='form-control' />
                                </div>
                            </div>
                        </div>
                        <br></br>

                        {/* <!-- * Multiple choice --> */}
                        <div className='form-group'>
                            <div className='row'>
                                <div className='col'>
                                    <select placeholder='Share Your Information?' id='privacyCheck' name='privacyCheck' className='form-control'
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
                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <input placeholder='Business Name*' id='businessName' name='businessName' type='text'
                                        className='form-control' required />
                                </div>
                                <br></br>
                                <br></br>
                                <div className='col-md-4'>
                                    <select placeholder='Business Category' id='businessCategory' name='businessCategory' className='form-control'
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
                                <div className='col-md-4'>
                                    <input placeholder='Subcategories (ex: Cafe, Gifts, Nails, etc.)' id='businessSubcategory'
                                        name='businessSubcategory' type='text' className='form-control' />
                                </div>
                            </div>
                        </div>
                        <br></br>

                        {/* <!-- Row 3 of Form 1 --> */}
                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <input placeholder='Website URL' id='websiteURL' name='websiteURL' type='text'
                                        className='form-control' />
                                </div>
                                <br></br>
                                <br></br>
                                <div className='col-md-4'>
                                    <input placeholder='Instagram Account @ Name' id='instagramName' name='instagramName'
                                        type='text' className='form-control' />
                                </div>
                                <br></br>
                                <br></br>
                                <div className='col-md-4'>
                                    <input placeholder='Other Social Media URL' id='otherURL' name='otherURL' type='text'
                                        className='form-control' />
                                </div>
                            </div>
                        </div>
                        <br></br>

                        {/* <!-- Row 4 of Form 1 --> */}
                        <div className='form-group'>
                            <div className='row'>
                                <p>Address is only required if you have a physical storefront.</p>
                                <div className='col-md-4'>
                                    <input placeholder='Address' id='address' name='address' type='text' className='form-control' />
                                </div>
                                <br></br>
                                <br></br>
                                <div className='col-md-4'>
                                    <input placeholder='City' id='city' name='city' type='text' className='form-control' />
                                </div>
                                <br></br>
                                <br></br>
                                <div className='col-md-4'>
                                    <input placeholder='Postal Code' id='postalCode' name='postalCode' type='text' className='form-control' />
                                </div>
                            </div>
                        </div>

                        {/* <!-- ! File Upload (for business logo) --> */}
                        <br></br>
                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <label htmlFor='businessLogoFile' className='subtextClass'>Attach your business logo (.jpg or .png)</label>
                                    <input type='file' className='form-control' id='businessLogoFile' name='logoImage'></input>
                                </div>
                            </div>
                        </div>

                        {/* <!-- * Message section --> */}
                        <br></br>
                        <div className='form-group'>
                            <textarea placeholder='Have other information (ex: business hours) to let us know? Leave your message here.' id='message'
                                name='message' className='form-control' rows='3'></textarea>
                        </div>
                        <br></br>
                        <div className='centeredText'>
                            {/* Display a SUCCESS or OOPS message depending on what the outcome is */}
                            {formSubmissionStatus == 'success' &&
                                <Alert variant='success'>Email sent!</Alert>
                            }
                            {formSubmissionStatus == 'error' &&
                                <Alert variant='warning'>Uh oh! Something went wrong. Please try again.</Alert>
                            }
                            <button type='submit' value='submit' className='btn btn-primary submit' disabled={status == 'Sending...'}>
                                {status}
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
                            {/* {formSubmissionUserStatus == 'success' &&
                                <Alert variant='success'>Email sent!</Alert>
                            }
                            {formSubmissionUserStatus == 'error' &&
                                <Alert variant='warning'>Uh oh! Something went wrong. Please try again.</Alert>
                            } */}
                        </div>
                    </div>
                </div>

                {/* <!-- Contact form for other people to nominate local businesses --> */}
                <div className='row justify-content-center'>
                    <form className='customer-contact-form' onSubmit={handleSubmitUser} encType='multipart/form-data'>
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
                            <input placeholder='Business Name to Recommend*' id='customerBusinessName' name='customerBusinessName' type='text' className='form-control'
                                required />
                        </div>
                        <br></br>
                        {/* <!-- Row 3 of Form 2 --> */}
                        <div className='form-group'>
                            <textarea placeholder='Please leave your message and information about the business you wish to recommend here.' id='customerMessage' name='customerMessage' className='form-control' rows='3' required></textarea>
                        </div>
                        <br></br>
                        <div className='centeredText'>
                            {/* Display a SUCCESS or OOPS message depending on what the outcome is */}
                            {formSubmissionUserStatus == 'success' &&
                                <Alert variant='success'>Email sent!</Alert>
                            }
                            {formSubmissionUserStatus == 'error' &&
                                <Alert variant='warning'>Uh oh! Something went wrong. Please try again.</Alert>
                            }
                            <button type='submit' value='submit' className='btn btn-primary' disabled={statusUser == 'Sending...'}>
                                {statusUser}
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
}

export default ContactUsPage;