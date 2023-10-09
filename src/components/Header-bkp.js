import { useEffect, useState } from 'react';
import axios from 'axios';


function Header() {
    const [categories, setCategories] = useState([]);

    useEffect(
        () => { fetchcategory(); }, []
    );

    const fetchcategory = async () => {
        const response = await axios.get('http://127.0.0.1:5001/catfetch');

        setCategories(response.data.catall);
    }

    //console.log(categories);



    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">

                    <a class="navbar-brand" href="#"><img className="me-2 mb-1" src="/assets/meesho-logo.png" /></a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2 frm-control" type="search" placeholder="Try Saree, Kurti or Search by Product Code" aria-label="Search" />
                    </form>



                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav mb-2 mb-lg-0 ">
                            <li class="nav-item">
                                <a class="nav-link active ps-3 txt-frmt1" aria-current="page" href="#">Download App</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link txt-frmt1" href="#">Become A Supplier</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle txt-frmt1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Profile
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/SignUp">SignUp Here</a></li>
                                    <li><a class="dropdown-item" href="/SignIn">Log In</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="/CatAdd">Add New Category</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="/ProductAdd">Add New Product</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link txt-frmt1" aria-disabled="true">Cart</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="nav-scroller py-3 mb-2 header-frmt">
                <nav className="nav d-flex justify-content-between">

                    {categories && categories.map(item => {

                        return (
                            <a className="link-secondary" href={'/cat/'+item._id} target='_blank'>
                                {item.category_name}
                            </a>
                        
                        );
                    })}
                </nav>
            </div>
        </>
    );
}

export default Header;