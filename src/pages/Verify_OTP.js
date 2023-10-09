import { useState } from 'react';
import axios from 'axios';

function Verify_OTP() {
    const [mobile_otp, setMobile_otp] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const HandleSubmit = async (e) => {
        e.preventDefault();
        console.log(localStorage.getItem('verify_otp'),mobile_otp,axios.defaults.headers.common['authorization']);
        axios.defaults.headers.common['authorization'] = localStorage.getItem('verify_otp');
        const response = await axios.post('http://127.0.0.1:5001/Verify_OTP', {
            mobile_otp: mobile_otp
        });
        //console.log(response.data);

        if (response.data.status == true) 
        {
            setSuccess(response.data.msg);
            window.location.href='/SignIn'
        }
        else {
            setSuccess(response.data.msg);
        }
        console.log(response.data.msg)
    }

    return (
        <>
            <div className="container-fluid">
                <div class='row'>
                    <div className="col-4 offset-4 mt-5 bg-warning-subtle rounded">
                        <form method='POST' onSubmit={HandleSubmit}>
                            <div className='my-2'>
                                <input type='text' className='form-control' onKeyUp={(e) => setMobile_otp(e.target.value)} id='otpid' placeholder='Please enter OTP received'></input>
                            </div>
                            <div className='my-2'>
                                <button className='btn w-100 btn-primary' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Verify_OTP;