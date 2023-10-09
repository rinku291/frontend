import { useEffect, useState } from 'react';
import axios from 'axios';


function CatAdd() {

    const [parent_id, setParent_id] = useState('');
    const [catname, setCatname] = useState('');
    const [catimage, setCatimage] = useState('');
    const [cat_desc, setCat_desc] = useState('');
    const [header_value, setHeader_value] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');


    //Below code is added to restrict this page access without login 

    useEffect(() => {
        const user = localStorage.getItem('token');

        if (!user) {
            window.location.href = "/SignIn";
        }
    }, [])

    const HandleClick = () => {
        setSuccess('');
        setError('');
    }



    const HandleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://127.0.0.1:5001/Catadd',
            {
                parent_id: parent_id,
                category_name: catname,
                category_image: catimage,
                header_value: header_value,
                cat_desc: cat_desc
            }
        );

        console.log(response.data.msg);

        if (response.data.status == true) {
            setSuccess(response.data.msg);
        }
        else {
            setError(response.data.msg);
        }
    }

    return (
        <>
            <div class="container-fluid bg-secondary-subtle">
                <div class="row my-3 ">
                    <div class="col-4 offset-4 bg-success-subtle my-3">


                        <form method='POST' onSubmit={HandleSubmit}>

                            <div class="my-2 text-center">
                                <h5>Enter New Categories In Database</h5>
                            </div>
                            {success &&
                            <div className='alert alert-success text-center'>
                                {success}
                            </div>
                        }
                            <div class="mb-2">
                                <input type='text' onKeyUp={(e) => { setCatname(e.target.value) }} className='form-control' placeholder='Category Name'></input>
                            </div>
                            <div class="my-2">
                                <input type='text' onKeyUp={(e) => { setParent_id(e.target.value) }} className='form-control' placeholder='Parent ID'></input>
                            </div>
                            <div class="mb-2">
                                <input type='text' onKeyUp={(e) => { setCatimage(e.target.value) }} className='form-control' placeholder='Image Url'></input>
                            </div>
                            <div class="my-2">
                                <input type='text' onKeyUp={(e) => { setCat_desc(e.target.value) }} className='form-control' placeholder='Description'></input>
                            </div>
                            <div class="my-2">
                                <input type='text' onKeyUp={(e) => { setHeader_value(e.target.value) }} className='form-control' placeholder='Header'></input>
                            </div>
                            <div class="my-2 d-flex gap-2">
                                <div className='w-50'>
                                    <button className='form-control mb-2 bg-success' type='submit'>Submit</button>
                                </div>
                                <div className='w-50'>
                                    <button className='form-control mb-2 bg-warning' type='reset' onClick={HandleClick}>Reset</button>
                                </div>
                            </div>
                        </form>
                        <div class='text-center'><p>{success}</p></div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default CatAdd;
