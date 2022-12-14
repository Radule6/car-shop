import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./buyCar.css";
const API = "https://422backend.cyclic.app";
const BuyCar = () => {
  const [car, setCar] = useState([]);
  const [carPackages, setCarPackages] = useState([]);
  const params = useParams();

  const getBuyCarInfo = async () => {
    const featuredCarData = [];
    const response = await fetch(API + "/getCar/" + params.id);
    const data = await response.json();

    const new_data = { ...data, main_image: API + data.main_image, header_image: API + data.header_image };
    console.log(new_data);

    return new_data;
  };
  const getPackages = async () => {
    const response = await fetch(API + "/getPackages/" + params.id);
    const data = await response.json();
    console.log(data);
    return data;
  };

  useEffect(() => {
    getBuyCarInfo().then((car) => {
      setCar(car);
    });
    getPackages().then((test) => {
      setCarPackages(test);
    });
  }, [car, carPackages]);

  const packages = carPackages.map((carPackage) => (
    <div key={carPackage.name + carPackage.id} className="package">
      <h2>{carPackage.name}</h2>
      <hr />
      <p>
        PRICE: ${`${carPackage.price} `}
        <br />
        Car Parts:
        <ul>
          {carPackage.parts.map((parts) => (
            <li>{parts.part_name}</li>
          ))}
        </ul>
      </p>
    </div>
  ));

  return (
    <>
      <header
        className="header"
        style={{
          backgroundImage: "url(" + car.header_image + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <h1>Choose this car</h1>
        <p id="first-p">This car is just the right fit for </p>
        <hr />
      </header>
      <main>
        <img src={car.main_image} alt="photo" id="main-img" />
        <div className="container">
          <h2>Choose a package</h2>
          <select className="myselect">
            <option value="0">Select Package:</option>
            {carPackages.map((packageName) => (
              <option value={packageName.name}>{packageName.name}</option>
            ))}
          </select>
          <button type="submit" className="submit">
            SUBMIT
          </button>
        </div>
      </main>
      {packages})
    </>
  );
};

export default BuyCar;
