// get the form by its id
const form = document.getElementById("owner-contact-form");

// create an event listener for when the user submits the form
const formEvent = form.addEventListener("submit", (event) => {
    event.preventDefault();

    // when the event is triggered, create a FormData object called mail based on the input values and their name attributes in the form
    let mail = new FormData(form);

    // call this function with mail passed as a parameter. This will use Fetch API to post the mail to the url send (from the form element attribute)
    sendMail(mail);
});

// defining the sendMail function
const sendMail = (mail) => {
    // supply the base url with /send for the fetch(). 
    fetch("https://www.wertigo.ca/contactus", {
        method: "post", //  specify the method as post since it is sending data, not getting
        body: mail,     //  specify the body as mail because we are sending this data in the request
    }).then((res) => {
        console.log(text);
        return res.text();
    });
};