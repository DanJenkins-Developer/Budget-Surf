import { Link } from "react-router-dom";

export default function (props) {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Create New Account</h3>
          <div className="form-group mt-3">
            <label>Name</label>
            <div className="d-flex justify-content-center">
            <input
              type="name"
              className="form-control mt-1 w-50"
              placeholder="Enter your full name"
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
            />
            </div>
          </div>
          <div className="d-grid gap-2 mt-3">
            <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-25">
              <Link to="/">Submit</Link>
            </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}