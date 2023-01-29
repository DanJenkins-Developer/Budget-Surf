import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";

const baseURL = "localhost:5000/api/v1/auth/register"

export default function (props) {
  const [inputs, setInputs] = useState({});
  const [user, setUser] = useState({});


  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    const params = {
      name : inputs.name,
      email : inputs.email,
      password : inputs.password
  }
    axios
      .post(baseURL, JSON.stringify(params))
      .then((response) => {
        //setUser(response.data);
        console.log(response)
      });
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Create New Account</h3>
          <div className="form-group mt-3">
            <label>Name</label>
            <div className="d-flex justify-content-center">
            <input
              type="name"
              className="form-control mt-1 w-50"
              placeholder="Enter your full name"
              name="name" 
              value={inputs.name || ""} 
              onChange={handleChange}
            />
            </div>
          </div>
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
            <button type="submit" className="btn btn-primary w-25">
              Submit
            </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}