import { useEffect, useState } from 'react';
import axios from 'axios';


function Header() {
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubCategories] = useState([]);
    const user = localStorage.getItem('token');


    useEffect(
        () => {
            fetchcategory();

        }, []
    );

    const fetchcategory = async () => {
        const response = await axios.get('http://127.0.0.1:5001/catfetch');
        //console.log(response);
        setCategories(response.data.catall);
        
    }

    


    const fetchSubCat = async (id) => {
        const response = await axios.post('http://127.0.0.1:5001/subcatfetch', {
            parent_id: id
        });
        console.log(response.data.catall);

        setSubCategories(response.data.catall);
    }

    // const mobilecat = async (id, name) => {
    //     const response = await axios.post('http://127.0.0.1:5001/subcatfetch', {
    //         parent_id: id,
    //         category_name: 'Samsung'
    //     });
    //     console.log(response.data.catall);

    //     setSubCategories(response.data.catall);
    // }

    const Logout = () => {
        localStorage.removeItem('token');
        window.location.href = 'http://localhost:3000';

    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-col1">
                <div className="container-fluid ">
                    <div className='col d-block'>
                        <div className='text-start'>
                            <a className="navbar-brand " href="#"><img className='img-fluid w-100 pe-4' src="/assets/fp-logo1.svg" height='16px' width='16px' /></a>
                        </div>
                        <div className='d-flex ps-5 text-start'>
                            <h6 className='txt-frmt11'><i>Explore<span className='txt-frmt12'> Plus</span></i></h6><img className='img-fluid mb-2 ps-1' src="/assets/fp-logo2.png" width='12' />
                        </div>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <form className="col-4" role="search">
                        <input className="form-control py-2 shadow-sm text-tertiary" type="search" placeholder="Search for Products, Brands & More" aria-label="Search" />
                    </form>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-lg-0  gap-5">
                            {!user && <li className="nav-item">
                                <a className="nav-link" href="/SignIn"><h5 className='txt-frmt1'>Log In</h5></a>
                            </li>
                            }

                            <div>
                                <li className="nav-item">
                                    <a className="nav-link dropdown-toggle text-white  fw-semibold mb-0" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        More
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/ProfilePg"><span className='txt-frmt14'>Notification Preferences</span></a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/CatAdd"><span className='txt-frmt14'>24x7 Customer Care</span></a></li>
                                        <li><a className="dropdown-item" href="/Subcatadd"><span className='txt-frmt14'>Advertise</span></a></li>
                                        <li><a className="dropdown-item" href="/ProductAdd"><span className='txt-frmt14'>Download App</span></a></li>


                                    </ul>
                                </li>
                            </div>
                            <li className="nav-item">
                                <a className="nav-link active text-white  mb-0  fw-semibold" aria-current="page" href="#">Become a Seller</a>
                            </li>
                            {user &&
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white  mb-0  fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        My Account
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/ProfilePg"><span className='txt-frmt14'>My Profile</span></a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/CatAdd"><span className='txt-frmt14'>Add Category</span></a></li>
                                        <li><a className="dropdown-item" href="/Subcatadd"><span className='txt-frmt14'>Add Sub Category</span></a></li>
                                        <li><a className="dropdown-item" href="/ProductAdd"><span className='txt-frmt14'>Add Product</span></a></li>
                                        <li><a className="dropdown-item" href="/Order_Status_Pg"><span className='txt-frmt14'>My Orders</span></a></li>
                                        <li><a className="dropdown-item" href="/My_Profile"><span className='txt-frmt14'>My Profile</span></a></li>
                                        <li><a className="dropdown-item" href="/ProfileInfoAdd"><span className='txt-frmt14'>ProfileInfo</span></a></li>

                                        <li><a className="dropdown-item" onClick={Logout} href="#"><span className='txt-frmt14'>Logout</span></a></li>


                                    </ul>
                                </li>
                            }
                            <li className="nav-item">
                                <a className="nav-link text-white  mb-0 fw-semibold" href='/Cart' aria-disabled="true">Cart</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="nav-scroller pt-1 text-white header-frmt">
                <nav className="nav d-flex justify-content-between">

                    {categories && categories.map(item => {

                        return (
                            <div className="dropdown d-block text-center ">

                                <a className="btn dropdown-toggle" href="#" onClick={(e) => fetchSubCat(item._id)} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={item.category_image} width={60} /> <br />
                                    <span className='txt-frmt13'>{item.category_name}</span> </a>

                                {subcategories &&
                                    <ul className="dropdown-menu dropdown-toggle bg-col2">

                                        {subcategories.map(itemsub => {

                                            return (
                                        
                                                <li><a className="dropdown-item" href={'/Home_Subcat_Pro/' + item.category_name + "/" + itemsub._id}>{itemsub.category_name}</a></li>
                                               

                                            )
                                        })}

                                    </ul>

                                }
                            </div>
                        );
                    })}
                </nav>
            </div>
        </>
    );
}

export default Header;