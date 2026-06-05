import { Link } from "react-router-dom";



function Header() {
  return (
    <>
      <div className="bg-primary p-2 d-flex justify-content-between align-items-center">


        <div className=" fs-4 fw-bold">My Company </div>
        <div className="d-flex gap-3">
          <div>
            
          </div>
         
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-light">Login</button>
          <button className="btn btn-outline-light">Register</button>
        </div>
      </div>
    </>
  );
}

export default Header;