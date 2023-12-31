import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [userDetials, setuserDetails] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  const navigate = useNavigate();
  //create function to handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userDetials.name,
        email: userDetials.email,
        password: userDetials.password,
        location: userDetials.location,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials");
    }
    if (json.success) {
      setuserDetails({ name: "", email: "", password: "", location: "" });
      navigate("/login");
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
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              onChange={onchange}
              name="name"
              value={userDetials.name}
            />
          </div>
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
          <div className="mb-3">
            <label htmlFor="exampleInputlocation" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputlocation"
              onChange={onchange}
              name="location"
              value={userDetials.location}
            />
          </div>

          <button type="submit" className="mb-3 btn btn-primary">
            Submit
          </button>
          <Link to="/login" className="mb-3 ml-3 btn btn-success">
            Login
          </Link>
        </form>
      </div>
    </>
  );
}
