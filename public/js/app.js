// this will be for the main OWNER contact form
const contactForm = document.querySelector('.owner-contact-form');

let name = document.getElementById('name');
let email = document.getElementById('email');
let phoneNumber = document.getElementById('phoneNumber');
let businessName = document.getElementById('businessName');
let businessCategory = document.getElementById('category');
let businessSubcategory = document.getElementById('businessSubcategory');
let websiteURL = document.getElementById('websiteURL');
let instagramName = document.getElementById('instagramName');
let otherURL = document.getElementById('otherURL');
let address = document.getElementById('address');
let city = document.getElementById('city');
let zipcode = document.getElementById('zipCode');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submit clicked')

    let formData = {
        name: name.value,
        email: email.value,
        subject: 'Wertigo Contact Form',
        phoneNumber: phoneNumber.value,
        businessName: businessName.value,
        businessCategory: businessCategory.value,
        businessSubcategory: businessSubcategory.value,
        websiteURL: websiteURL.value,
        instagramName: instagramName.value,
        otherURL: otherURL.value,
        address: address.value,
        city: city.value,
        zipcode: zipcode.value,
        message: message.value
    }

    console.log(formData);
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        console.log(xhr.responseText);
        if(xhr.responseText == 'success') {
            alert('Email successfully sent! Thank you for your interest in Wertigo. We will get back to you as soon as possible!');
            name.value = '';
            email.value = '';
            phoneNumber.value = '';
            businessName.value = '';
            businessCategory.value = '-Select a Business Category- *';
            businessSubcategory.value = '';
            websiteURL.value = '';
            instagramName.value = '';
            otherURL.value = '';
            address.value = '';
            city.value = '';
            zipcode.value = '';
            message.value = '';
        } else {
            alert('Something went wrong! Please refresh the page and try again. Please note that the send process can take up to a minute depending on internet speeds.');
        }
    }

    xhr.send(JSON.stringify(formData));

})

// this will be for the user/customer contact form
const customerContactForm = document.querySelector('.customer-contact-form');

let customerName = document.getElementById('customerName');
let customerbusinessName = document.getElementById('customerbusinessName');
let customerEmail = document.getElementById('customerEmail');
let customerMessage = document.getElementById('customerMessage');

customerContactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submit clicked')

    let customerFormData = {
        customerName: customerName.value,
        subject: 'Wertigo Contact Form',
        customerbusinessName: customerbusinessName.value,
        customerEmail: customerEmail.value,
        customerMessage: customerMessage.value
    }

    console.log(customerFormData);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');

    xhr.onload = function() {
        console.log(xhr.responseText);
        if(xhr.responseText == 'success') {
            alert('Email successfully sent! Thank you for your interest in Wertigo. We will get back to you as soon as possible!');
            customerName.value = '';
            customerbusinessName.value = '';
            customerEmail.value = '';
            customerMessage.value = '';
        } else {
            alert('Something went wrong! Please refresh the page and try again. Please note that the send process can take up to a minute depending on internet speeds.');
        }
    }

    xhr.send(JSON.stringify(customerFormData));

})