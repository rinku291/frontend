import {useState,useEffect} from 'react';
import axios from 'axios';


function ProfilePg()
{
    const [userinfo,setUserinfo]=useState({});

    useEffect(()=>{fetchprofile();},[]);

    
    const fetchprofile = async (e) => {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
        const response = await axios.get('http://127.0.0.1:5001/userprofile'); 
        console.log(response.data.userdata._id);
        setUserinfo(response.data.userdata);
    }

    function HandleClick() {
        localStorage.removeItem('token');
        window.location.href='http://localhost:3000/SignIn';
    }

    return(
        <div className='container-fluid'>
            <div className='container '>
                <div className='col-4 offset-4 bg-warning'>
                <div className='my-2'>
                        <h5>User:{userinfo.user}</h5>
                    </div>
                    <div className='my-2'>
                        <h5>Email:{userinfo.email}</h5>
                    </div>
                    <div className='my-2'>
                        <h5>Mobile:{userinfo.mobile}</h5>
                    </div>
                    <div className='my-2 text-center'>
                        <button type='submit' className='btn btn-danger' onClick={HandleClick}>Log Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePg;