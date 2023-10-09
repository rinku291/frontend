import { useState, useEffect } from 'react';
import axios from 'axios';

function ProductAdd() {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [category_id, setCategory_id] = useState('');
    const [price, setPrice] = useState('');
    const [star_rating, setStar_rating] = useState('');
    const [ratings_reviews, setRatings_reviews] = useState('');
    const [special_discount, setSpecial_discount] = useState('');
    const [available_offers, setAvailable_offers] = useState('');
    const [product_features, setProduct_features] = useState('');
    const [tax_percentage, setTax_percentage] = useState('');
    const [basic_unit, setBasic_unit] = useState('');
    const [total_quantity, setTotal_quantity] = useState('');
    const [quantity_sold, setQuantity_sold] = useState('');
    const [limited, setLimited] = useState('');
    const [active_for_sale, setActive_for_sale] = useState('');
    const [in_stock, setIn_stock] = useState('');
    const [product_id, setProduct_id] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const user= localStorage.getItem('token');

        //Below code is added to restrict this page access without login 
    
        useEffect(() => {
            const user = localStorage.getItem('token');  
          
          if(!user) {
              window.location.href="/SignIn";    
            } 
      },[])

   const HandleReset = () =>
   {
    setSuccess('');
   }

    const HandleClick = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://127.0.0.1:5001/ProAdd', {
            title: title,
            image: image,
            description: description,
            category_id: category_id,
            price: price,
            star_rating: star_rating, 
            ratings_reviews: ratings_reviews,
            special_discount: special_discount,
            available_offers: available_offers,
            product_features: product_features,
            tax_percentage: tax_percentage,
            basic_unit: basic_unit,
            quantity_sold: quantity_sold,
            limited: limited,
            active_for_sale: active_for_sale,
            in_stock: in_stock,
            product_id: product_id
        });

        console.log(response.data);

        if (response.data.status==true)
        {
            setSuccess(response.data.msg);
        }
        else
        {
            setError(response.data.msg);
        }
    }

    return (
        <>
            <div class='container-fluid'>
                <div class='row'>
                    <div class='col-4 offset-4 bg-warning-subtle mt-2'>
                        <form method='POST' onSubmit={HandleClick}>
                        <div class='mb-2 mt-2'>
                                <h5 class='text-center'>Enter Product Details</h5>
                            </div>
                            <div class='mb-2'>
                                <input class='form-control' onKeyUp={(e) => { setTitle(e.target.value) }} id='titleid' placeholder='Product Title'></input>
                            </div>
                            <div class='mb-2'>
                                <input class='form-control' onKeyUp={(e) => { setImage(e.target.value) }} id='imageid' placeholder='Image Url'></input>
                            </div>
                            <div class='mb-2'>
                                <input class='form-control' onKeyUp={(e) => { setDescription(e.target.value) }} id='descid' placeholder='Product Description'></input>
                            </div>
                            <div class='mb-2'>
                                <input class='form-control' onKeyUp={(e) => { setCategory_id(e.target.value) }} id='catid' placeholder='Category ID'></input>
                            </div>
                            <div class='mb-2'>
                                <input class='form-control' onKeyUp={(e) => { setPrice(e.target.value) }} id='priceid' placeholder='Product Price'></input>
                            </div>     

                            <div class='mb-2'>
                                <input class='form-control' onKeyUp={(e) => { setStar_rating(e.target.value) }} id='starid' placeholder='Star Rating'></input>
                            </div>
                            <div class='mb-2'>
                                <input class='form-control' onKeyUp={(e) => { setRatings_reviews(e.target.value) }} id='rrid' placeholder='Rating & Reviews'></input>
                            </div>
                            <div class='mb-2'>
                                <input class='form-control' onKeyUp={(e) => { setSpecial_discount(e.target.value) }} id='discountid' placeholder='Special Discount'></input>
                            </div>
                            <div class='mb-2'>
                                <input class='form-control' onKeyUp={(e) => { setAvailable_offers(e.target.value) }} id='offerid' placeholder='Available Offers'></input>
                            </div>   
                            <div class='mb-2'>
                                <input class='form-control' onKeyUp={(e) => { setProduct_features(e.target.value) }} id='featureid' placeholder='Product Features'></input>
                            </div>                        
                            <div class='mb-2'>
                                <input class='form-control' onKeyUp={(e) => { setTax_percentage(e.target.value) }} id='taxp_id' placeholder='Tax Percentage'></input>
                            </div>        
                            <div class='mb-2'>
                                <input class='form-control' onKeyUp={(e) => { setBasic_unit(e.target.value) }} id='bu_id' placeholder='Basic Unit'></input>
                            </div>    
                            <div class='mb-2'>
                                <input class='form-control' onKeyUp={(e) => { setTotal_quantity(e.target.value) }} id='bu_id' placeholder='Total Quantity'></input>
                            </div>                         
                            <div class='mb-2'>
                                <input class='form-control' onKeyUp={(e) => { setQuantity_sold(e.target.value) }} id='qs_id' placeholder='Quantity Sold'></input>
                            </div>                            
                            <div class='mb-2'>
                                <input class='form-control' onKeyUp={(e) => { setLimited(e.target.value) }} id='ltd_id' placeholder='Is Limited'></input>
                            </div>                            
                            <div class='mb-2'>
                                <input class='form-control' onKeyUp={(e) => { setActive_for_sale(e.target.value) }} id='afs_id' placeholder='Active For Sale'></input>
                            </div>                                                      
                            <div class='mb-2'>
                                <input class='form-control' onKeyUp={(e) => { setIn_stock(e.target.value) }} id='In_s_id' placeholder='In Stock'></input>
                            </div>                            
                            <div class='mb-2'>
                                <input class='form-control' onKeyUp={(e) => { setProduct_id(e.target.value) }} id='Pid' placeholder='Product ID'></input>
                            </div>
                            <div class='mb-2 d-flex gap-2'>
                                <button class='form-control bg-success-subtle' type='submit'>Submit</button>
                                <button class='form-control bg-warning' type='reset' onClick={HandleReset}>Reset</button>
                            </div>
                        </form>
                        <div class='mb-2'>
                            <p class="text-center">{success}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductAdd;