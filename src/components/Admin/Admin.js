import { useEffect, useState } from "react";

const API = "https://422backend.cyclic.app";

const Admin = () => {
    const [editCars, setEditCar] = useState([]);
    const [infoCache, setInfoCache] = useState({});
    const [selectedCar, setSelectedCar] = useState(null);

    //this info cache is info for the drop-down menus when editing cars
    const prepInfoCache = async () => {
        const brandList = []
        var response = await fetch(API + "/getBrands");
        var data = await response.json();

        for(const brand of data.brands){
            brandList.push(brand);
        }

        const modelList = []
        response = await fetch(API + "/getModels");
        data = await response.json();

        for(const model of data.models){
            modelList.push(model);
        }

        const carTypeList = []
        response = await fetch(API + "/getCarTypes");
        data = await response.json();

        for(const type of data.carTypes){
            carTypeList.push(type);
        }

        const cache = {brands: brandList, models: modelList, carTypes: carTypeList};
        return cache;
    }
    
    //generates array of car data
    const generateCars = async () => {
        const carList = []
        const response = await fetch(API + "/getCars");
        const data = await response.json();

        for(const car of data.cars){
            carList.push(car);
        }
        return carList;
    }

    //modifies state of which car is being edited
    const selectCar = (id) => {
        setSelectedCar(id);
    }

    //sends the POST request to the server to update the car
    async function updateCar() {
        var model = parseInt(document.getElementById("model").value);
        var year = parseInt(document.getElementById("year").value);
        var category = parseInt(document.getElementById("carType").value);
        var main_image = document.getElementById("main_image").value;
        var header_image = document.getElementById("header_image").value;
        var description = document.getElementById("description").value;
        var quantity = parseInt(document.getElementById("quantity").value);
        var featured = document.getElementById("featured").checked;

        // alert(featured);

        var req = {
            model_year_id: selectedCar,
            model_id: model,
            year: year,
            category: category,
            main_image: main_image,
            header_image: header_image,
            description: description,
            quantity: quantity,
            featured: featured
        }
 

        console.log(JSON.stringify(req));

        const response = await fetch(API + '/updateCar', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(req)
          });

        console.log("updated:" + response.json()); // parses JSON response into native JavaScript objects
        window.location.reload(false);
        
    }

    //updates models to choose from based on selected brand
    const updateModelSelect = () => {
        const currBrand = document.getElementById('brand').value;
        var limitedModels = infoCache.models.map((model) => (model.brand_id == currBrand) ? model : null)

        var modelSelect = document.getElementById('model');
        while (modelSelect.firstChild) {
            modelSelect.removeChild(modelSelect.lastChild);
        }

        for(const m of limitedModels){
            console.log(m);
            if(m != null){
                console.log(m.model_id);
                var option = document.createElement('option');
                option.value = m.model_id;
                option.innerHTML = m.model_name;
                modelSelect.appendChild(option);
            }
            
        }
    }

    //renders a row of car data
    const generateRow = (car) => {        
        if(car.car_id == selectedCar){
            var carTypes = infoCache.carTypes.map((type) => <option value={type.car_type_id}>{type.car_type_name}</option>);
            var brands = infoCache.brands.map((brand) => <option value={brand.brand_id}>{brand.brand_name}</option>);
            var models = infoCache.models.map((model) => (model.brand_id == car.car_name.brand_id) ? <option value={model.model_id}>{model.model_name}</option> : null);
            
            return (
                    <>
                        <td>{car.car_id}</td>
                        <td><select name="brand" id="brand" onChange={() => updateModelSelect()} defaultValue={car.car_name.brand_id}>
                            {brands}
                        </select></td>
                        <td><select name="model" id="model">
                            {models}
                        </select></td>
                        <td><input type="number" id="year" name="year" min="1900" max="2024" step="1" defaultValue={car.car_name.year}/></td>
                        <td><select name="carType" id="carType" defaultValue={car.category_id}>
                            {carTypes}
                        </select></td>
                        <td><input type="text" id="main_image" name="main_image" defaultValue={car.main_image}/></td>
                        <td><input type="text" id="header_image" name="header_image" defaultValue={car.header_image}/></td>
                        <td><input type="text" id="description" name="description" defaultValue={car.description}/></td>
                        <td><input type="number" id="quantity" name="quantity" min="0" max="255" step="1" defaultValue={car.quantity}/></td>
                        <td><input type="checkbox" id="featured" name="featured" value="true" defaultChecked={car.featured}/></td>
                        <td><button type="button" onClick={() => updateCar()}>Submit</button></td>
                    </>
            )
        }
        else {
            return (
                <>
                    <td>{car.car_id}</td>
                    <td>{car.car_name.brand}</td>
                    <td>{car.car_name.model}</td>
                    <td>{car.car_name.year}</td>
                    <td>{car.category}</td>
                    <td>{car.main_image}</td>
                    <td>{car.header_image}</td>
                    <td>{car.description}</td>
                    <td>{car.quantity}</td>
                    <td><input type="checkbox" defaultChecked={car.featured} disabled/></td>
                    <td><button type="button" onClick={() => selectCar(car.car_id)}>Edit</button></td>
                </>
            )
        }
    }

    //iterates through car data, had to format it a little funny b/c of reactDOM
    const renderDisplay = editCars.map ((car) => (
        <tr key={car.car_id}>
            { generateRow(car) }
        </tr>
    ))


    //perform the fetching of car data as react side effect
    useEffect(() => {
        generateCars().then((carList) => {
          setEditCar(carList);
        });
    }, []);

    //prep info cache
    useEffect(() => {
        prepInfoCache().then((cache) => {
          setInfoCache(cache);
        });
    }, []);

    //final render
    return (<table>
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
                <th>Quantity</th>
                <th>Featured</th>
            </tr>
        </thead>
        <tbody>{renderDisplay}</tbody>
        </table>);
}

export default Admin;