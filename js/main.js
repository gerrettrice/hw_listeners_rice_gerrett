var submitbutton = document.getElementById('submit');
var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var email = document.getElementById('email');
var message = document.getElementById('message');

submitbutton.addEventListener('click', function () {
    event.preventDefault();
    console.log(firstname.value);
    console.log(lastname.value);
    console.log(email.value);
    console.log(message.value);
});
