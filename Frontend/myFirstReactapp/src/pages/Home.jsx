import { useNavigate } from "react-router-dom";
import company from "../assets/company.jpg.webp";


// import contactImage from "./assets/contactPage.jpg";




function Home() {
  const navigate = useNavigate();
  return (
    <>
      
      

         <div className="container d-flex justify-content-center align-items-center ">
            <img src={company} alt="Company " className="img-fluid  w-100" />
        
       <div className="border p-3 w-50 bg-light shadow rounded ">
     
        <h1 className="text-center">Welcome to Our Website</h1>
        <p className="text-center">
          We are glad to have you here! Explore our products, learn more about us,
           and feel free to contact us 

        </p>

        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-primary me-2"
           onClick={() => navigate("/products")}>
            check our products
          </button>

        </div>

       </div>
      </div>

     


      
     
    </>
  );
}

export default Home;