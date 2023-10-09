import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [categories, setCategories] = useState([]);
  const [subcategories, setsubCategories] = useState([]);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');


  useEffect(() => {
    fetchcategory();
  }, []);


  const fetchcategory = async () => {
    const response = await axios.get('http://127.0.0.1:5001/home_cat');

    setCategories(response.data.categories);
    setsubCategories(response.data.subcat);

    //console.log(response);
  }




  return (

    <>
      <div className='container-fluid bg-col4 '>
        <div className='row my-3'>
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner py-2">
              <div class="carousel-item active">
                <img src="/assets/fp-slideshow-11.webp" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="/assets/fp-slideshow-12.webp" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="/assets/fp-slideshow-13.webp" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className='container-fluid bg-col4 '>
        <div className='row border'>
          <div className='col-3'>
            {categories && categories.map(item => {

              return (

                <>

                  <div className='my-2 div-hg text-center border align-items-center justify-content-center shadow ' >
                    <h2 className='mt-5'>{item.category_name}</h2>
                    <button href='#' className='btn btn-primary text-white rounded-0 mt-5'>View All</button>
                  </div>


                </>)
            })}
          </div>

          <div className='col-9 ms-0'>
            <div className='row '>
              {subcategories && subcategories.map(item => {

                return (

                  <>


                    {item.map(items => {
                      return (
                        <>
                          <div className='my-2 col-3 div-hg border text-center align-items-center justify-content-between style="width: 25rem;" shadow-sm' >
                            <a href={'/Home_Subcat_Pro/' + items._id}>
                              <div className='card mx-1 border-0'>
                                <img className='card-img-top img-prop5' height='250px' src={items.subcat_img} />
                                <div className='card-body mb-0'>
                                  <h6 className='card-title text-nowrap text-truncate'>{items.subcat_title}</h6>
                                  <p className='card-text text-secondary text-nowrap text-truncate' href='#' width='100px'>{items.subcat_desc}</p>
                                  <p className='card-text text-success'>{items.subcat_price}</p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </>
                      )
                    })}





                  </>)
              })}
            </div>
          </div>

        </div>






      </div>
    </>
  );

}

export default Home;