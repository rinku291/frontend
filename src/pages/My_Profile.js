import { useState, useEffect } from 'react';
import axios from 'axios';


function My_Profile() {

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

    // useEffect(() => { fetchprofile(); }, []);

    // const fetchprofile = async () => {
    //     //console.log(localStorage.getItem('token'));
    //     axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    //     const response = await axios.get('http://127.0.0.1:5001/profileinfofetch');
    //     if (response) {
    //         console.log(response.data.profile[0]);
    //         setFname(response.data.profile[0].fname);
    //         setLname(response.data.profile[0].lname);
    //         setEmail(response.data.profile[0].email);
    //         setMobile(response.data.profile[0].mobile);
    //         setPancard(response.data.profile[0].pancard);
    //     }
    //     console.log(fname, lname, email, mobile);
    // }

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
    }

    const Pancard_Update = async (e) => {
        e.preventDefault();
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
        const response = await axios.post('http://127.0.0.1:5001/pancardupdate', {
            pancard: pancard
        });
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
        <div className='container-fluid bg-col2'>
            <div className='row'>
                <div className='col-3'>
                    <div className='mx-2 my-2 bg-col3'>
                        <img className='mx-2 my-2' src='/assets/Hello.svg' />
                        <span className='txt-frmt18'>Hello</span>
                    </div>
                    <div className='mx-2 my-2 bg-col3'>
                        <div className="d-flex align-items-start">
                            <div className="nav flex-column box6" id="v-pills-tab1" role="tablist" aria-orientation="vertical">
                                <div className='row'>
                                    <div className='mt-2 ms-2 '>
                                        <img width='18' className='mb-1 me-2' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIyIDIxIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtMTApIj48cGF0aCBmaWxsPSIjMjg3NEYwIiBkPSJNMTQuMjc1IDIyLjcwNGMyLjI3Mi0uNDEyIDQuMzQ3LS42MTggNi4yMjUtLjYxOCAxLjg3OCAwIDMuOTUzLjIwNiA2LjIyNS42MThhNS4xNSA1LjE1IDAgMCAxIDQuMjMgNS4wNjhWMzFoLTIwLjkxdi0zLjIyOGE1LjE1IDUuMTUgMCAwIDEgNC4yMy01LjA2OHptMS4yNzQtNy43MjRjMC0yLjU4IDIuMTYzLTQuNjczIDQuODMyLTQuNjczIDIuNjY3IDAgNC44MyAyLjA5MiA0LjgzIDQuNjczIDAgMi41OC0yLjE2MyA0LjY3My00LjgzIDQuNjczLTIuNjcgMC00LjgzMy0yLjA5Mi00LjgzMy00LjY3M3oiLz48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjwvZz48L3N2Zz4=' />
                                        <span className='txt-frmt16'>ACCOUNT SETTINGS</span>
                                    </div>
                                    <div className='ms-4'>
                                        <button className="nav-link txt-frmt15 active" id="profile-info-tab" data-bs-toggle="pill" data-bs-target="#profile-info" type="button" role="tab" aria-controls="profile-info" aria-selected="true">Profile Information</button>
                                        <button className="nav-link txt-frmt15" id="manage-address-tab" data-bs-toggle="pill" data-bs-target="#manage-address" type="button" role="tab" aria-controls="manage-address" aria-selected="false">Manage Addresses</button>
                                        <button className="nav-link txt-frmt15" id="pan-card-info-tab" data-bs-toggle="pill" data-bs-target="#pan-card-info" type="button" role="tab" aria-controls="pan-card-info" aria-selected="false" >PAN Card Information</button>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='mt-2 ms-2'>
                                        <img width='18' className='mb-1 me-2' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIzIDIyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtOSkiPjxlbGxpcHNlIGN4PSIyMC41NTciIGN5PSIyMCIgcng9IjIwLjU1NyIgcnk9IjIwIi8+PHBhdGggZD0iTTcgNmgyOHYyOEg3eiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTMxLjUgMjd2MS4xNjdhMi4zNCAyLjM0IDAgMCAxLTIuMzMzIDIuMzMzSDEyLjgzM2EyLjMzMyAyLjMzMyAwIDAgMS0yLjMzMy0yLjMzM1YxMS44MzNBMi4zMzMgMi4zMzMgMCAwIDEgMTIuODMzIDkuNWgxNi4zMzRhMi4zNCAyLjM0IDAgMCAxIDIuMzMzIDIuMzMzVjEzSDIxYTIuMzMzIDIuMzMzIDAgMCAwLTIuMzMzIDIuMzMzdjkuMzM0QTIuMzMzIDIuMzMzIDAgMCAwIDIxIDI3aDEwLjV6TTIxIDI0LjY2N2gxMS42Njd2LTkuMzM0SDIxdjkuMzM0em00LjY2Ny0yLjkxN2MtLjk3IDAtMS43NS0uNzgyLTEuNzUtMS43NXMuNzgtMS43NSAxLjc1LTEuNzVjLjk2OCAwIDEuNzUuNzgyIDEuNzUgMS43NXMtLjc4MiAxLjc1LTEuNzUgMS43NXoiLz48L2c+PC9zdmc+' />
                                        <span className='txt-frmt16'>PAYMENTS</span>
                                    </div>
                                    <div className='ms-4'>
                                        <button className="nav-link txt-frmt15" id="gift-cards-tab" data-bs-toggle="pill" data-bs-target="#gift-cards" type="button" role="tab" aria-controls="gift-cards" aria-selected="false">Gift Cards</button>
                                        <button className="nav-link txt-frmt15" id="saved-upi-tab" data-bs-toggle="pill" data-bs-target="#saved-upi" type="button" role="tab" aria-controls="saved-upi" aria-selected="false">Saved UPI</button>
                                        <button className="nav-link txt-frmt15" id="saved-cards-tab" data-bs-toggle="pill" data-bs-target="#saved-cards" type="button" role="tab" aria-controls="saved-cards" aria-selected="true">Saved Cards</button>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='mt-2 ms-2'>
                                        <img width='18' className='mb-1 me-2' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDIzIDE5Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyODc0RjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIwLjUgMi43NWgtOUw5LjI1LjVIMi41QTIuMjQ3IDIuMjQ3IDAgMCAwIC4yNiAyLjc1bC0uMDEgMTMuNUEyLjI1NyAyLjI1NyAwIDAgMCAyLjUgMTguNWgxOGEyLjI1NyAyLjI1NyAwIDAgMCAyLjI1LTIuMjVWNWEyLjI1NyAyLjI1NyAwIDAgMC0yLjI1LTIuMjV6bS01LjYyNSAzLjM3NWEyLjI1NyAyLjI1NyAwIDAgMSAyLjI1IDIuMjUgMi4yNTcgMi4yNTcgMCAwIDEtMi4yNSAyLjI1IDIuMjU3IDIuMjU3IDAgMCAxLTIuMjUtMi4yNSAyLjI1NyAyLjI1NyAwIDAgMSAyLjI1LTIuMjV6bTQuNSA5aC05VjE0YzAtMS40OTYgMy4wMDQtMi4yNSA0LjUtMi4yNXM0LjUuNzU0IDQuNSAyLjI1djEuMTI1eiIvPjxwYXRoIGQ9Ik0tMi00aDI3djI3SC0yeiIvPjwvZz48L3N2Zz4=' />
                                        <span className='txt-frmt16'>MY STUFF</span>
                                    </div>
                                    <div className='ms-4'>
                                        <button className="nav-link txt-frmt15" id="my-coupons-tab" data-bs-toggle="pill" data-bs-target="#my-coupons" type="button" role="tab" aria-controls="my-coupons" aria-selected="false">My Coupons</button>
                                        <button className="nav-link txt-frmt15" id="reviews-ratings-tab" data-bs-toggle="pill" data-bs-target="#reviews-ratings" type="button" role="tab" aria-controls="reviews-ratings" aria-selected="false">My Reviews & Ratings</button>
                                        <button className="nav-link txt-frmt15" id="notifications-tab" data-bs-toggle="pill" data-bs-target="#notifications" type="button" role="tab" aria-controls="notifications" aria-selected="false">All Notifications</button>
                                        <button className="nav-link txt-frmt15" id="wishlist-tab" data-bs-toggle="pill" data-bs-target="#wishlist" type="button" role="tab" aria-controls="wishlist" aria-selected="false">My Wishlist</button>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='my-2 ms-4'>
                                        <a href='#' className='txt-frmt17'>Logout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mx-2 my-2 bg-col3'>
                        <span className='txt-frmt16 ms-2'>Frequently Visited<br></br></span>
                        <a className='nav-link d-inline-flex' href='#'><span className='txt-frmt15 ms-3 me-2'>Track Order </span> </a><a className='nav-link d-inline-flex' href='#'><span className='txt-frmt15'> Help Centre</span></a>
                    </div>

                </div>
                <div className='col-9'>
                    <div className='mx-2 ms-2 me-5 bg-col3'>
                        <div className="tab-content" id="v-pills-tabContent">

                            <div className="tab-pane fade show active" id="profile-info" role="tabpanel" aria-labelledby="profile-info-tab" tabindex="0">
                                <form method='POST' onSubmit={PersonalInfo_Update}>
                                    <div className='my-2 mx-2'>
                                        <div className='col m-0'>
                                            <span className='txt-frmt16 ms-3 my-4'>Personal Information</span> <span className='txt-frmt19'>Edit</span>
                                        </div>

                                        <div className='my-2 mx-2 d-flex'>
                                            <div className='mb-2 mx-2'>
                                                <input className='py-2 ps-2 pe-5' type='text' placeholder={fname} onKeyUp={(e) => setFname(e.target.value)} id='fnameid' />
                                            </div>
                                            <div className='mb-2 mx-2'>
                                                <input className='py-2 ps-2 pe-5' placeholder={lname} onKeyUp={(e) => setLname(e.target.value)} id='lnameid' required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='my-2 mx-2'>
                                        <div className='col m-0'>
                                            <span className='txt-frmt16 ms-3 my-4'>Your Gender</span>
                                        </div>
                                        <div class="form-check ms-3">
                                            <input class="form-check-input me-2" type="checkbox" onClick={(e) => setGender(e.target.value)} value="male" id="genderid" />
                                            <label class="form-check-label" for="maleid">
                                                Male
                                            </label>
                                        </div>
                                        <div class="form-check ms-3">
                                            <input class="form-check-input me-2" type="checkbox" onClick={(e) => setGender(e.target.value)} value="female" id="genderid" />
                                            <label class="form-check-label" for="femaleid">
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                    <div className='my-2 mx-2'>
                                        <div className='ms-3 my-4'>
                                            <span className='txt-frmt16 '>Email Address</span> <span className='txt-frmt19'>Edit</span>
                                        </div>
                                        <div className='ms-3 mb-2'>
                                            <input className='py-2 ps-2 pe-5' type='text' placeholder={email} onKeyUp={(e) => setEmail(e.target.value)} id='emailid' required />
                                        </div>
                                    </div>
                                    <div className='my-2 mx-2'>
                                        <div className='ms-3 my-4'>
                                            <span className='txt-frmt16 mb-2'>Mobile Number</span> <span className='txt-frmt19'>Edit</span>
                                        </div>
                                        <div className='mb-2 ms-3'>
                                            <input className='py-2 ps-2 pe-5' type='number' placeholder={mobile} onKeyUp={(e) => setMobile(e.target.value)} id='mobileid' required />
                                        </div>
                                    </div>
                                    <button className='btn btn-primary my-2 ms-4' type='submit'>Save Data</button>
                                </form>

                                <div className='my-2 mx-2'>
                                    <div className='ms-3 mb-2'>
                                        <h5 className='txt-frmt16 mb-2'>FAQs</h5>
                                        <p className='txt-frmt14'><b>What happens when I update my email address (or mobile number)?</b></p>
                                        <p className='txt-frmt14'>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>

                                        <p className='txt-frmt14'><b>When will my Flipkart account be updated with the new email address (or mobile number)?</b></p>
                                        <p className='txt-frmt14'>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>

                                        <p className='txt-frmt14'><b>What happens to my existing Flipkart account when I update my email address (or mobile number)?</b></p>
                                        <p className='txt-frmt14'>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>

                                        <p className='txt-frmt14'><b>Does my Seller account get affected when I update my email address?</b></p>
                                        <p className='txt-frmt14'>Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>

                                        <button type="button" class="btn txt-frmt19" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Deactivate Account
                                        </button>


                                        <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog ">
                                                <div class="modal-content w-900">
                                                    <div class="modal-title">
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                                                    </div>
                                                    <div class="modal-body ">
                                                        <div class='row d-flex'>
                                                            <div className='w-75'>
                                                                <p><b>When you deactivate your account</b><br></br>

                                                                    <li>You are logged out of your Flipkart Account</li>

                                                                    <li>Your public profile on Flipkart is no longer visible</li>

                                                                    <li>Your reviews/ratings are still visible, while your profile information is shown as ‘unavailable’ as a result of deactivation.</li>

                                                                    <li>Your wishlist items are no longer accessible through the associated public hyperlink. Wishlist is shown as ‘unavailable’ as a result of deactivation</li>

                                                                    <li>You will be unsubscribed from receiving promotional emails from Flipkart</li>

                                                                    <li>Your account data is retained and is restored in case you choose to reactivate your account</li></p>



                                                                <p><b>How do I reactivate my Flipkart account?</b></p>
                                                                <p>Reactivation is easy.<br></br>

                                                                    Simply login with your registered email id or mobile number and password combination used prior to deactivation. Your account data is fully restored. Default settings are applied and you will be subscribed to receive promotional emails from Flipkart.<br></br>

                                                                    Flipkart retains your account data for you to conveniently start off from where you left, if you decide to reactivate your account.<br></br>

                                                                    <b>Remember: Account Reactivation can be done on the Desktop version only.</b></p>
                                                            </div>
                                                            <div className='w-25'>
                                                                <div className='mx-2 my-3'>
                                                                    <h5>Are you sure you want to leave?</h5>
                                                                </div>
                                                                <div className='mx-2 my-3'>
                                                                    <input className='form-control' type='text' placeholder='Mobile' id='mobileid' />
                                                                </div>
                                                                <div className='mx-2 my-3'>
                                                                    <input className='form-control' type='text' placeholder='Enter recieved OTP' id='mobileid' />
                                                                </div>
                                                                <div className='mx-2 my-3'>
                                                                    <button className='btn btn-primary' type='submit'>CONFIRM DEACTIVATION</button>
                                                                </div>
                                                                <div className='mx-2 my-3'>
                                                                    <button className='btn text-primary' type='button' data-bs-dismiss="modal">NO, LET ME STAY!</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                                <div className='m-auto'>
                                    <img width='895' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png' />
                                </div>




                            </div>

                            <div className="tab-pane fade" id="manage-address" role="tabpanel" aria-labelledby="manage-address-tab" tabindex="0">
                                <form method='POST' onSubmit={Address_Update}>
                                    <div className='mx-2 my-2'>
                                        <h5 className='pt-2'>Manage Addresses</h5>
                                    </div>
                                    <div className='mx-3 my-3 brdr_prop ms-2 bg-info-subtle'>
                                        <h6 className='mt-3'>+ Add A New Address</h6>
                                        <button type='submit' className='btn btn-primary my-3 ms-2 rounded-0'>Use my current location</button>
                                        <div className='w-75 bg-tertiary'>
                                            <div className='d-flex gap-2 my-3 ms-2'>
                                                <input className='form-control rounded-0' type='text' placeholder='Enter Your Name' onKeyUp={(e) => setName_add(e.target.value)} id='name1' />
                                                <input className='form-control rounded-0' required type='text' placeholder='Mobile' onKeyUp={(e) => setMobile_add(e.target.value)} id='mobile1' />
                                            </div>
                                            <div className='d-flex gap-2 my-3 ms-2'>
                                                <input className='form-control rounded-0' required type='text' placeholder='Pincode' onKeyUp={(e) => setPincode(e.target.value)} id='pincode' />
                                                <input className='form-control rounded-0' required type='text' placeholder='Locality' onKeyUp={(e) => setLocality(e.target.value)} id='locality' />
                                            </div>
                                            <div className='my-3 ms-2'>
                                                <textarea className='form-control rounded-0' required row='5' col='10' type='text' placeholder='Address (Area and Street)' onKeyUp={(e) => setArea_street(e.target.value)} id='area_street' />
                                            </div>
                                            <div className='d-flex gap-2 my-3 ms-2'>
                                                <input className='form-control rounded-0' required type='text' placeholder='City/District/Town' onKeyUp={(e) => setCity_district(e.target.value)} id='city_district' />
                                                <select className='form-control rounded-0' required name='state' onChange={(e) => { setState(e.target.value) }} aria-label="Default select example" >
                                                    <option value>--Select State--</option>
                                                    <option value='Haryana'>Haryana</option>
                                                    <option value='Punjab'>Punjab</option>
                                                    <option value='Himachal'>Himachal</option>
                                                </select>
                                            </div>
                                            <div className='d-flex gap-2 my-3 ms-2'>
                                                <input className='form-control rounded-0' type='text' placeholder='Landmark(Optional)' onKeyUp={(e) => setLandmark(e.target.value)} id='landmark' />
                                                <input className='form-control rounded-0' type='text' placeholder='Alternate Phone(Optional)' onKeyUp={(e) => setAlt_phone(e.target.value)} id='altphone' />
                                            </div>
                                            <div className='d-flex my-3 ms-2'>
                                                <div className="form-check d-inline-flex me-5">
                                                    <input class="form-check-input" type="radio" onClick={(e) => { setAddress_type(e.target.value) }} value='home' name="flexRadioDefault" id="home" />
                                                    <label class="form-check-label" for="home">
                                                        Home
                                                    </label>
                                                </div>
                                                <div className="form-check d-inline-flex">
                                                    <input class="form-check-input" type="radio" onClick={(e) => { setAddress_type(e.target.value) }} value='work' name="flexRadioDefault" id="work" />
                                                    <label class="form-check-label" for="work">
                                                        Work
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='d-flex my-3 ms-2 gap-5'>
                                                <button className='btn btn-primary w-50 rounded-0' type='submit'>Save</button>
                                                <a className='nav-link text-primary mt-1 w-50 ms-5' role='button' href='#'>Cancel</a>
                                            </div>
                                        </div>
                                    </div>
                                    </form>

                                    <div className='mx-3 my-3 brdr_prop d-flex'>
                                        <div className='col text-start ms-2'>Home</div>
                                        <div className='text-end d-flex'>
                                            <a className='text-end nav-link text-primary me-2' href='#'>Edit</a><a className='text-end nav-link text-primary me-2' href='#'>Delete</a>
                                        </div>
                                    </div>
                                    <div className='mx-3 my-3 brdr_prop d-flex'>
                                        <div className='col text-start ms-2'>Work</div>
                                        <div className='text-end d-flex'>
                                            <a className='text-end nav-link text-primary me-2' href='#'>Edit</a><a className='text-end nav-link text-primary me-2' href='#'>Delete</a>
                                        </div>
                                    </div>























                            </div>

                            <div className="tab-pane fade" id="pan-card-info" role="tabpanel" aria-labelledby="pan-card-info-tab" tabindex="0">
                            <form method='POST' onSubmit={Pancard_Update}>
                                <div className='mx-3 my-2'>
                                    <h5 className='py-3 ps-1'>PAN Card Information</h5>
                                    <div className='col-4 mx-3'>
                                        <div className='row'>
                                            <input type='text' className='form-control mb-4 rounded-0' placeholder={pancard} onKeyUp={(e) => setPancard(e.target.value)} id='pancardid'></input>
                                            {/* <input type='text' className='form-control mb-4 rounded-0' required placeholder='Full Name'></input> */}
                                            <input type='file' id='fileselect' accept='.jpeg,.jpg'  className='form-control mb-5 rounded-0' placeholder='Pan Card Number'></input>
                                        </div>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            I do hereby declare that PAN furnished/stated above is correct and belongs to me, registered as an account holder with www.flipkart.com. I further declare that I shall solely be held responsible for the consequences, in case of any false PAN declaration.
                                        </label>
                                    </div>
                                    <div className='row ms-2 my-3'>
                                        <button type='submit' className='btn btn-primary rounded-0 w-25'>UPLOAD</button>
                                    </div>
                                    <div className='row ms-1 my-3'>
                                        <a type='button' href='#' className='text-primary'>Read Terms & Conditions of PAN Card Information</a>
                                    </div>
                                </div>
                                </form>















                            </div>

                            <div className="tab-pane fade" id="gift-cards" role="tabpanel" aria-labelledby="gift-cards-tab" tabindex="0">
                                <div class='row mx-3 my-3'>
                                    <div className='col'>
                                        <div className='row my-3'>
                                            <div class='col-6'>
                                                <h5>Flipkart Gift Card</h5>
                                            </div>
                                            <div class='col-6 text-end d-flex'>
                                                <a href='#' className='text-primary me-5 nav-link'>Buy A Gift Card</a>
                                                <a href='#' className='text-primary nav-link'>Check Gift Card Balance</a>
                                            </div>
                                        </div>
                                        <div class='row ms-1'>
                                            <div className='col border my-3'>
                                                <a href='#' className='nav-link text-info'>+ Add A Gift CARD</a>
                                            </div>
                                        </div>
                                        <div class='row my-3'>
                                            <div className='col'>
                                                <h5>Buy a Flipkart Gift Card</h5>
                                            </div>
                                            <div className='col text-end'>
                                                <img width='100' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/qwikcilver_c036f3.png' />
                                            </div>
                                        </div>
                                        <div class='row my-3'>
                                            <div className='col-3'>
                                                Personal Gift Cards
                                            </div>
                                            <div className='col-3'>
                                                Corporate Requirements
                                            </div>
                                        </div>
                                        <div class='row'>
                                            <div className='col-6 my-3'>
                                                <div class="form-floating mb-3">
                                                    <input type="email" class="form-control" id="floatingInput" placeholder="Receiver's Email ID" />
                                                    <label for="floatingInput">Receiver's Email ID</label>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input type="text" class="form-control" id="floatingPassword" placeholder="Receiver's Name" />
                                                    <label for="floatingPassword">Receiver's Name</label>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input type="email" class="form-control" id="floatingInput" placeholder="Gifter's Name(optional)" />
                                                    <label for="floatingInput">Gifter's Name(optional)</label>
                                                </div>
                                                <div class="row g-2">
                                                    <div class="col-md-8">
                                                        <div class="form-floating">
                                                            <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                                                                <option selected>Select</option>
                                                                <option value="1">100</option>
                                                                <option value="2">250</option>
                                                                <option value="3">500</option>
                                                            </select>
                                                            <label for="floatingSelectGrid">Card Value in ₹</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-floating mb-3">
                                                            <input type="number" class="form-control" id="floatingInputGrid" placeholder="1" value="1" />
                                                            <label for="floatingInputGrid">No. of cards</label>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="form-floating mb-3">
                                                    <textarea class="form-control" placeholder="Write a message(optional 100 character's)" id="floatingTextarea" rows='4' cols='6'></textarea>
                                                    <label for="floatingTextarea">Write a message(optional 100 character's)</label>
                                                </div>
                                                <div className='mb-3'>
                                                    <button type='submit' className='btn btn-warning rounded-0' href='#'>Buy Gift Card For ₹0</button>
                                                </div>

                                            </div>
                                            <div className='col-6 my-3'>
                                                <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/giftcard_509752.png' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col'>
                                                <h5>FAQs</h5>
                                                <p className='lh-lg fs-6'><b>How do I buy / gift a Flipkart Gift Card?</b><br></br>
                                                    <ul>
                                                        <li>Enter the name and email address of the person you want to send the Flipkart Gift Card to.</li>
                                                        <li>Select the value of the card you would like to purchase, then click 'Proceed To Pay'.</li>

                                                        <li>You'll now see the payment options. You can pay by Credit Card / Debit Card / ATM Card / Netbanking. Proceed to pay using your preferred choice. If you need to make any changes to the Gift Card value, you can always click 'Edit' to modify it.</li>

                                                        <li>Complete the checkout process to receive an email with the Gift Card details.</li>
                                                    </ul>

                                                    <b>How do I pay with a Flipkart Gift Card?</b>
                                                    <ul>

                                                        <li>Go to flipkart.com and select the items you want to purchase. When you are ready to checkout, click 'Proceed To Pay'.</li>

                                                        <li>Select the 'Pay By Gift Card' option.</li>

                                                        <li>Enter your 16-digit gift card number and the corresponding 6-digit PIN number when prompted.</li>

                                                        <li>If the Gift Card value doesn't cover your Order total, you will be prompted to select an additional payment method.</li>

                                                    </ul>
                                                    NOTE: Funds will be deducted from your Flipkart Gift Card when you place your order. In case of any adjustment or cancellation at a later stage, we will credit the refund back to your Gift Card.<br></br>



                                                    <b>Does my Flipkart Gift Card expire?</b><br></br>

                                                    All Flipkart Gift Cards expire 1 year from the date of their creation.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>







                                <div className="tab-pane fade" id="saved-upi" role="tabpanel" aria-labelledby="saved-upi-tab" tabindex="0">Tab5</div>
                                <div className="tab-pane fade" id="saved-cards" role="tabpanel" aria-labelledby="saved-cards-tab" tabindex="0">Tab6</div>
                                <div className="tab-pane fade" id="my-coupons" role="tabpanel" aria-labelledby="my-coupons-tab" tabindex="0">Tab7</div>
                                <div className="tab-pane fade" id="reviews-ratings" role="tabpanel" aria-labelledby="reviews-ratings-tab" tabindex="0">Tab7</div>
                                <div className="tab-pane fade" id="notifications" role="tabpanel" aria-labelledby="notifications-tab" tabindex="0">Tab9</div>
                                <div className="tab-pane fade" id="wishlist" role="tabpanel" aria-labelledby="wishlist-tab" tabindex="0">Tab10</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default My_Profile;