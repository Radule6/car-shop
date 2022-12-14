import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "https://422backend.cyclic.app";

const FeaturedCars = () => {
  const [cars, setFeaturedCar] = useState([]);
  let navigate = useNavigate();

  const carOnClick = (id) => {
    console.log(id);
    navigate("/car/" + id);
  };

  const getFeaturedCars = async () => {
    const featuredCarData = [];
    const response = await fetch(API + "/getFeaturedCars", {
      headers: {
        "x-api-key": "w3476836tgfdf873h4",
      },
    });
    const data = await response.json();

    for (const car of data.cars) {
      car.main_image = API + car.main_image;
      car.header_image = API + car.header_image;
      featuredCarData.push(car);
      console.log(car);
    }
    console.log(featuredCarData);
    return featuredCarData;
  };

  useEffect(() => {
    getFeaturedCars().then((featuredCarList) => {
      setFeaturedCar(featuredCarList);
    });
  }, [cars]);

  const featureddCars = cars.map((car) => (
    <li key={car.car_id} onClick={() => carOnClick(car.car_id)}>
      <div className="small-preview">
        <img src={car.main_image} alt={`${car.car_name.brand} ${car.car_name.model}`} />
        <p>{`${car.car_name.brand} ${car.car_name.model}`}</p>
      </div>
    </li>
  ));

  return <ul className="view">{featureddCars}</ul>;
};

export default FeaturedCars;
