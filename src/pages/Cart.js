import { useState, useEffect } from 'react';
import axios from 'axios';


function Cart() {

    const [cart_items, setCart_items] = useState('');
    const [tot_count, setTot_count] = useState('');
    const [count, setCount] = useState();
    const [increment, setIncrement] = useState('');
    const [initial_price, setInitial_price] = useState('');
    const [total_discount, setTotal_discount] = useState('');
    const [final_price, setFinal_price] = useState('');
    const [product_id, setProduct_id] = useState('');

    useEffect(() => { productfetch(); }, []);

    const productfetch = async () => {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
        const response = await axios.get('http://127.0.0.1:5001/showcart_items');
        setCart_items(response.data.cart_items);
        setProduct_id(response.data.cart_items.product_id);
        const catalldata = response.data.cart_items;

        console.log(response.data);
        var init_price = 0;
        var tot_discount = 0;
        var fin_price = 0;
        var item_count = 0;
        //var disc_price = 0;

        catalldata.forEach((item) => {
            //console.log(item.product_id.price);

            item_count = item.count;
            init_price += item_count * item.product_id.price;

            tot_discount += Math.round(item_count * ((item.product_id.price) * (item.product_id.special_discount) / 100));
            item['disc_price'] = Math.round(item.product_id.price - (item.product_id.price) * (item.product_id.special_discount) / 100);

        });

        fin_price = Math.round(init_price - tot_discount);

        setInitial_price(init_price);
        setTotal_discount(tot_discount);
        setFinal_price(fin_price);

    }

    function Remove_Item(id) {
        const res = axios.post('http://127.0.0.1:5001/deletefromcart', { id: id });
        console.log(res.data);
        console.log(id);
        productfetch();
    }

    function Update_Count(id, item_count, increment) {
      
        
        if (increment == true) {
            var itemcount = item_count + 1;
            console.log(id,itemcount,increment);
            const res = axios.post('http://127.0.0.1:5001/Updatecart', {id:id,count:itemcount});
        }
        else
        {
            if(!(item_count==1))
            {
            var itemcount = item_count - 1;
            console.log(id,itemcount,increment);
            const res = axios.post('http://127.0.0.1:5001/Updatecart', {id:id,count:itemcount});
            }
        }
        productfetch();

    }


    return (

        <>
            <div className='container-fluid bg-secondary-subtle'>
                <div className='row border'>
                    <div className='col-8'>
                        <div className='row mx-2 my-2 bg-white border'>
                            <div className='col my-2 text-center'>
                                <h5>Flipkart</h5>
                            </div>
                            <div className='col my-2 text-center'>
                                <h5>Grocery</h5>
                            </div>
                        </div>
                        <div className='row mx-2 my-2 bg-white border border-shadow'>
                            <div className='col text-start my-2'>
                                <p>From Saved Adresses</p>
                            </div>
                            <div className='col text-end my-2 pt-1'>
                                <button type='submit' href='#' className='border bg-white py-1 px-1 text-primary'>Enter Delivery Pincode</button>
                            </div>
                        </div>
                        <div className='row mx-2 my-2 bg-white border'>
                            <div className='col-8'>
                                {cart_items && cart_items.map(item => {
                                    return (<>
                                        <div className="row mt-4 ms-3 ">
                                            <div className="col-3">
                                                <img width='150px' src={item.product_id.image}></img>
                                                <div className="row mt-3 ms-1">

                                                    <button className="border d-inline-flex bg-white rounded-circle w-25 text-center fw-semibold" type='submit' onClick={(e) => Update_Count(item._id, item.count, false)}>-</button>
                                                    <span className="border bg-white d-inline-flex w-25 mx-1 text-center fw-semibold">{item.count}</span>
                                                    <button className="border d-inline-flex bg-white rounded-circle w-25 fw-semibold" type='submit' onClick={(e) => Update_Count(item._id, item.count, true)}>+</button>

                                                </div>
                                            </div>
                                            <div className="col-9">
                                                <div className='row ms-4'>
                                                    <div className="col ms-2">
                                                        <h5>{item.product_id.title}</h5>
                                                        <p>Black</p>
                                                        <p>Seller:SVPeripherals</p>
                                                        <p><s>{item.product_id.price}</s> ₹{item.disc_price} <span className="text-success">{item.product_id.special_discount}% off</span></p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col ms-5">
                                                        <button role='button' type='submit' className='nav-link text-primary' href='#'><h6>Save For Later</h6></button>
                                                    </div>
                                                    <div className="col ms-5">
                                                        <button type='submit' className='nav-link text-primary' onClick={(e) => Remove_Item(item._id)}><h6>Remove</h6></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>);
                                })}

                            </div>
                            <div className='col-4'>
                                <p>Delivery by Tue Sep 12 | Free<s>₹40</s></p>
                            </div>
                            <div className="row">
                                <div className="col text-end mb-2 ">
                                    <a type='Submit' className="btn btn-warning rounded-0" href='/Place_Orders'>Place Order</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='col-4 bg-white my-2 border'>
                        <div className="row ps-3 py-2 mb-2 bg-white">
                            <h5>Price Details</h5>
                        </div>
                        <div className="row mx-2 my-2 bg-white ">
                            <div className="col">
                                <p>Price ({tot_count} item)</p>
                            </div>
                            <div className="col text-end">
                                <p>₹{initial_price}</p>
                            </div>
                        </div>
                        <div className="row mx-2 my-2 bg-white ">
                            <div className="col">
                                <p>Discount</p>
                            </div>
                            <div className="col text-end">
                                <p className="text-success">− ₹{total_discount}</p>
                            </div>
                        </div>
                        <div className="row mx-2 my-2 bg-white ">
                            <div className="col">
                                <p>Delivery Charges</p>
                            </div>
                            <div className="col text-end">
                                <p className="text-success">Free</p>
                            </div>
                        </div>
                        <div className="row mx-2 my-2 py-3 bg-white border-top border-bottom">
                            <div className="col">
                                <h5>Total Amount</h5>
                            </div>
                            <div className="col text-end">
                                <h5 >₹{final_price}</h5>
                            </div>
                        </div>
                        <div className="row mx-2 my-2 bg-white ">
                            <h6 className="text-success pt-3">You will save ₹{total_discount} on this order</h6>
                        </div>

                    </div>
                </div>

            </div>

        </>
    );
}

export default Cart;