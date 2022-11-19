import React from "react";
import Style from "./Home.module.css";
// import { Outlet } from "react-router-dom";
import FearturedCars from "../FeaturedCars/FeaturedCars";

const Home = () => {
  return (
    <>
      <div className={Style._header}>
        <div className={Style.container}>
          <div className={Style.info}>
            <div className={Style.title}>
              <h1>Car Delivery</h1>
              <br />
              <span></span>
            </div>
            <div className={Style.desc}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nihil dignissimos voluptatum
                molestiae totam non! Rerum nostrum fugit modi ipsa?
              </p>
            </div>
          </div>
          <div className={Style.pic}></div>
        </div>
      </div>
      <FearturedCars />
    </>
  );
};

export default Home;
