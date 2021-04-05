import React from "react";
import "./Location.css";

export const LocationCard = ({ location }) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
        </picture>
        <h3>Name: <span className="card-petname">
          {location.name}
        </span></h3>
        <p>Address: ${location.address}</p>
      </div>
    </div>
  );
}