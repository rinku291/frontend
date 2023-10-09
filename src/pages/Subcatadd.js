import { useState } from 'react';
import axios from 'axios';

function Subcatadd_Hpg() {
    const [subcat_title, setSubcat_title] = useState('');
    const [subcat_img, setSubcat_img] = useState('');
    const [subcat_id, setSubcat_id] = useState('');
    const [subcat_price, setSubcat_price] = useState('');
    const [subcat_desc, setSubcat_desc] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const HandleClick = () =>
    {
        setSuccess('');
        setError('');
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://127.0.0.1:5001/subcatadd',{
            subcat_title: subcat_title,
            subcat_img: subcat_img,
            subcat_id: subcat_id,
            subcat_price: subcat_price,
            subcat_desc: subcat_desc
        });
console.log(response.data);
        if(response.data.status == true)
        {
            setSuccess(response.data.msg);
        }
        else
        {
            setError(response.data.msg);
        }



    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-4 offset-4'>
                    <div className='box2 mt-5 bg-info-subtle'>
                        <form method='POST' onSubmit={HandleSubmit}>
                            {success && 
                        <div className='my-3 mx-2 alert alert-sucess'>
                                {success}
                            </div>
                            }
                            { error && <div className='alert alert-danger'>{error}</div>}
                            <div className='my-3 mx-2'>
                                <input className='form-control' type='text' onKeyUp={(e)=>{setSubcat_title(e.target.value)}} id='titleid' placeholder='Title' />
                            </div>
                            <div className='mb-3 mx-2'>
                                <input className='form-control' type='text' onKeyUp={(e)=>{setSubcat_img(e.target.value)}} id='titleid' placeholder='ImageUrl' />
                            </div>
                            <div className='mb-3 mx-2'>
                                <input className='form-control' type='text' onKeyUp={(e)=>{setSubcat_id(e.target.value)}} id='titleid' placeholder='Category Id' />
                            </div>
                            <div className='mb-3 mx-2'>
                                <input className='form-control' type='text' onKeyUp={(e)=>{setSubcat_price(e.target.value)}} id='titleid' placeholder='Price' />
                            </div>
                            <div className='mb-3 mx-2'>
                                <input className='form-control' type='text' onKeyUp={(e)=>{setSubcat_desc(e.target.value)}} id='titleid' placeholder='Description' />
                            </div>
                            <div className='mb-3 d-flex gap-2 mx-2'>
                            <button className='form-control' type='submit' >Submit</button>
                            <button className='form-control' type='reset' onClick={HandleClick}>Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subcatadd_Hpg;