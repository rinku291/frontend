import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


function Home() {

    const [productsall, setProductsall] = useState([]);

    useEffect(() => { fetchproductsall(); }, []);

    const fetchproductsall = async () => {
        const response = await axios.get('http://localhost:5001/ProAll');
        setProductsall(response.data.products);
        console.log(productsall);
    }


    return (
        <>
        <div className='container-fluid'>
            <div className='row my-3'>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/assets/fp-slideshow-1.webp" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="/assets/fp-slideshow-2.webp" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="/assets/fp-slideshow-3.webp" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
        </div>
            <div className='container-fluid bg-col1'>
                <div className='row'>
                    {productsall && productsall.map(item => {
                        return (
                            <>
                                <div className='col-3 gap-2 bg-tertiary'>
                                    <div className='card item-frmt my-2'>
                                        <img className='img-prop2 m-auto mt-2' src={item.image} height='150px' />
                                        <div className='card-body'>
                                            <h5 className='txt-frmt4'>{item.title}</h5>
                                            <p>{item.description}</p>
                                            <div className='d-flex'>
                                            <p className='pt-1 txt-frmt2'>₹{item.price}</p>
<a className='ms-5 txt-frmt3 btn btn-primary' href={'/SinglePro/'+item._id}>View Details</a></div>

                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}

                </div>
            </div>
        </>
    );
}

export default Home;