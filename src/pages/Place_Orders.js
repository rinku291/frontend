import { useEffect, useState } from 'react';
import axios from 'axios';





function Place_Orders() {

    const [tot_count, setTot_count] = useState('');
    const [fin_price, setFin_price] = useState('');
    const [tot_savings, setTot_savings] = useState('');
    const [cart_items, setCart_items] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [pincode, setPincode] = useState('');
    const [locality, setLocality] = useState('');
    const [area_street, setArea_street] = useState('');
    const [city_district, setCity_district] = useState('');
    const [state, setState] = useState('');
    const [landmark, setLandmark] = useState('');
    const [alt_phone, setAlt_phone] = useState('');
    const [address_type, setAddress_type] = useState('');
    const [user_id, setUser_id] = useState('');
    const [payment_id, setPayment_id] = useState('');
    // const [productid, setProductid] = useState([]);
    // const [instock, setInstock] = useState([]);
    // const [quantitysold, setQuantitysold] = useState([]);
    const [order_details, setOrder_details] = useState([]);
    const [in_stock, setIn_stock] = useState([]);
    const [mail_data, setMail_data] = useState([]);


    useEffect(() => { fetch_cart_items(); }, []);





    const fetch_cart_items = async () => {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
        const response = await axios.get('http://127.0.0.1:5001/showcart_items');

        var totcount = 0;
        var totprice = 0;
        var totsavings = 0;

        //var objs = {};
        var order_list = [];
        var instock = [];
        var sendmail = [];

        setCart_items(response.data.cart_items);

        console.log(response.data.cart_items);

        const catalldata = response.data.cart_items;

        catalldata.forEach(item => {
            var obj1 = {};
            var obj2 = {};
            var obj3 = {};
            totcount += item.count;
            totprice += (item.count * item.product_id.price);
            totsavings += Math.round(item.count * ((item.product_id.special_discount * item.product_id.price) / 100));
            //console.log(totcount,totprice,totsavings);
            obj1["product_id"] = item.product_id;
            obj1["item_count"] = item.count;
            obj1["discounted_price"] = Math.round(item.count * (item.product_id.price - ((item.product_id.special_discount * item.product_id.price) / 100)));
            order_list.push(obj1);

            obj2["productid"] = item.product_id._id;
            obj2["quantitysold"] = (item.product_id.quantity_sold + item.count);
            var tmp = (item.product_id.quantity_sold + item.count);
            obj2["instock"] = (item.product_id.total_quantity - tmp);
            //console.log()
            instock.push(obj2);

            obj3["title"] = item.product_id.title;
            obj3["description"] = item.product_id.description;
            obj3["features"] = item.product_id.product_features;
            obj3["image"] = item.product_id.image;
            obj3["item_count"] = item.count;
            obj3["tot_price"] = Math.round(item.count * (item.product_id.price - ((item.product_id.special_discount * item.product_id.price) / 100)));
            obj3["purchase_date"] = item.createdAt;
            sendmail.push(obj3);
        });

        var finprice = totprice - totsavings;
        setTot_count(totcount);
        setFin_price(finprice);
        setTot_savings(totsavings);
        setOrder_details(order_list);
        setIn_stock(instock);
        setMail_data(sendmail);
        //sendmail.push({"Totprice":finprice});
        console.log(order_list);
        console.log(in_stock);
        console.log(sendmail);
    }

    const InStock_Update = async () => {
        var i;

        for (i = 0; i < in_stock.length; i++) {
            var id = in_stock[i].productid;
            var quant_sold = in_stock[i].quantitysold;
            var stock = in_stock[i].instock;
            const update = await axios.post('http://127.0.0.1:5001/update_instock_count', {
                productid: id,
                quantitysold: quant_sold,
                instock: stock
            })
            if (update) {
                console.log(update.data);
                //console.log(in_stock[i].productid, in_stock[i].quantitysold, in_stock[i].instock);
            }
        }
    }

    function PaymentHandle() {
        var options = {
            "key": "rzp_test_PHCjpZuEgzxfr3", // Enter the Key ID generated from the Dashboard
            "amount": fin_price * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Acme Corp",
            "description": "Test Transaction",
            //"image": "https://example.com/your_logo",
            "handler": function (response) {
                console.log(response);
                HandleSubmit(response);
                Remove_Cart_Items();
                InStock_Update();
                SendMail();


            },
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();

    }

    const HandleSubmit = (payment) => {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
        const res = axios.post('http://127.0.0.1:5001/Order_Details', {
            name: name,
            mobile: mobile,
            pincode: pincode,
            locality: locality,
            area_street: area_street,
            city_district: city_district,
            state: state,
            landmark: landmark,
            alt_phone: alt_phone,
            address_type: address_type,
            order_details: order_details,
            tot_count: tot_count,
            fin_price: fin_price,
            user_id: user_id,
            payment_id: payment.razorpay_payment_id
        });

        console.log(res.data);
    }

    const Remove_Cart_Items = async () => {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
        const response = await axios.post('http://127.0.0.1:5001/delete_all_cart_items');
        console.log(response.data);
    }

    function SendMail() {
        const response = axios.post('http://127.0.0.1:5001/Send_Product_Email', {
            mail_data: mail_data
        });
    }







    return (
        <>
            <div className="container-fluid">
                <div className="row my-4">
                    <div className="col-8 ms-5 shadow-sm">
                        <div className="row bg-primary py-2">
                            <h6 className="text-white fw-normal  ms-2">DELIVERY ADDRESS</h6>
                        </div>
                        <div className="row bg-col6 pt-2">
                            <p className="text-primary">ADD A NEW ADDRESS</p>
                        </div>
                        <div className="row bg-col6">
                            <div className="col-3">
                                <a href='#' role='button' className="btn btn-primary text-white txt-frmt22 rounded-0 py-2 ps-2">Use My current Location</a>
                            </div>
                            <div className="d-flex gap-3 my-3">
                                <input type='text' placeholder="Name" id='name' onKeyUp={(e) => { setName(e.target.value) }} className="form-control rounded-0 w-50 d-inline-flex input-lg"></input>
                                <input type='text' placeholder="10-digit mobile number" id='mobile' onKeyUp={(e) => { setMobile(e.target.value) }} className="form-control rounded-0 w-50 d-inline-flex input-lg"></input>
                            </div>
                            <div className="d-flex gap-3 my-3">
                                <input type='text' placeholder="Pincode" id='pincode' onKeyUp={(e) => { setPincode(e.target.value) }} className="form-control rounded-0 w-50 d-inline-flex"></input>
                                <input type='text' placeholder="Locality" id='locality' onKeyUp={(e) => { setLocality(e.target.value) }} className="form-control rounded-0 w-50 d-inline-flex"></input>
                            </div>
                            <div>
                                <textarea rows='3' className="w-100 form-control rounded-0" id='area_street' placeholder='Address Area & Street' onKeyUp={(e) => { setArea_street(e.target.value) }}></textarea>
                            </div>
                            <div className="d-flex gap-3 my-3">
                                <input type='text' placeholder="City/District/Town" id='city' onKeyUp={(e) => { setCity_district(e.target.value) }} className="form-control rounded-0 w-50 d-inline-flex input-lg"></input>
                                <select class="form-control rounded-0 w-50 form-select" onChange={(e) => { setState(e.target.value) }} aria-label="Default select example">
                                    <option selected>--Select State--</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Himachal">Himachal</option>
                                </select>
                            </div>
                            <div className="d-flex gap-3 my-3">
                                <input type='text' placeholder="Landmark (optional)" id='landmark' onKeyUp={(e) => { setLandmark(e.target.value) }} className="form-control rounded-0 w-50 d-inline-flex"></input>
                                <input type='text' placeholder="Alternate Phone (optional)" id='phone' onKeyUp={(e) => { setAlt_phone(e.target.value) }} className="form-control rounded-0 w-50 d-inline-flex"></input>
                            </div>
                            <div className='d-flex'>
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

                        </div>
                    </div>
                    <div className="col ms-3 me-5 bg-white shadow-sm">
                        <div className="row my-3 border-bottom">
                            <h6>Price Details</h6>
                        </div>
                        <div className="row my-3">
                            <div className="col text-start ms-2">
                                <span className="d-inline-flex">Price ({tot_count} items)</span>
                            </div>
                            <div className="col text-end me-4">
                                <span className="d-inline-flex">₹{fin_price}</span>
                            </div>
                            <div className="row my-3">
                                <div className="col text-start ms-2">
                                    <span className="d-inline-flex">Delivery Charges</span>
                                </div>
                                <div className="col text-end">
                                    <span className="d-inline-flex"><s>₹120</s></span>Free

                                </div>
                                <hr className="ms-2 mt-3"></hr>
                            </div>
                            <div className="row mb-3 ">
                                <div className="col text-start ms-2">
                                    <span>Total Payable</span>
                                </div>
                                <div className="col text-end">
                                    <span>₹{fin_price}</span>
                                </div>
                            </div>
                        </div>
                        <div className="row border-top my-3">
                            <span className="txt-frmt22 text-success ms-2 my-3">Your Total Savings on this Order ₹{tot_savings}</span>
                        </div>
                        <button type='button' className='btn btn-warning rounded-0 w-50 shadow text-white fw-semibold' onClick={PaymentHandle}>Checkout</button>
                        <button type='button' className='btn btn-warning rounded-0 w-50 shadow text-white fw-semibold' onClick={SendMail}>Send Mail</button>
                    </div>
                </div>
            </div></>
    );
}

export default Place_Orders;