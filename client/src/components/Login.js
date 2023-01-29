import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";

const baseURL = "http://localhost:6000/api/v1/auth/login"


export default function (props) {
  const [inputs, setInputs] = useState({});


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);
    const params = {
      email : inputs.email,
      password : inputs.password
  }
  console.log(params)
  try {
    await axios
      .post(baseURL, params)
      .then((response) => {
        //setUser(response.data);
        console.log(response)
      }).catch((err) =>  {
        console.log("error in promise: " + err)
      })
    } catch (err) {
      console.log("error in try catch")
    }
  }

  return (
    <div className="Auth-form-container">
      <img src={ require('../templogo.png') } alt="Logo" />
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="d-flex flex-column m-auto form-group">
            <label>Email address</label>
            <div className="d-flex justify-content-center">
            <input
              type="email"
              className="form-control mt-1 w-50"
              placeholder="Enter email"
              name="email" 
              value={inputs.email || ""} 
              onChange={handleChange}
            />
            </div>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <div className="d-flex justify-content-center">
            <input
              type="password"
              className="form-control mt-1 w-50"
              placeholder="Enter password"
              name="password" 
              value={inputs.password || ""} 
              onChange={handleChange}
            />
            </div>
          </div>
          <div className="d-grid gap-2 mt-3">
            <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-25" href="./donut">
              Submit
            </button>
            </div>
          </div>
          <div className="d-flex justify-content-center">
          <p className="">
            Don't have an account? <Link to="/register">Register Here</Link>
          </p>
          </div>
        </div>
      </form>
    </div>
  )
}