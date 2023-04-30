import React, { useState } from "react";
import Navbar from "./navbar";
import { carDetais } from "../config";
import { Link,useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState(carDetais);
  const toDetails = (id) => { 
    const employee = cars.filter((incar) => incar.id == id);
    navigate("/cardetails", { state: employee[0]});
  };
  return (
    <>
      <Navbar />
      <div className="car-cards row">
        {cars.map((ele) => {
          return (
            <article className="single-card" key={ele.id}>
              <div className="temporary_text">
                <img src={ele.car_image} className="car-img"></img>
              </div>
              <div className="card_content">
                <span className="card_title">{ele.car_name}</span>
          
                <span className="card_subtitle">{ele.car_description}</span>
                <div className="card_description">
                  <p className="details">More Details</p>
                  <p>Fuel:{ele.car_fuel}</p>
                  <p>car seating:{ele.car_seating}</p>
                  <p>Rent:{ele.car_rent}</p>
                  <button className="btn btn-primary rent-button" onClick={()=>{
                    toDetails(ele.id);
                  }}>Rent it</button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
