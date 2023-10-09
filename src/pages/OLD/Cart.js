import {useState, useEffect} from 'react';
import axios from 'axios';


function Cart() {

    const[cartitems, setCartitems] = useState('');
    const[count, setCount] = useState('');
    const[total_price, setTotal_price] = useState('');

    useEffect(()=>{productfetch();},[]);

    const productfetch = async () => {
        const response = await axios.get('http://127.0.0.1:5001/showcart_items');
        
        setCartitems(response.data.cart_items);
        console.log(cartitems);

    }

    // cartitems.map(item => {
    // return (<>
    //     console.log(item.product_id);
    //     </>
    // )});

    
    return (

        <>
            <div className='container-fluid bg-secondary-subtle'>
                <div className='row border'>

This is cart pg;
{cartitems && cartitems.map(item => {
    return(<>
    <div>
    {item.product_id.price}</div></>);
})}
            </div>
            </div>

        </>
    );
}

export default Cart;