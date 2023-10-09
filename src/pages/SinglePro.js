import { useState, useEffect } from 'react';
import axios from 'axios';


function SinglePro() {
    const [productdata, setProductdata] = useState('');

    useEffect(
        () => { fetchproduct(); }, []
    )

    const fetchproduct = async () => {
        const response = await axios.get('http://127.0.0.1:5001/singlepro/' + window.location.pathname.split('/product/')[1]);
        setProductdata(response.data.product);
        console.log(response.data.product);
        console.log(window.location.pathname.split('/product/')[1]);
    }

    return (
        <>
            <div className='container_fluid'>
                <div className='row'>
                    <div className='col-6 mt-5 text-center'>
                    <div className='box1 py-5 ms-5'>
                        <img src={productdata.image}></img>
                        </div>
                    </div>
                    <div className='col-6 mt-5 '>
                        <div className='box1 py-3 ps-3'>
                        <h5 >{productdata.title}</h5>
                        <p className='pe-3'>{productdata.description}</p>
                        <p className='txt-frmt2'><b>₹{productdata.price}</b></p>
                        <div class='d-flex gap-3'>
                            <div >
                                <button  className='btn btn-warning btn-control1' type='submit' href='#'>ADD TO CART</button>
                            </div> 
                            <div >
                                <button  className='btn btn-warning btn-control1' type='submit' href='#'>BUY NOW</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SinglePro;