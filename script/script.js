/**
 * Created by alizamani on 30/3/17.
 */

function doit() {

    var man=_("form").onsubmit=function () {
        var valid=true;
        var name=_("firstName").value;
        if (name.length<3) {
            var nameErrMsg="Name must be no sorter that 3 characters";
            valid=false;
        } else {
            nameErrMsg="";
        }

        var family=_("lastName").value;
        if (name.length<3) {
            var familyErrMsg="family name must be no sorter that 3 characters";
            valid=false;
        } else {
            familyErrMsg="";
        }

        var id=_("id").value;
        if (/^\d{10}$/.test(id)){
            var idErrMsg="";
            valid=false;
        } else {
            idErrMsg="ID string should be exactly 10 characters!<br>";
        }

        var email=_("email").value;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            var emailErrMsg="Email is not valid!<br>";
            valid=false;
        } else {
            emailErrMsg="";
        }

        var pass1=_("password").value;
        if (pass1.length<6){
            var pass1ErrMsg="Password should be at least 6 characters!<br>";
            valid=false;
        } else {
            pass1ErrMsg="";
        }

        var pass2=_("rePassword").value;
        if (pass1 != pass2) {
            var rePassErrMsg="Passwords are not matched!<br>";
            valid=false;
        } else {
            rePassErrMsg="";
        }
        printError("firstNameError",nameErrMsg);
        printError("lastNameError",familyErrMsg);
        printError("idError",idErrMsg);
        printError("emailError",emailErrMsg);
        printError("passwordError",pass1ErrMsg);
        printError("rePasswordError",rePassErrMsg);
        return valid;
    }
}


function _(id) {
    return document.getElementById(id);
}

function printError(id, errMsg) {
    var place=_(id);
    place.innerHTML=errMsg;
}

window.onload=function () {
    doit();
}