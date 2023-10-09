import axios from 'axios';
import { useState, useEffect } from 'react';

function Product_Details() {
    const [product, setProduct] = useState('');
    const [count, setCount] = useState(1);


    useEffect(() => { fetch_single_pro(); }, []);

    const fetch_single_pro = async () => {
        const response = await axios.post('http://127.0.0.1:5001/SingleProductFetch', {
            product_id: window.location.pathname.split('/Product_Details/')[1]

        }


        );
        setProduct(response.data.product);
        console.log(response.data.product);
    }



    function addCart(productid, instock) {
        if (instock >= 1) {
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
            const response = axios.post('http://127.0.0.1:5001/addtocart', { productid: productid, count: count });
            console.log(response.data);
            window.location.href = '/Cart';
        }
        else {
            alert('Product is out of stock');
        }
    }




    return (
        <><div className='container-fluid bg-white'>
            <div className='row'>
                <div className='col-5'>
                    <div className='box11 border mt-4'>
                        <img className='img-prop7' src={product.image} />
                    </div>
                    <div className='row gap-2 my-3'>
                        <div className='col'>
                            <button onClick={(e) => addCart(product._id, product.in_stock)} className='btn btn-warning btn-control2 rounded-0 w-100 text-white text-bold'><svg class="mb-1 me-1" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path class="" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>ADD TO CART</button>
                        </div>
                        <div className='col'>
                            <button href='#' className='btn btn-control3 rounded-0 w-100 text-white text-bold'>BUY NOW</button>
                        </div>

                    </div>
                </div>
                <div className='col-7'>
                    <div className='mt-4 ms-3 me-5'>
                        <h5 className='mb-3 fw-semibold'>{product.description}</h5>
                        <span className='bg-success text-white d-inline-flex me-2 px-1 mb-2 rounded'>{product.star_rating}<img className='mt-1 ms-1' height='15' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" /></span>
                        <span className='text-secondary d-inline-flex me-5'>{product.ratings_reviews}</span>
                        <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png' width='70' height='20' />
                        <div>
                            <h3 className='mt-2 d-inline-flex mb-0 me-4'>₹{product.price}</h3><span className='text-success my-2 pb-2 d-inline-flex fw-bold'>{product.special_discount}% off</span>
                        </div>
                        <div >
                            <h5 className='fw-semibold'>Available offers</h5>
                            <p className='txt-frmt22 mt-3 mb-4 text-dark'>{product.available_offers}</p>
                        </div>
                        <div className='row'>
                            <div className='col-3'>
                                <h5 className='fw-semibold'>Highlights</h5>
                            </div>
                            <div className='col-9'>
                                <p className='txt-frmt22 text-dark'>{product.product_features}</p>
                            </div>
                            <div className='col-4 d-flex'>
                                <span className='fw-semibold ms-1 me-1 text-primary'>Available In Stock: </span><span className='fw-semibold text-primary'>{product.in_stock}</span>
                            </div>
                            <div className='offset-4 col-4'>
                                <p className='txt-frmt22 fw-semibold text-primary'>2 Year Warranty</p>
                                <p className='txt-frmt22 fw-semibold mt-3 text-primary'>Cash on Delivery available</p>
                            </div>


                        </div>

                    </div>

                </div>
            </div>



        </div></>
    );
}

export default Product_Details;

