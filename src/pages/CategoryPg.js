import axios from "axios";
import { useState, useEffect } from "react";

function CategoryPg() {

    const [products, setProducts] = useState('');


    useEffect(
        () => { fetchcategory(); }, []
    )

    const fetchcategory = async () => {
        //const param = window.location.pathname.split('/cat/');
        const res = await axios.get('http://127.0.0.1:5001/Cat-Products/' + window.location.pathname.split('/cat/')[1]);

        console.log(res.data);
        setProducts(res.data.catproducts);
    }
    return (
        <>
            <div className="container-fluid bg-col1">
                <div className="row">

                    {products && products.map(item => {

                        return (
                            <>
                                <div className="col-3 gap-2">
                                    <div className='card card-height my-2 '>
                                        <img className='img-prop3 mt-3' src={item.image} height='300px'/>
                                        <div className='card-body'>
                                            <h5 className="card-title txt-frmt4">{item.title}</h5>
                                            <p className="card-text">{item.description}</p>
                                            <p className="card-text txt-frmt2">₹{item.price}</p>
                                            <a href={'/product/'+item._id} target='_blank'>View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </>);
                    })}
                </div>
            </div>




        </>
    );
}

export default CategoryPg;