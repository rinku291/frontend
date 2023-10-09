import { useState, useEffect } from 'react';
import axios from 'axios';

function Mobile_Products_Add() {
    const [title, setTitle] = useState('');
    const [category_id, setCategory_id] = useState('');
    const [images, setImages] = useState([]);
    const [img1_sm, setImg1_sm] = useState('');
    const [img1_lg, setImg1_lg] = useState('');
    const [img2_sm, setImg2_sm] = useState('');
    const [img2_lg, setImg2_lg] = useState('');
    const [img3_sm, setImg3_sm] = useState('');
    const [img3_lg, setImg3_lg] = useState('');
    const [img4_sm, setImg4_sm] = useState('');
    const [img4_lg, setImg4_lg] = useState('');
    const [img5_sm, setImg5_sm] = useState('');
    const [img5_lg, setImg5_lg] = useState('');
    const [specifications, setSpecifications] = useState([]);
    const [spec1_lable, setSpec1_lable] = useState('');
    const [spec1_value, setSpec1_value] = useState('');
    const [spec2_lable, setSpec2_lable] = useState('');
    const [spec2_value, setSpec2_value] = useState('');
    const [spec3_lable, setSpec3_lable] = useState('');
    const [spec3_value, setSpec3_value] = useState('');
    const [spec4_lable, setSpec4_lable] = useState('');
    const [spec4_value, setSpec4_value] = useState('');
    const [spec5_lable, setSpec5_lable] = useState('');
    const [spec5_value, setSpec5_value] = useState('');
    const [spec6_lable, setSpec6_lable] = useState('');
    const [spec6_value, setSpec6_value] = useState('');
    const [spec7_lable, setSpec7_lable] = useState('');
    const [spec7_value, setSpec7_value] = useState('');
    const [spec8_lable, setSpec8_lable] = useState('');
    const [spec8_value, setSpec8_value] = useState('');
    const [spec9_lable, setSpec9_lable] = useState('');
    const [spec9_value, setSpec9_value] = useState('');
    const [spec10_lable, setSpec10_lable] = useState('');
    const [spec10_value, setSpec10_value] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');



    const HandleSubmit = async (e) => {
        e.preventDefault();
        //console.log(spec1_lable, spec1_value);
        var obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10 = {};
        var var1, var2, var3, var4, var5, var6, var7, var8, var9, var10 = '';
        var arr = [];
        // var1 = spec1_lable;
        // var2 = spec2_lable;
        // var3 = spec3_lable;
        // var4 = spec4_lable;
        // var5 = spec5_lable;
        // var6 = spec6_lable;
        // var7 = spec7_lable;
        // var8 = spec8_lable;
        // var9 = spec9_lable;
        // var10 = spec10_lable;


        // obj1["var1"] = spec1_value;
        // obj2["var2"] = spec2_value;
        // obj3["var3"] = spec3_value;
        // obj4["var4"] = spec4_value;
        // obj5["var5"] = spec5_value;
        // obj6["var6"] = spec6_value;
        // obj7["var7"] = spec7_value;
        // obj8["var8"] = spec8_value;
        // obj9["var9"] = spec9_value;
        // obj10["var10"] = spec10_value;

        //arr.push[spec1_lable,spec1_value];


        // const response = await axios.post('http://127.0.0.1:5001/Mobiles_Products_Add', {
        //     title: title,
        //     images: images,
        //     category_id: category_id,
        //     specifications: specifications,
        var labels = [];
        var values = [];

        // [spec1_lable, spec2_lable, spec3_lable, spec4_lable, spec5_lable, spec6_lable, spec7_lable, spec8_lable, spec9_lable, spec10_lable].forEach(item => {
        //     if (item) {
        //         labels.push(item);
        //     }
        // })

        // [spec1_value, spec2_value, spec3_value, spec4_value, spec5_value, spec6_value, spec7_value, spec8_value, spec9_value].forEach(item => {
        //     if (item) {
        //         values.push(item);
        //     }
        // })

        console.log(spec1_lable, spec2_lable, spec3_lable, spec4_lable, spec5_lable, spec6_lable, spec7_lable, spec8_lable, spec9_lable, spec10_lable);
        console.log(spec1_value, spec2_value, spec3_value, spec4_value, spec5_value, spec6_value, spec7_value, spec8_value, spec9_value, spec10_value);


    }

    return (
        <>
            <div class='container-fluid'>
                <form method='POST' onSubmit={HandleSubmit}>
                    <div class='row'>
                        <div className='col-6 border-dark border-end'>

                            <h5 className='text-center my-3'>Enter Product Specifications</h5>
                            <div className='row gap-2 mx-3'>
                                <div className='col mb-2'>
                                    <input className='form-control' type='text' id='spec1_lb' onKeyUp={(e) => setSpec1_lable(e.target.value)} placeholder='Enter Spec Label1' />
                                </div>
                                <div className='col mb-2'>
                                    <input className='form-control' type='text' id='spec1_val' onKeyUp={(e) => setSpec1_value(e.target.value)} placeholder='Enter Val Label1' />
                                </div>
                            </div>
                            <div className='row gap-2 mx-3'>
                                <div className='col mb-2'>
                                    <input className='form-control' type='text' id='spec2_lb' onKeyUp={(e) => setSpec2_lable(e.target.value)} placeholder='Enter Spec Label2' />
                                </div>
                                <div className='col mb-2'>
                                    <input className='form-control' type='text' id='spec2_val' onKeyUp={(e) => setSpec2_value(e.target.value)} placeholder='Enter Val Label2' />
                                </div>
                            </div>
                            <div className='row gap-2 mx-3'>
                                <div className='col mb-2'>
                                    <input className='form-control' type='text' id='spec3_lb' onKeyUp={(e) => setSpec3_lable(e.target.value)} placeholder='Enter Spec Label3' />
                                </div>
                                <div className='col mb-2'>
                                    <input className='form-control' type='text' id='spec3_val' onKeyUp={(e) => setSpec3_value(e.target.value)} placeholder='Enter Val Label3' />
                                </div>
                            </div>
                            <div className='row gap-2 mx-3'>
                                <div className='col mb-2'>
                                    <input className='form-control' type='text' id='spec4_lb' onKeyUp={(e) => setSpec4_lable(e.target.value)} placeholder='Enter Spec Label4' />
                                </div>
                                <div className='col mb-2'>
                                    <input className='form-control' type='text' id='spec4_val' onKeyUp={(e) => setSpec4_value(e.target.value)} placeholder='Enter Val Label4' />
                                </div>
                            </div>
                            <div className='row gap-2 mx-3'>
                                <div className='col mb-2'>
                                    <input className='form-control' type='text' id='spec5_lb' onKeyUp={(e) => setSpec5_lable(e.target.value)} placeholder='Enter Spec Label5' />
                                </div>
                                <div className='col mb-2'>
                                    <input className='form-control' type='text' id='spec5_val' onKeyUp={(e) => setSpec5_value(e.target.value)} placeholder='Enter Val Label5' />
                                </div>
                            </div>
                            <div className='row gap-2 mx-3'>
                                <div className='col mb-2'>
                                    <input className='form-control' type='text' id='spec6_lb' onKeyUp={(e) => setSpec6_lable(e.target.value)} placeholder='Enter Spec Label6' />
                                </div>
                                <div className='col mb-2'>
                                    <input className='form-control' type='text' id='spec6_val' onKeyUp={(e) => setSpec6_value(e.target.value)} placeholder='Enter Val Label6' />
                                </div>
                            </div>
                            <div className='row gap-2 mx-3'>
                                <div className='col mb-2'>
                                    <input className='form-control' type='text' id='spec7_lb' onKeyUp={(e) => setSpec7_lable(e.target.value)} placeholder='Enter Spec Label7' />
                                </div>
                                <div className='col mb-2'>
                                    <input className='form-control' type='text' id='spec7_val' onKeyUp={(e) => setSpec7_value(e.target.value)} placeholder='Enter Val Label7' />
                                </div>
                            </div>
                            <div className='row gap-2 mx-3'>
                                <div className='col mb-2'>
                                    <input className='form-control' type='text' id='spec8_lb' onKeyUp={(e) => setSpec8_lable(e.target.value)} placeholder='Enter Spec Label8' />
                                </div>
                                <div className='col mb-2'>
                                    <input className='form-control' type='text' id='spec8_val' onKeyUp={(e) => setSpec8_value(e.target.value)} placeholder='Enter Val Label8' />
                                </div>
                            </div>
                            <div className='row gap-2 mx-3'>
                                <div className='col mb-2'>
                                    <input className='form-control' type='text' id='spec9_lb' onKeyUp={(e) => setSpec9_lable(e.target.value)} placeholder='Enter Spec Label9' />
                                </div>
                                <div className='col mb-2'>
                                    <input className='form-control' type='text' id='spec9_val' onKeyUp={(e) => setSpec9_value(e.target.value)} placeholder='Enter Val Label9' />
                                </div>
                            </div>
                            <div className='row gap-2 mx-3'>
                                <div className='col mb-2'>
                                    <input className='form-control' type='text' id='spec10_lb' onKeyUp={(e) => setSpec10_lable(e.target.value)} placeholder='Enter Spec Label10' />
                                </div>
                                <div className='col mb-2'>
                                    <input className='form-control' type='text' id='spec10_val' onKeyUp={(e) => setSpec10_value(e.target.value)} placeholder='Enter Val Label10' />
                                </div>
                            </div>
                        </div>
                        <div className='col-6 border'>
                            {/* <div className='row gap-2 mx-3'>
                        <h5 className='text-center my-3'>Enter Image URLs</h5>
                            <div className='col mb-2'>
                                <input className='form-control' type='text' id='img1_sm' placeholder='Small Image URL 1' />
                            </div>
                            <div className='col mb-2'>
                                <input className='form-control' type='text' id='img1_lg' placeholder='Large Image URL 1' />
                            </div>
                        </div>
                        <div className='row gap-2 mx-3'>
                            <div className='col mb-2'>
                                <input className='form-control' type='text' id='img2_sm' placeholder='Small Image URL 2' />
                            </div>
                            <div className='col mb-2'>
                                <input className='form-control' type='text' id='img2_lg' placeholder='Large Image URL 2' />
                            </div>
                        </div>
                        <div className='row gap-2 mx-3'>
                            <div className='col mb-2'>
                                <input className='form-control' type='text' id='img3_sm' placeholder='Small Image URL 3' />
                            </div>
                            <div className='col mb-2'>
                                <input className='form-control' type='text' id='img3_lg' placeholder='Large Image URL 3' />
                            </div>
                        </div>
                        <div className='row gap-2 mx-3'>
                            <div className='col mb-2'>
                                <input className='form-control' type='text' id='img4_sm' placeholder='Small Image URL 4' />
                            </div>
                            <div className='col mb-2'>
                                <input className='form-control' type='text' id='img4_lg' placeholder='Large Image URL 4' />
                            </div>
                        </div>
                        <div className='row gap-2 mx-3'>
                            <div className='col mb-2'>
                                <input className='form-control' type='text' id='img5_sm' placeholder='Small Image URL 5' />
                            </div>
                            <div className='col mb-2'>
                                <input className='form-control' type='text' id='img5_lg' placeholder='Large Image URL 5' />
                            </div>
                        </div> */}
                            <div className='row gap-2 mx-3'>
                                <div className='col mb-2'>
                                    <button className='btn btn-primary w-100' type='submit'>Submit</button>
                                </div>
                                <div className='col mb-2'>
                                    <button className='btn btn-warning w-100' type='submit'>Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Mobile_Products_Add;