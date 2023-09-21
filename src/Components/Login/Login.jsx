import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../Shared/Firebase/Firebase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app);






const Login = () => {
    const [logSuccess, setLogSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        const form = e.target;
            
        const email =form.email.value;
        const password = form.password.value;
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setLogSuccess(true);
            form.reset();
        })
        .catch (error => console.log(error))
    }

    const handleEmailPassword = (event) =>{
        const email = event.target.value;
        console.log(email);
        setUserEmail(email)
    }

    const handleForgetPassword = () =>{
        if(!userEmail){
            alert("Please Enter Your Valid Email Address");
            return;
        }
    }

    return (
        <div className='container'>
            <form onSubmit={handleOnSubmit} className='w-50 mx-auto my-5 shadow p-5 background_col rounded-3'>
                <h4 className='text-center'>Please Login</h4>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input onBlur={handleEmailPassword} type="email" name='email' className="form-control"  aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" required  />
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" name="checkbox" className="form-check-input"  />
                    <label className="form-check-label" >Check me out</label>
                </div> */}
                <p><span>Forget Password? <button onSubmit={handleForgetPassword} className='btn btn-link'>Please Reset</button></span></p>
                <p>New User In a website <Link to='/register'>Please Register</Link></p>
                <button type="submit" className="btn btn-primary w-100">Login</button>
                {
                    logSuccess && <p className='text-danger'>Successfully Login</p>
                }
            </form>
        </div>
    );
};

export default Login;