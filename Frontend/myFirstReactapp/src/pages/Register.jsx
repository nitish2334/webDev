import { Link } from "react-router-dom";


function Register() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center mt-5 p-5">
        <div className="border p-3 w-50  mt-5 bg-light shadow rounded">
          <h1 className="text-center">Create Account !!</h1>
          <br />
          <form>
            <label htmlFor="name">Enter your name</label>
            <input type="text" className="form-control" />
            <br />
            <label htmlFor="email">Enter your email</label>
            <input type="email" className="form-control" />

            <br />
            <label htmlFor="password">Enter your password</label>
            <input type="password" className="form-control" />
            <br />
            <label htmlFor="password">Enter your con password</label>
            <input type="password" className="form-control" />

            <br />
            <label htmlFor="phone">Enter your phone number</label>
            <input type="tel" className="form-control" />

            <br />
            <div className="text-center  ">
              <button type="submit" className="btn btn-warning w-100">
                Register
              </button>
            </div>
          </form>
          <hr />
          <p>
            Already have an account?
            <Link to={"/login"}>Login here</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
