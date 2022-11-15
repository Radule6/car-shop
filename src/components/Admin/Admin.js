import { useEffect, useState, setState } from "react";

const API = "https://422backend.cyclic.app";

const Admin = () => {
    const [editCars, setEditCar] = useState([]);
    const [infoCache, setInfoCache] = useState({});
    const [selectedCar, setSelectedCar] = useState(null);

    const generateCars = async () => {
        const carList = []
        const response = await fetch(API + "/getCars");
        const data = await response.json();

        for(const car of data.cars){
            carList.push(car);
        }
        return carList;
    }

    const selectCar = (id) => {
        setSelectedCar(id);
    }

    const generateRow = (car) => {
        if(car.car_id == selectedCar){
            return (
                // <form action='' method='post'>
                    <tr key={car.car_id}>
                        <td>{car.car_id}</td>
                        <td>{car.car_name.brand}</td>
                        <td>{car.car_name.model}</td>
                        <td>{car.car_name.year}</td>
                        <td>{car.category}</td>
                        <td><input type="text" id="main_image" name="main_image" value={car.main_image}></input></td>
                        <td><input type="text" id="header_image" name="header_image" value={car.header_image}></input></td>
                        <td><input type="text" id="description" name="description" value={car.description}></input></td>
                    </tr>
                // </form>
            )
        }
        else {
            return (
                <tr key={car.car_id}>
                    <td>{car.car_id}</td>
                    <td>{car.car_name.brand}</td>
                    <td>{car.car_name.model}</td>
                    <td>{car.car_name.year}</td>
                    <td>{car.category}</td>
                    <td>{car.main_image}</td>
                    <td>{car.header_image}</td>
                    <td>{car.description}</td>
                    <td><button type="button" onClick={() => selectCar(car.car_id)}>Edit</button></td>
                </tr>
            )
        }
    }

    const renderDisplay = editCars.map ((car) => (
        // <tr key={car.car_id}>
        <>
            { generateRow(car) }
        </>
        // </tr>
    ))
    
    useEffect(() => {
        generateCars().then((carList) => {
          setEditCar(carList);
        });
      }, []);

    //prepCache?
    return <table>
        <thead>
            <tr>
                <th>Car ID</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Year</th>
                <th>Category</th>
                <th>Main img src</th>
                <th>Header img src</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>{renderDisplay}</tbody>
        </table>;
}

export default Admin;