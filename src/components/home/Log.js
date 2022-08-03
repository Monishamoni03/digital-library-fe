import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setLoggedIn, userLoggedIn } from '../../action/action'
import ValidateLogin from '../../shared/utils/ValidateLogin';

function Admin() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    let [emailError, setEmailError] = useState("");
    let [passwordError, setPasswordError] = useState("");

    const validateAdmin = () => {
        const error = ValidateLogin(email, password);
        console.log(error);
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { errormessage } = useSelector(state => state.data)
    const { successmessage } = useSelector(state => state.data)

    useEffect(() => {
        if (successmessage) {
            setStatus(true)
            setType("success")
            setTitle(successmessage)
            dispatch(setLoggedIn())
        }
        else if (errormessage) {
            setStatus(true)
            setType("error")
            setTitle(errormessage)
        }
    }, [successmessage, errormessage])

    const handleSubmit = (e) => {
        console.log("check")
        e.preventDefault();
        console.log("prevented")
        const checkValid = validateAdmin();
        if(checkValid) {
            dispatch(userLoggedIn({ email: email, password: password }));
            console.log(email, password);
        }
    }

    return (
        <div className='row container-height'>
         <div className='col-lg-6 col-md-6 m-auto'>
          <div className='container'>
           <h1 className='text-center'>Login</h1>
           <form onSubmit={handleSubmit}>
            <fieldset>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                  value={email}
                  onChange={e => setemail(e.target.value)}
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                  value={password}
                  onChange={e => setpassword(e.target.value)}
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
              </div>
              <button type='submit' className='btn btn-info m-auto'>
                Login
              </button>
            </fieldset>
          </form>
        </div>
        </div>
    </div>
    );

};

export default Admin;