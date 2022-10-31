import { useEffect, useState } from "react";

const API = "https://422backend.cyclic.app";

const FearturedCars = () => {
  const [cars, setFeaturedCar] = useState([]);
  const getFeaturedCars = async () => {
    const fearturedCars = [];
    const response = await fetch(API + "/getFeaturedCars");
    const data = await response.json();

    for (const car of data.cars) {
      const response = await fetch(API + "/getCarDisplay/" + car.carID);
      const data = await response.json();
      const featuredCar = {
        carID: car.carID,
        ...data,
        main_image: API + data.main_image,
        header_image: API + data.header_image,
      };
      fearturedCars.push(featuredCar);
    }
    //console.log(fearturedCars);
    return fearturedCars;
  };

  useEffect(() => {
    getFeaturedCars().then((fearturedCars) => {
      setFeaturedCar(fearturedCars);
    });
  }, []);

  const featuerdCars = cars.map((car) => (
    <li key={car.carID}>
      <div className="small-preview">
        <img src={car.main_image}/>
        <p>{`${car.car_name.brand} ${car.car_name.model}`}</p>
      </div>
    </li>
  ));

  return <ul className="view">{featuerdCars}</ul>;
};

export default FearturedCars;
