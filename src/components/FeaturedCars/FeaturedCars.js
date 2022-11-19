import { useEffect, useState } from "react";

const API = "https://422backend.cyclic.app";

const FeaturedCars = () => {
  const [cars, setFeaturedCar] = useState([]);

  const getFeaturedCars = async () => {
    const featuredCarData = [];
    const response = await fetch(API + "/getFeaturedCars");
    const data = await response.json();

    console.log(data);

    for (const car of data.cars) {
      car.main_image = API + car.main_image;
      car.header_image = API + car.header_image;
      featuredCarData.push(car);
      console.log(car);
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
        <img src={car.main_image} alt={`${car.car_name.brand} ${car.car_name.model}`} />
        <p>{`${car.car_name.brand} ${car.car_name.model}`}</p>
      </div>
    </li>
  ));

  return <ul className="view">{featureddCars}</ul>;
};

export default FeaturedCars;
