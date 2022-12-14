import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './shop.css';
import image from './pic.jpg';
const API = "https://422backend.cyclic.app";


function Shop() {
    const [filters, setFilters] = useState([]);
    
  const getFilters = async () => {
    const response = await fetch(API + "/getFilters", {
      headers: {
        "x-api-key": "w3476836tgfdf873h4",
      },
    });
    const data = await response.json();
    return data;
    };

    useEffect(() => {
        getFilters().then((fffi) => {
          setFilters(fffi);
        });
      }, [filters]);

      console.log(filters);
      // const all_filters = filters.map((f) => (
      //       <label >{f.brands.name}</label>
      // ));
    return (
    <div id="shop">
        <div class="sidebar">
            <h2>Lorem Ipsum</h2>
            <br/>
            <p>Lorem Ipsum</p>
            <hr/>
            <ul>
               
            </ul>
            <p>Lorem Ipsum</p>
            <hr/>
            <ul>
                <input type="checkbox"/>
                <label for="">Lorem Ipsum</label><br/>
                <input type="checkbox"/>
                <label for="">Lorem Ipsum</label><br/>
                <input type="checkbox"/>
                <label for="">Lorem Ipsum</label><br/>
            </ul>
        </div>
        <div class="items">
             <div class="start">
                <h2>Lorem Ispum:</h2>
                <button>Search</button>
                
             </div>
             <hr/>
             <div class="result">
                <div class="item">
                    <img src={image} alt=""/>
                    <p>Lorem Ipsum</p>
                    <hr/>
                </div>
                <div class="item">
                    <img src= {image} alt=""/>
                    <p>Lorem Ipsum</p>
                    <hr/>
                </div>
                <div class="item">
                    <img src= {image} alt=""/>
                    <p>Lorem Ipsum</p>
                    <hr/>
                </div>
                <div class="item">
                    <img src= {image} alt=""/>
                    <p>Lorem Ipsum</p>
                    <hr/>
                </div>
                <div class="item">
                    <img src= {image} alt=""/>
                    <p>Lorem Ipsum</p>
                    <hr/>
                </div>
                <div class="item">
                    <img src={image} alt=""/>
                    <p>Lorem Ipsum</p>
                    <hr/>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Shop