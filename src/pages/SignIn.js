import { useState } from 'react';
import axios from 'axios';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [profile_id, setProfile_id] = useState('');
    

    const LogIn = async (e) => {
        setSuccess('');
        setError('');
        e.preventDefault();
        const response = await axios.post('http://127.0.0.1:5001/SignIn',
            {
                email: email,
                password: password
            });

        console.log(email);
        console.log(password);
        console.log(response);


        if (response.data.status == true) {
            setSuccess(response.data.msg);
            //console.log(response.data.userdata);
            setProfile_id(response.data.login._id);
           
            localStorage.setItem('token', response.data.token);
            window.location.href = 'http://localhost:3000';
            //console.log(success);
        }
        else {
            setError(response.data.msg);
            console.log(error);
        }
    }

    return (
        <>
            <div class='container-fluid bg-info-subtle'>
                    <div class='row justify-content-center d-flex box-height'>
                        <div className='col-2 bg-primary my-5'>

                            <h1 className='txt-frmt6 ms-3 my-4'>Login</h1>
                            <h1 className='txt-frmt7 ms-3'>Get access to your Orders, Wishlist and Recommendations</h1>
                        </div>

                        <div class='col-4 bg-white my-5'>
                            <form method='POST' onSubmit={LogIn}>
                                <div class="mt-4 mb-4 mx-3">
                                    <input type='text' className='form-control' onKeyUp={(e) => setEmail(e.target.value)} id='emailid' placeholder="Enter Your Email"></input>
                                </div>
                                <div class="mb-4 mx-3">
                                    <input type='text' className='form-control' onKeyUp={(e) => setPassword(e.target.value)} id='passid' placeholder="Enter Your Password"></input>
                                </div>
                                <div class='mb-1 mx-3'>
                                    <p className='txt-frmt8'>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                                </div>
                                <div class='mb-1 mx-3'>
                                    <button className='form-control mb-3 txt-frmt9' type='submit'>Log In</button>
                                </div>
                                <div class="mb-3 mx-3">
                                    <p>{success}</p>
                                </div>
                            </form>
                            <h5 className='txt-frmt10'>New to Flipkart? <a href='/SignUp'>Create an account</a></h5>
                        </div>

                    </div>
                </div>
        </>
    )
}

export default SignIn;