import { useState, useEffect } from 'react';
import axios from 'axios';

function ProfileInfoAdd() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [pancard, setPancard] = useState('');
    const [name_add, setName_add] = useState('');
    const [mobile_add, setMobile_add] = useState('');
    const [pincode, setPincode] = useState('');
    const [locality, setLocality] = useState('');
    const [area_street, setArea_street] = useState('');
    const [city_district, setCity_district] = useState('');
    const [state, setState] = useState('');
    const [landmark, setLandmark] = useState('');
    const [alt_phone, setAlt_phone] = useState('');
    const [address_type, setAddress_type] = useState('');
    const [user_id, setUser_id] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => { fetchprofile(); }, []);

    const fetchprofile = async () => {
        //console.log(localStorage.getItem('token'));
         axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
         const response = await axios.get('http://127.0.0.1:5001/profileinfofetch');
         if(response)
         {
            console.log(response.data.profile[0]);
         setFname(response.data.profile[0].fname);
         setLname(response.data.profile[0].lname);
         setEmail(response.data.profile[0].email);
         setMobile(response.data.profile[0].mobile);
         setPancard(response.data.profile[0].pancard);
         }
         console.log(fname,lname,email,mobile);
         
    }
    





    const PersonalInfo_Update = async (e) => {
        e.preventDefault();
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
        const response = await axios.post('http://127.0.0.1:5001/profile_infoadd', {
            fname: fname,
            lname: lname,
            gender: gender,
            email: email,
            mobile: mobile,
            user_id: user_id
        });

        //console.log(response.data);
    }

    const Pancard_Update = async (e) => {
        e.preventDefault();
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
        const response = await axios.post('http://127.0.0.1:5001/pancardupdate', {
            pancard: pancard
        });
        //console.log(response.data);
    }

    const Address_Update = async (e) => {
        e.preventDefault();

        axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
        const response = await axios.post('http://127.0.0.1:5001/addressupdate', {
            name_add: name_add,
            mobile_add: mobile_add,
            pincode: pincode,
            locality: locality,
            area_street: area_street,
            state: state,
            landmark: landmark,
            alt_phone: alt_phone,
            address_type: address_type
        });
        //console.log(response.data);
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='col-6 offset-3'>
                    <h6>Personal Information</h6>
                    <form method='POST' onSubmit={PersonalInfo_Update}>
                        <div className='mb-2 mt-4'>
                            <input className='form-control' type='text' placeholder={fname} onKeyUp={(e) => setFname(e.target.value)} id='fnameid' ></input>
                        </div>
                        <div className='mb-2'>
                            <input className='form-control' type='text' placeholder={lname} onKeyUp={(e) => setLname(e.target.value)} id='lnameid' required ></input>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" onClick={(e) => setGender(e.target.value)} value="male" id="genderid" />
                            <label class="form-check-label" for="maleid">
                                Male
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" onClick={(e) => setGender(e.target.value)} value="female" id="genderid" />
                            <label class="form-check-label" for="femaleid">
                                Female
                            </label>
                        </div>
                        <div className='mb-2'>
                            <input className='form-control' type='text' placeholder={email} onKeyUp={(e) => setEmail(e.target.value)} id='emailid' required />
                        </div>
                        <div className='mb-2'>
                            <input className='form-control' type='text' placeholder={mobile} onKeyUp={(e) => setMobile(e.target.value)} id='mobileid' required />
                        </div>
                        <div className='mb-2 d-flex gap-2'>
                            <div className='w-50'>
                                <button className='btn btn-primary form-control' type='submit'>Submit</button>
                            </div>
                            <div className='w-50'>
                                <button className='btn btn-primary form-control' type='reset'>Reset</button>
                            </div>
                        </div>
                    </form>
                    <form method='POST' onSubmit={Pancard_Update}>
                        <h6>Pancard Information</h6>
                        <div className='mb-2'>
                            <input className='form-control' type='text' placeholder={pancard} onKeyUp={(e) => setPancard(e.target.value)} id='pancardid' />
                        </div>
                        <div className='mb-2 d-flex gap-2'>
                            <div className='w-50'>
                                <button className='btn btn-primary form-control' type='submit'>Submit</button>
                            </div>
                            <div className='w-50'>
                                <button className='btn btn-primary form-control' type='reset'>Reset</button>
                            </div>
                        </div>
                    </form>
                    <form method='POST' onSubmit={Address_Update}>
                        <h6>Adreass Update</h6>
                        <div className='mb-2'>
                            <input className='form-control' type='text' placeholder='Enter Your Name' onKeyUp={(e) => setName_add(e.target.value)} id='name1' />
                        </div>
                        <div className='mb-2'>
                            <input className='form-control' type='text' placeholder='Mobile' onKeyUp={(e) => setMobile_add(e.target.value)} id='mobile1' />
                        </div>
                        <div className='mb-2'>
                            <input className='form-control' type='text' placeholder='Pincode' onKeyUp={(e) => setPincode(e.target.value)} id='pincode' />
                        </div>
                        <div className='mb-2'>
                            <input className='form-control' type='text' placeholder='Locality' onKeyUp={(e) => setLocality(e.target.value)} id='locality' />
                        </div>
                        <div className='mb-2'>
                            <input className='form-control' type='text' placeholder='Area Street' onKeyUp={(e) => setArea_street(e.target.value)} id='area_street' />
                        </div>
                        <div className='mb-2'>
                            <input className='form-control' type='text' placeholder='City/District/Town' onKeyUp={(e) => setCity_district(e.target.value)} id='city_district' />
                        </div>
                        <div className='mb-2'>
                            <select class="form-control rounded-0 w-50 form-select" onChange={(e) => { setState(e.target.value) }} aria-label="Default select example">
                                <option selected>--Select State--</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Himachal">Himachal</option>
                            </select>
                        </div>
                        <div className='mb-2'>
                            <input className='form-control' placeholder='LandMark' type='text' onKeyUp={(e) => setLandmark(e.target.value)} id='landmark' />
                        </div>
                        <div className='mb-2'>
                            <input className='form-control' placeholder='Alt Phone' type='text' onKeyUp={(e) => setAlt_phone(e.target.value)} id='altphone' />
                        </div>
                        <div className='mb-2 d-flex'>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" onClick={(e) => { setAddress_type(e.target.value) }} value='home' name="flexRadioDefault" id="home" />
                                <label class="form-check-label" for="home">
                                    Home (All day Delivery)
                                </label>
                            </div>
                            <div class="form-check ms-5">
                                <input class="form-check-input" type="radio" onClick={(e) => { setAddress_type(e.target.value) }} value='work' name="flexRadioDefault" id="work" />
                                <label class="form-check-label" for="work">
                                    Work (Delivery between 10AM - 5PM)
                                </label>
                            </div>
                        </div>
                        <div className='mb-2 d-flex gap-2'>
                            <div className='w-50'>
                                <button className='btn btn-primary form-control' type='submit'>Submit</button>
                            </div>
                            <div className='w-50'>
                                <button className='btn btn-primary form-control' type='reset'>Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}


export default ProfileInfoAdd;