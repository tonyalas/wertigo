const contactForm = document.querySelector('.owner-contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submit clicked')
})