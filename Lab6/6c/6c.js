function check() {
    const email = document.getElementById("email").value;
    const number = document.getElementById("num").value;
    if (!validateEmail(email)) {
        emailRed();
    }else{
        emailGreen();
    }
    if (!validateNumber(number)){
        numRed();
    }else{
        numGreen();
    }
}
function validateEmail(email) {
    var a = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return a.test(String(email).toLowerCase());
}
function validateNumber(number) {
    var a = /^\d+$/;
    return a.test(String(number).toLowerCase());
}
function emailRed() {
    document.getElementById("email").style.color = "red";
    document.getElementById("email").style.borderColor = "red";
}

function emailGreen() {
    document.getElementById("email").style.color = "green";
    document.getElementById("email").style.borderColor = "green";
}

function numRed() {
    document.getElementById("num").style.color = "red";
    document.getElementById("num").style.borderColor = "red";
}

function numGreen() {
    document.getElementById("num").style.color = "green";
    document.getElementById("num").style.borderColor = "green";
}