import { useEffect, useState } from "react";

const API = "https://422backend.cyclic.app";

const FeaturedCars = () => {
  const [cars, setFeaturedCar] = useState([]);
  const getFeaturedCars = async () => {
    const featuredCarData = [];
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
      featuredCarData.push(featuredCar);
    }
    return featuredCarData;
  };

  useEffect(() => {
    getFeaturedCars().then((featuredCarList) => {
      setFeaturedCar(featuredCarList);
    });
  }, []);

  const featureddCars = cars.map((car) => (
    <li key={car.carID}>
      <div className="small-preview">
        <img src={car.main_image} alt={`${car.car_name.brand} ${car.car_name.model}`}/>
        <p>{`${car.car_name.brand} ${car.car_name.model}`}</p>
      </div>
    </li>
  ));

  return <ul className="view">{featureddCars}</ul>;
};

export default FeaturedCars;
