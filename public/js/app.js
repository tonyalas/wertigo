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
let toEmail = 'alastony99@gmail.com';

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
        message: message.value,
        toEmail: toEmail
    }

    console.log(formData);
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        console.log(xhr.responseText);
        if(xhr.responseText == 'success') {
            alert('email sent');
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
            alert('Something went wrong!');
        }
    }

    xhr.send(JSON.stringify(formData));

})