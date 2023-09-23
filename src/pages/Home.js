import React from "react";
import homeImage from "../images/home.jpeg";

const Home = () => {
  return (
    <div className="container-fluid home">
      <div className="row">
        <div className="col-md-6 text border">
          <div className="heading">
            <h3>Welcome to my portfolio</h3>
            <h1>Hii! I'm Mansi Kamble</h1>
          </div>
        </div>
        <div className="col-md-6 home-img border">
          <img src={homeImage} alt="girl-coding" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default Home;
