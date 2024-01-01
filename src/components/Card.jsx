import React, { useEffect, useRef, useState } from "react";
import { useDispatch,useCart } from "../context&useredusers/context";

const Card = (props) => {
  let dispatch=useDispatch();
  let data=useCart();
  const priceRef=useRef();
  const [qty,setQty]=useState(1);
  const [size,setSize]=useState("");
  const{_id,CategoryName,name,img,options,description}=props.itemData;
  let keys=Object.keys(options[0]);


  useEffect(()=>{
    setSize(priceRef.current.value);
  },[])

  let finalprice=qty*parseInt(options[0][size]);
  // console.log(finalprise);

  const handleAddCart=async ()=>{
    let food=null;
    for(let item of data){
      if(item._id===_id){
        food=item;
        break;
      }
    }
    console.log("food",food);
    if(food==null){
      await dispatch({type:"ADD",itemdata:{...props.itemData,qty:qty,size:size,price:options[0][size],finalprice}});
      return
    }
    await dispatch({type:"UPDATE",id:_id, qty:qty,finalprice});
    console.log(data);
  }
  return (
    <div>
      <div className="card mt-2" style={{ width: "18rem", maxHeight: "450px"}}>
        <img src={img} className="card-img-top" alt="..." style={{height:"200px",objectFit:'fill'}}/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text mb-1">This is a card which will show food Item.</p>
          <div className="container ">
            <select
              className="mb-1 bg-success h-100 rounded"
              name="quantity"
              id="quantity"
              onChange={(e)=>setQty(e.target.value)}
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
              className="m-2 bg-success h-100 rounded"
              name="quantity"
              id="quantity"
              onChange={(e)=>setSize(e.target.value)}
              ref={priceRef}
            >
              {keys.map((option)=>{
                return(<>
                <option key={option} value={option}>{option}</option>
                </>)
              })}
            </select>
            <div className="d-inline h-100 fs-6">
                {`₹${finalprice}/-`}
            </div>
          </div>
          <hr />
          <div className="btn bg-success text-white " onClick={handleAddCart}>Add to Cart</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
