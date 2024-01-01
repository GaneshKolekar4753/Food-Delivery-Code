import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import Modal from '../modal';
import Cart from '../pages/Cart';
import { useCart } from '../context&useredusers/context';
const Navbar = () => {

  const [cartview,setCartview]=useState(false);
  const navigate=useNavigate();
  const data=useCart();
  const handlelogout=()=>{
    localStorage.removeItem('authToken');
    navigate("/login");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active fs-5 fw-bolder" aria-current="page" to="/">Home</Link>
        </li>
        {(localStorage.getItem("authToken"))?
        <li className="nav-item">
        <Link className="nav-link active fs-5 fw-bolder" aria-current="page" to="/myorders">My Orders</Link>
        </li>
        :""
        }
      </ul>
    </div>
    <div className='d-flex'>
      {(localStorage.getItem('authToken'))?
      <>
      <div className='btn bg-white text-success mx-1 fw-bolder' onClick={()=>setCartview(true)}>
        My Cart{" "}
        <Badge pill bg="danger">{data.length}</Badge>
        </div>
        {cartview?<Modal onClose={()=>setCartview(false)}><Cart/></Modal>:null}
       <Link className="btn bg-white text-success mx-1 fw-bolder " to="/login" onClick={handlelogout}>Logout</Link>

      </>
      :<>
        <Link className="btn bg-white text-success mx-1 fw-bolder " to="/login">Login</Link>
          <Link className="btn bg-white text-success mx-1 fw-bolder" to="/createuser">Signup</Link>
        </>
      }
          
    </div>
  </div>
</nav>
  )
}

export default Navbar