import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
// import { loginUser } from '../../action/action';
// import "../../assets/css/Login.css"
import ValidateLogin from '../../shared/utils/ValidateLogin';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: '',
                password: ''
            },
            error: {
                emailError: '',
                passwordError: ''
            },
            submitted: false
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user:{
            ...user,
            [name]: value
            }
        });
    }

    handleSubmit(event) {
        const { user } = this.state
        event.preventDefault();
    
        let checkValid = ValidateLogin(user);
        if (checkValid.emailError === '' && checkValid.passwordError === '') {
            checkValid = false;
        }
        else {
            checkValid = true;
        }
        console.log("Validating errors",checkValid);
        if (checkValid) {
            this.props.loginUser();
        }
    }

    render() {
        let { user, error } = this.state;
       // let { error } = this.state;
       error = ValidateLogin(user);
       //  console.log(error)
        return (
            <div className = "col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form  action = '#' method = 'POST' name = "form" onSubmit = {this.handleSubmit}>
                    <div className = "forms">
                        <label htmlFor = "email">Email<sup>*</sup></label>
                        <input type = "text" className = "form-control" name = "email" placeholder = "Enter your email id" value = {user.email} onChange = {this.handleChange} />
                        <p>{error.emailError}</p>
                        
                    </div>
                    <div className = "forms">
                        <label htmlFor = "password">Password</label>
                        <input type = "password" className = "form-control" name = "password" placeholder = "Enter your password" value = {user.password} onChange = {this.handleChange} />
                        <p>{error.passwordError}</p>
                        
                    </div>
                    <div className = "form-group">
                        <Link to = "/login" className = "btn btn-primary" onClick={this.handleSubmit}>Login</Link>

                        {/* <Link to = "/login" className = "btn btn-link">Login</Link> */}
                    </div>
                </form>
            </div>
        );
    }
}

    const mapStateToProps = state => {
        return {
            users: state.data,
        }
    }

    const mapDispatchToProps = dispatch => {
        return {
            loginUser: (user) => dispatch(loginUser(user))
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Login);
