import { useState, useEffect } from 'react';
import axios from 'axios';

function Order_Status_PG() {

    const [tot_orders,setTot_orders] = useState('');
    //const [itemid,setItemid] = useState('');
    const [array,setArray] = useState([]);

    useEffect(() => { FetchOrderDetails(); }, []);

    const FetchOrderDetails = async () => {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
        const response = await axios.get('http://127.0.0.1:5001/fetch_order_details');
        console.log(response.data.orders);
        
        var final = [];
        var i;
        for(i=0;i<(response.data.orders.length);i++)
        {
        
        final = final.concat(response.data.orders[i].order_details);
        console.log(response.data.orders[i].order_details);
        }
        setArray(final);
        //console.log(array);
    }

    return (
        <>
            <div className="container-fluid bg-col2">
                <div className="row">
                    <div className="col-3 mt-3">
                        <div className="border shadow bg-white ps-3">
                            <h6 className="my-2">Filters</h6>
                        </div>
                        <div className="border shadow bg-white ps-3">
                            <h6 className='mt-2'>Order Status</h6>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="OrderStatus1" />
                                <label class="form-check-label" for="OrderStatus1">
                                    On the Way
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="OrderStatus1" />
                                <label class="form-check-label" for="OrderStatus2">
                                    Delivered
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="OrderStatus3" />
                                <label class="form-check-label" for="OrderStatus3">
                                    Cancelled
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="OrderStatus4" />
                                <label class="form-check-label" for="OrderStatus4">
                                    Returned
                                </label>
                            </div>
                            <h6 className='mt-2'>Order Time</h6>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="OrderTime1" />
                                <label class="form-check-label" for="OrderTime1">
                                    Last 30 Days
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="OrderTime2" />
                                <label class="form-check-label" for="OrderTime2">
                                    2023
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="OrderTime3" />
                                <label class="form-check-label" for="OrderTime3">
                                    2022
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="OrderTime4" />
                                <label class="form-check-label" for="OrderTime4">
                                    2021
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="OrderTime5" />
                                <label class="form-check-label" for="OrderTime5">
                                    2020
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="OrderTime6" />
                                <label class="form-check-label" for="OrderTime6">
                                    Older
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 mt-3 ms-0 bg-col2">
                        {/* <div className="row  mb-2 "> */}
                            <form class="form-inline w-75">
                                <div class="input-group mb-2 frm_cntrl1">
                                    <input type="text" class="form-control rounded-0" placeholder="Search Your Order's Here" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div class="input-group-append">
                                        <span class="input-group-text rounded-0 frm_cntrl2 text-center ps-4 bg-primary text-white fs-small txt-frmt22" id="basic-addon2">Search Orders</span>
                                    </div>
                                </div>
                            </form>
                        {/* </div> */}
{array && array.map(element =>{
    return(<>

                         <div className="row bg-white ms-1 me-4 border my-3 py-2">
                            <div className="col-6 ">
                                <div className="row">
                                <span className=' fw-semibold' >{element.product_id.title}</span>
                                <img className='my-3 img-prop8 text-center ms-5' src={element.product_id.image}/>                                    
                                    <span className='mb-2 txt-frmt22' >{element.product_id.description}</span>
                                </div> 
                            </div>
                            <div className="col-2">
                                <span className='my-3 fw-semibold'>₹{element.product_id.price}</span>
                            </div>
                            <div className="col-4">
                                <span className='mb-2 fw-semibold d-inline-block txt-frmt22 text-dark'>Order placed: {element.product_id.createdAt}</span>
                                <span className='mb-2 d-inline-block txt-frmt22 text-dark'>Your item has been delivered</span>
                                <span className='mb-2 text-primary d-inline-block txt-frmt22' >Rate & Review Product</span>
                            </div>
                        </div> 
                        </>)
})}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Order_Status_PG;