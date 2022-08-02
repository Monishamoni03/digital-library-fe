import * as regex from '../constants/regex';

function ValidateLogin(user) {
    console.log("user is",user)
    console.log("Entered validation")

    const error = {
        emailError:'',
        passwordError:''
    }

    if (user.email === "") {
        // console.log("user email err")
        error.emailError = "Please enter your email";
    }
    else if (!regex.EMAIL_REGEX.test(user.email)) {
        error.emailError = "Invalid email address";
    }

    if (user.password === "") {
        error.passwordError = "Please enter your password";
    }
    else if (!regex.PASSWORD_REGEX.test(user.password)) {
        error.passwordError = "Minimum 6 characters required";
    }

    if (error.email || error.password) {
        return true;
    }

    return error;
}

export default ValidateLogin;