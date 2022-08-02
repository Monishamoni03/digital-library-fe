import React from 'react';
import { connect } from 'react-redux'
import { registerUser } from '../../action/action';
import ValidateRegister from '../../shared/utils/ValidateRegister';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },
            error: {
                firstNameError: '',
                lastNameError: '',
                emailError: '',
                passwordError: '',
            },
            
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

     handleChange(e) {
        const { name, value } = e.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

     handleSubmit(event) {
        console.log("In submit");
       event.preventDefault();
        
        // const { user } = this.state

        let checkValid = ValidateRegister(user);
        // if (checkValid.firstNameError === '' && checkValid.lastNameError === '' && checkValid.emailError === '' && checkValid.passwordError === '') {
        //     checkValid = false;
        // }
        // else {
        //     checkValid = true;
        // }
        // console.log("Validating errors", checkValid);
        if (checkValid) {
            this.props.registerUser();
        }
    }

    render() {
        let { user, error } = this.state;
        //    error = ValidateRegister(user);
        //  console.log(error)

        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Create Account</h2>
                <form  name="form" onSubmit={this.handleSubmit}>
                    <div className="forms">
                        <label htmlFor="firstName">First Name<sup>*</sup></label>
                        <input type="text" className="form-control" name="firstName" placeholder="Enter your first name" value={user.firstName} onChange={this.handleChange} />
                        <p>{error.firstNameError}</p>

                    </div>
                    <div className="forms">
                        <label htmlFor="lastName">Last Name<sup>*</sup></label>
                        <input type="text" className="form-control" name="lastName" placeholder="Enter your last name" value={user.lastName} onChange={this.handleChange} />
                        <p>{error.lastNameError}</p>

                    </div>
                    <div className="forms">
                        <label htmlFor="email">Email<sup>*</sup></label>
                        <input type="text" className="form-control" name="email" placeholder="Enter your email id" value={user.email} onChange={this.handleChange} />
                        <p>{error.emailError}</p>

                    </div>
                    <div className="forms">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Enter your password" value={user.password} onChange={this.handleChange} />
                        <p>{error.passwordError}</p>

                    </div>
                    <div className="form-group">
                        <button className = "btn btn-primary" type='submit'>Register</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.data,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registerUser: (user) => dispatch(registerUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);







// import React from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux'
// import { registerUser } from '../../action/action';
// import ValidateRegister from '../../shared/utils/ValidateRegister';

// class Register extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//            user: {
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 password: ''
//             },
//             error: {
//                 firstNameError: '',
//                 lastNameError: '',
//                 emailError: '',
//                 passwordError: '',
//             },
//             submitted: false
//         };
        
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         const { name, value } = event.target;
//         const { user } = this.state;
//         this.setState({
//             user:{
//             ...user,
//             [name]: value
//             }
//         });
//     }

//     handleSubmit(event) {
//         event.preventDefault();
        
//         console.log("IN SUBMIT");

//         let checkValid = ValidateRegister();
//         if (checkValid .firstNameError === '' && checkValid .lastNameError === '' && checkValid .emailError === '' && checkValid .passwordError === '') {
//             checkValid  = false;
//         }
//         else {
//             checkValid  = true;
//         }
//         console.log("Validating errors",checkValid )
//         if (checkValid ) {
//             this.props.registerUser(checkValid)
//         }
       
//     }

//     render() {
//         let { user,error } = this.state;
//         error = ValidateRegister(user);
//         //  console.log(error)
//         return (
//             <div className = "col-md-6 col-md-offset-3">
//                 <h2>Create Account</h2>
//                 <form onSubmit = {() => handleSubmit()}>
//                     <div className = "forms">
//                         <label htmlFor = "firstName">First Name<sup>*</sup></label>
//                         <input type = "text" className = "form-control" name = "firstName" placeholder = "Enter your first name" value = {user.firstName} onChange = {this.handleChange} />
//                         <p>{error.firstNameError}</p>
                        
//                     </div>
//                     <div className = "forms">
//                         <label htmlFor = "lastName">Last Name<sup>*</sup></label>
//                         <input type = "text" className = "form-control" name = "lastName" placeholder = "Enter your last name" value = {user.lastName} onChange = {this.handleChange} />
//                         <p>{error.lastNameError}</p>
                        
//                     </div>
//                     <div className = "forms">
//                         <label htmlFor = "email">Email<sup>*</sup></label>
//                         <input type = "text" className = "form-control" name = "email" placeholder = "Enter your email id" value = {user.email} onChange = {this.handleChange} />
//                         <p>{error.emailError}</p>
                        
//                     </div>
//                     <div className = "forms">
//                         <label htmlFor = "password">Password</label>
//                         <input type = "password" className = "form-control" name = "password" placeholder = "Enter your password" value = {user.password} onChange = {this.handleChange} />
//                         <p>{error.passwordError}</p>
                        
//                     </div>
//                     <div className = "form-group">
//                         {/* <Link to = "" className = "btn btn-primary" onClick={this.handleSubmit}>Register</Link> */}
//                         <button type = 'submit'>Register</button>

//                         {/* <Link to = "/login" className = "btn btn-link">Login</Link> */}
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }

//     const mapStateToProps = state => {
//         return {
//             user: state.data,
//             // successmessage: state.data
//         }
//     }

//     const mapDispatchToProps = dispatch => {
//         return {
//             registerUser: (user) => dispatch(registerUser(user))
//         }
//     }

// export default connect(mapStateToProps, mapDispatchToProps)(Register);