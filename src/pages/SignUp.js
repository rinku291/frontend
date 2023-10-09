//import React from 'react';
import {useState} from 'react';
import axios from 'axios';

function SignUp ()
{
    const [user,setUser]= useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [mobile,setMobile]=useState('');
    const [succ,setSucc] = useState('');
    const [err,setErr] = useState('');

    const [message,setMessage] = useState('');

    const HandleSubmit = async (e) => {
        setSucc(''); 
        setErr(''); 

        e.preventDefault();
        const response = await axios.post('http://127.0.0.1:5001/SignUp',{
            user:user,
            email:email,
            password:password,
            mobile:mobile
        });
      

        console.log(response.data.msg);
        setMessage(response.data.msg);

        if (response.data.status == true)
        {
            setSucc(response.data.msg);
            localStorage.setItem('verify_otp', response.data.verify_otp);
            window.location.href='/Verify_OTP'
        }
        else
        {
            setErr(response.data.msg);
        }
    }

    return(
        <>
        <div class="container-fluid bg-info-subtle">
            <div class="row">
            <div class="col-4 offset-4 my-5">
                
            {succ &&  <div  className="alert alert-success">
                {succ}
            </div> } 


            {err &&  <div  className="alert alert-danger">
                {err}
            </div> } 

          <form method='POST' className='bg-warning p-2' onSubmit={HandleSubmit}>

                <div class="mb-2 ">
                <label className="mt-2" for="userid">Enter User Name</label>
                <input required className="form-control" onKeyUp={(e)=>setUser(e.target.value)} type='text' placeholder="abc" id='userid'></input>

                </div>
                <div class="mb-2">
                <label for="emailid">Enter Your Email</label>
                <input required className="form-control" onKeyUp={(e)=>setEmail(e.target.value)} type='text' placeholder="user@example.com" id='emailid'></input>

                </div>
                <div class="mb-2">
                <label for="pwdid">Enter Your Password</label>
                    <input required className="form-control" onKeyUp={(e)=>setPassword(e.target.value)} type='password' placeholder="xyz" id='pwdid'></input>
                </div>
                <div class="mb-2">
                <label for="mbid">Enter Your 10 digit Mobile number</label>
                    <input required className="form-control" onKeyUp={(e)=>setMobile(e.target.value)} type='text' placeholder="" id='mbid'></input>
                </div>

                <button className="form-control bg-success mb-3" type="submit">SignUp</button>

            </form>


            </div>
        </div>
        </div>
        
        </>
    );
}

export default SignUp;