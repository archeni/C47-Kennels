import React from 'react';
import './Employee.css';

export const EmployeeCard = ({ employee, handleDeleteEmployee }) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
        </picture>
        <h3>Name: <span className="card-petname">
          {employee.name}
        </span></h3>
        <button type="button" onClick={() => 
          handleDeleteEmployee(employee.id)}>Discharge</button>
      </div>
    </div>
  );
}