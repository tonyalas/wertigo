const contactForm = document.querySelector('.owner-contact-form');

let name = document.getElementById('name');
let email = document.getElementById('email');
let phoneNumber = document.getElementById('phoneNumber');
let businessName = document.getElementById('businessName');
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
        message: message.value
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
            message.value = '';
        } else {
            alert('Something went wrong!');
        }
    }

    xhr.send(JSON.stringify(formData));

})