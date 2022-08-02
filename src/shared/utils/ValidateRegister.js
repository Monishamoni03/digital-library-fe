import * as regex from '../constants/regex';

function ValidateRegister(user) {
    console.log("user is",user)
    console.log("Entered validation")

    const error = {
        firstNameError:'',
        lastNameError:'',
        emailError:'',
        passwordError:''
    }

    if (user.firstName === "") {
        error.firstNameError = "Please enter your first name";
    } else if (!regex.NAME_REGEX.test(user.firstName)) {
        error.firstNameError = "Invalid first name";
    }

    if (user.lastName === "") {
        error.lastNameError = "Please enter your last name";
    } else if (!regex.NAME_REGEX.test(user.lastName)) {
        error.lastNameError = "Invalid last name";
    }

    if (user.email === "") {
        error.emailError = "Please enter your email";
    } else if (!regex.EMAIL_REGEX.test(user.email)) {
        error.emailError = "Invalid email address";
    }

    if (user.password === "") {
        error.passwordError = "Enter your password";
    } else if (!regex.PASSWORD_REGEX.test(user.password)) {
        error.passwordError = "Minimum 6 characters required";
    }

    if (error.firstNameError || error.lastNameError || error.emailError || error.passwordError) {
        return error;
    }
   
    return true;
}

export default ValidateRegister;