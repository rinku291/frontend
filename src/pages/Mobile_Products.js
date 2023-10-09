import { useEffect, useState } from "react";
import axios from 'axios';

function Mobiles() {

    const [products, setProducts] = useState('');
    const [min_price, setMin_price] = useState('0');
    const [max_price, setMax_price] = useState('1000000');
    const [star_rating, setStar_rating] = useState('0');
    const [count, setCount] = useState('');

    function HandleSubmit(type, value) { //This function needs to be defined above useeffect function for filter to work properly
        if (type == "min") {
            setMin_price(value);
        }
        if (type == "max") {
            setMax_price(value);
        }
        if (type=='rating')
        {
            setStar_rating(value);
            console.log(star_rating);
        }
    }

    console.log(min_price,max_price,star_rating);

    useEffect(() => { fetch_procducts(); }, [min_price,max_price,star_rating]);

    const fetch_procducts = async () => {
        const response = await axios.post('http://127.0.0.1:5001/subcat_products_home/' + window.location.pathname.split('/Home_Subcat_Pro/Mobiles/')[1],
        {min_price:min_price,max_price:max_price,star_rating});
        setProducts(response.data.products);
        setCount(response.data.products.length);
    }

    console.log(products);   

    return (
        <>
            <div className="container-fluid">
                <div className='row'>
                    <div className="col">
                        <div className='row'>
                            <div className="col-3">
                                <div className="row border mx-1 mt-2 bg-white">
                                    <div className="col">
                                        <h5>Filters</h5>
                                    </div>
                                    <div className="col">
                                        <button type='submit' className="text-primary border-0 bg-white txt-frmt20  pe-0">CLEAR ALL</button>
                                    </div>
                                </div>
                                <div className="row border-bottom mx-1 bg-white">

                                    <h6>CATEGORIES</h6>
                                    <a href='#' className="text-secondary ms-1 links">Computers</a>
                                    <a href='#' className="text-secondary ms-1 links">Computer Components</a>
                                    <h6>Mobiles</h6>
                                </div>
                                <div className="row border-bottom mx-1 bg-white">
                                    <label for="customRange3" class="form-label"><h6>Price</h6></label>
                                    <input type="range" class="form-range text-dark" min="0" max="50000" step="5000" id="customRange3"></input>
                                    <div className="col my-1">
                                        <select class="form-select rounded-0" aria-label="Default select example" onChange={(e) => HandleSubmit("min", e.target.value)}>
                                            <option selected>Min</option>
                                            <option value="10000">10000</option>
                                            <option value="15000">15000</option>
                                            <option value="20000">20000</option>
                                            <option value="30000">30000</option>
                                        </select>
                                    </div>

                                    <div className="col my-1">
                                        <select class="form-select rounded-0" aria-label="Default select example" onChange={(e) => HandleSubmit("max", e.target.value)}>

                                            <option value="15000">15000</option>
                                            <option value="20000">20000</option>
                                            <option value="30000">30000</option>
                                            <option value="1000000" selected>+30000</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row border-bottom mx-1 bg-white">
                                    <div class="accordion accordion-flush" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingOne">
                                                <button class="accordion-button bg-white border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Customer Ratings
                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne">
                                                <div class="accordion-body">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="4" id="rating4" onClick={(e)=>HandleSubmit("rating",e.target.value)}/>
                                                        <label class="form-check-label" for="rating4">
                                                            4★ & above
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="3" id="rating3" onClick={(e)=>HandleSubmit("rating",e.target.value)}/>
                                                        <label class="form-check-label" for="rating3">
                                                            3★ & above
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="2" id="rating2" onClick={(e)=>HandleSubmit("rating",e.target.value)}/>
                                                        <label class="form-check-label" for="rating2">
                                                            2★ & above
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="1" id="rating1" onClick={(e)=>HandleSubmit("rating",e.target.value)}/>
                                                        <label class="form-check-label" for="rating1">
                                                            1★ & above
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item accordion-flush">
                                            <h2 class="accordion-header" id="headingTwo">
                                                <button class="accordion-button collapsed bg-white border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    RAM
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo">
                                                <div class="accordion-body">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="4" id="rating4" />
                                                        <label class="form-check-label" for="rating4">
                                                            4 GB
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="3" id="rating3" />
                                                        <label class="form-check-label" for="rating3">
                                                            6 GB
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="2" id="rating2" />
                                                        <label class="form-check-label" for="rating2">
                                                            8 GB & above
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item accordion-flush">
                                            <h2 class="accordion-header" id="headingThree">
                                                <button class="accordion-button bg-white border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Internal Storage
                                                </button>
                                            </h2>
                                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree">
                                                <div class="accordion-body">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="128" id="rating4" />
                                                        <label class="form-check-label" for="rating4">
                                                            128 - 255.9 GB
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="64" id="rating3" />
                                                        <label class="form-check-label" for="rating3">
                                                            64 - 127.9 GB
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9 ">
                                <div className="row border me-2 my-2 bg-white">
                                    <div className="col ">
                                        <a href='#' className="ms-1 txt-frmt20 links">Computers</a>
                                        <h6 className='ms-1'>Mobiles<span className="txt-frmt20 ms-1">(Showing 1 – {count} products of {count} products)</span></h6>
                                    </div>
                                </div>

                                {products && products.map(item => {
                                    return (
                                        <>
                                            <div className="row border me-2 py-3 bg-white">
                                                <div className="col-9 ">
                                                    <div className="row my-3">
                                                        <div className="col-4">
                                                            <img className='img-prop6' src={item.image} />
                                                        </div>
                                                        <div className="col-8 my-3">
                                                            <a className='links' href={'/Product_Details/' + item._id}><h5 className="ms-5">{item.title}</h5></a>
                                                            <p className="ms-5"><span className="bg-success rounded text-white px-1 me-1">{item.star_rating}<img className='mb-1' height='14' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" /></span>
                                                                <span className="text-secondary">{item.ratings_reviews}</span></p>
                                                            <h6 className="ms-5 text-dark fw-semibold">Special Offers:</h6>
                                                            <p className="ms-5 txt-frmt21"><span className="text-secondary">{item.available_offers}</span></p>
                                                            <h6 className="ms-5 text-dark fw-semibold">Highlights:</h6>
                                                            <p className="ms-5 txt-frmt21"><span className="text-secondary">{item.product_features}</span></p>
                                                            <span className="ms-5 text-dark fw-semibold">Available In Stock: </span>
                                                            <span className="text-dark fw-semibold">{item.in_stock}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-3 ">
                                                    <div className="d-flex justify-content-start gap-3 align-items-center mt-4">
                                                        <h4 className="mb-0">₹{item.price}</h4>
                                                        <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png' width='70' height='20' />
                                                    </div>
                                                    <span className="text-success fw-semibold">{item.special_discount}% off</span>
                                                    <p>Free Delivery</p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Mobiles;

