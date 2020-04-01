function validateEmail() {
    email = document.getElementById("email").value;
    email = email.toString()

    var filter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (filter.test(email.toLowerCase()) == false) {
        alert('Not Valid Email Address');
    }
    else{
        alert('Valid Email Address')
    }
}
