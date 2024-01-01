import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userDetials, setuserDetails] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  //create function to handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userDetials.email,
        password: userDetials.password,
      }),
    });
    const json = await response.json();
    // console.log(json);

    if (!json.success) {
      alert(json.message);
    }
    if (json.success) {
      
      localStorage.setItem("authToken", json.authToken);
      localStorage.setItem("userEmail", userDetials.email);
      // console.log(localStorage.getItem("authToken"));
      setuserDetails({ email: "", password: "" });
      //if logged in then navigate to home page
      navigate("/");
      
    }
  };

  const onchange = (e) => {
    setuserDetails({ ...userDetials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="card w-50 m-auto mt-5 ">
        <form className="p-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={onchange}
              name="email"
              value={userDetials.email}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={onchange}
              name="password"
              value={userDetials.password}
            />
          </div>

          <button type="submit" className="mb-3 btn btn-primary">
            Login
          </button>

          <Link to="/createuser" className="mb-3 ml-3 btn btn-success">
            Register
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
