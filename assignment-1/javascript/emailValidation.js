function validateEmail() {
    email = document.getElementById("email").value;
    console.log(email)
    email = email.toString()

    var filter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (filter.test(email.value) == false) {
        alert('Not Valid Email Address');
    }
    else{
        alert('Valid Email Address')
    }
}
