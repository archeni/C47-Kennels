import React from "react";
import "./Kennel.css";
import { PropsAndState } from "./PropsAndState";
import { AnimalList } from "./animal/AnimalList";
import { EmployeeList } from "./employee/EmployeeList";
import { LocationList } from "./location/LocationList";
import { CustomerList } from "./customer/CustomerList";

export const Home = () => (
  <>
    <h2>Nashville Kennels</h2>
    <small>Loving care when you're not there.</small>

    <address>
      <div>Visit Us at the Nashville North Location</div>
      <div>500 Puppy Way</div>
    </address>

    <PropsAndState yourName="Traye" />
    <h2>Animals</h2>
    <article className="animals">
      <AnimalList />
    </article>

    <h2>Employees</h2>
    <article className="employees">
      <EmployeeList />
    </article>

    <h2>Locations</h2>
    <article className="locations">
      <LocationList />
    </article>

    <h2>Customers</h2>
    <article className="customers">
      <CustomerList />
    </article>

  </>
)