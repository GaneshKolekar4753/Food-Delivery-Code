import React from 'react'
import { useCart, useDispatch } from '../context&useredusers/context';
export default function Cart() {
  let data = useCart();
  // console.log(data);
  let dispatch = useDispatch();
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    )
  }

  const handleCheckout=async ()=>{
    const response= await fetch(`https://foodcart-app.onrender.com/api/orderdata`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem('userEmail'),
        order_data:data,
        date: new Date().toDateString()
      }),
    });
    // console.log("resp",response);
    if(response.status===200){
      //remove all data in cart 
      dispatch({type:"DROP"})
    }else{
      console.log("error on server");
    }
  }

  let totalPrice = data.reduce((total, food) => total + food.finalprice, 0)
  return (
    <div>

      {console.log(data)}
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.finalprice}</td>
                <td ><button type="button" className="btn p-0">
                  <div className='text-danger' onClick={() => { dispatch({ type: "REMOVE", index: index }) }}> X</div>
                </button> </td></tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-5 ' onClick={handleCheckout} > Check Out </button>
        </div>
      </div>



    </div>
  )
}