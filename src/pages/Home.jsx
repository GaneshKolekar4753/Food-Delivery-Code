import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Crausel from "../components/Crausel";

const Home = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [foodCat, setFoodCat] = useState([]);
  const [search, setsearch]=useState('');
  const loadData = async () => {
    const response = await fetch("http://localhost:5000/api/home", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resp = await response.json();
    //  console.log(resp);
    setFoodItems(resp.foodItem);
    setFoodCat(resp.foodCat);
  };
  //to load data from the backend first time
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
        <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{objectFit:"contain !important"}}
      >
        <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{zIndex:'2'}}>
            <div className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>setsearch(e.target.value)} />
            </div>
            </div>
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}} />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900×700/?fruits" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}} />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900×700/?pizza" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}} />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        </div>
        <div className="container">
          {foodCat != [] ? (
            foodCat.map((category) => {
              return (
                <div className=' row mb-3' key={category._id}>
                  <div className="fs-3 m-3">{category.CategoryName}</div>
                  <hr />

                  {/* //all filter logic  */}
                  {foodItems != [] ? (
                    foodItems.filter((item) =>(item.CategoryName===category.CategoryName)&&(item.name.toLowerCase().includes(search.toLocaleLowerCase()))).map((item)=>{
                      return (
                        <div key={item._id} className=" col-12 col-md-6 col-lg-3 m-2">
                          <Card itemData={item} />
                        </div>
                      );
                    })
                  ) : (
                    <div>No products found</div>
                  )}
                </div>
              );
            })
          ) : (
            <div>shjhs</div>
          )}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
