import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
    <div className="card bg-dark text-white border-0">
      <img className="card-img" src="/assets/backgroundimg.jpg" alt="Background" height="550px"/>
      <div className="card-img-overlay">
        <div className="card-img-overlay d-flex flex-column justify-content-center">
        <h5 className="card-title display-3 fw-bolder mb-0"></h5>
        </div>
      </div>
    </div>
    <Products/>
    </div>
  );
};

export default Home;
