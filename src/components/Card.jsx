import React from "react";

const Card = (props) => {
  const{_id,CategoryName,name,img,options,description}=props.itemData;
  let keys=Object.keys(options[0]);
  return (
    <div>
      <div className="card mt-2" style={{ width: "18rem", maxHeight: "350px"}}>
        <img src={img} className="card-img-top" alt="..." style={{height:"200px",objectFit:'fill'}}/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">This is a card which will show food Item.</p>
          <div className="container ">
            <select
              className="m-2 bg-success h-100"
              name="quantity"
              id="quantity"
            >
              {Array.from(Array(10), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="m-2 bg-success h-100"
              name="quantity"
              id="quantity"
            >
              {keys.map((option)=>{
                return(<>
                <option key={option} value={option}>{option}</option>
                </>)
              })}
            </select>
            <div className="d-inline h-100 fs-6">
                Total Price
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
