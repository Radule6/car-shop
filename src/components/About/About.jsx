import React from 'react';
import './about.css';
import image from   './var.jpg';

const about = () => {
  return (
    <main>
        <div class="container">
            <h1>Lorem</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis natus alias beatae quidem amet
                veniam iure, eveniet hic aspernatur recusandae placeat officiis reprehenderit rem architecto? Laboriosam
                quae facere incidunt?</p>
        </div>
        <div class="pic">
            <img src={image} alt="image"/>
        </div>
    </main>
  )
}

export default about