function Header() {
  return (
    <>
      <div className="bg-primary-subtle p-2 d-flex justify-content-between">
        
        <div className="text-light fs-4 fw-bold">my company</div>

        <div className="d-flex gap-3">
            <span>home</span>
            <span>about</span>
            <span>contact</span>
        </div>

        <div className="d-flex gap-3">
            <button className="btn btn-outline-primary">Login</button>
              <button className="btn btn-outline-secondary">register</button>
        </div>




         
         
         </div>
    </>
  );
}

export default Header;