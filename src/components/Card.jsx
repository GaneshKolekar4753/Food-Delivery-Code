import React from "react";

const Card = () => {
  return (
    <div>
      <div className="card mt-2" style={{ width: "18rem", maxHeight: "350px"}}>
        <img src="https://media.houseandgarden.co.uk/photos/620ce90624d2ae88e807bbee/1:1/w_5761,h_5761,c_limit/Kukhura-ko-momo---Steamed-chicken-momos-with-ginger-&-chilli-with-a-tomato-sesame-chutney-.jpg" className="card-img-top" alt="..." style={{width:"100%",height:"200px",objectFit:"cover" }} />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
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
              <option value="half">Half</option>
              <option value="full">Full</option>
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
