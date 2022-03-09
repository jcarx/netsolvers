/** @author Ravi Manthena */
function getdevice() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        //document.write("mobile");
        //alert("it's Mobile\n" + navigator.userAgent);
        return "mobile";
    } else {
        return "web";
        //alert("Not Mobile\n" + navigator.userAgent);
        //document.write("not mobile");
    }
}
function validateLogin(frm)
{
    event.preventDefault();

    if (frm.email.value == "")
    {
        alert("User Name can not be left blank");
        frm.email.focus();
        return false;
    }
    if (frm.password.value == "")
    {
        alert("Password can not be left blank");
        frm.password.focus();
        return false;
    }
    document.loginForm.submit();
}

function mouseEnter() {
    // this will get us a 4 digit random number
    var x = Math.floor((Math.random() * 999) + 1000);
    document.getElementById("randompin").innerHTML = 'Your Pin : ' + x;
}

function validateRegisterrecap(frm)
{
    event.preventDefault();
    if (frm.email.value == "")
    {
        alert("Please enter valid Email");
        frm.email.focus();
        return false;
    }
    // check if the email syntax makes sense
    if (!(ValidateEmailFormat(frm.email.value))) {
        alert("You have entered an invalid email address!");
        frm.email.focus();
        return false;
    }

    var pw = frm.password.value;
    if (pw == "") {
        alert("Password cannot be empty");
        return false;
    }
    if (pw.length < 8) {
        alert("Password length must be atleast 8 characters");
        return false;
    }
    if (pw.length > 12) {
        alert("Password length must not exceed 15 characters");
        return false;
    }

    var genpin = document.getElementById("randompin").innerHTML;
    var pin = frm.pin.value;
    if (genpin.length < 13)
    {
        alert("Please Hoover Over Get Pin");
        return false;
    }
    if (pin == "")
    {
        alert("Please enter your Pin");
        frm.pin.focus();
        return false;
    }
    if (genpin.length > 13) {
        var subgenpen = genpin.substr(11);
        if (subgenpen == pin) {
            //alert("good to go" + frm.email.value + " " + pin + " " + genpin.length);
            //submit to backend service where we do addtional check's and processes
            document.registerForm.submit();
        } else {
            alert("Pin does't match, Try again");
        }
    }
}
function ValidateEmailFormat(inputText)
{
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.match(mailformat))
    {
        return true;
    } else
    {
        return false;
    }
}
function mouseEnterComment() {
    var x = Math.floor((Math.random() * 999) + 1000);
    console.log(x);
    document.getElementById("randompincomment").innerHTML = 'Your Pin : ' + x;
}
// sharing is caring
function shareevent(str) {
    console.log(str);
    if (str == "fb") {
        fbshare();
    } else if (str == "yt") {
        ytshare();
    } else if (str == "ln") {
        lnshare();
    } else if (str == "tw") {
        twshare();
    } else {
        ytshare();
    }
}
function fbshare() {
    window.open("https://www.facebook.com/sharer.php", rel = "noopener");
}
function ytshare() {
    window.open("https://www.youtube.com/channel/UCH0UM75l3iHecOET4MvzIUw", rel = "noopener");
}
function lnshare() {
    window.open("https://www.linkedin.com/shareArticle?mini=true", rel = "noopener");
}
function twshare() {
    window.open("https://twitter.com/intent/tweet", rel = "noopener");
}
