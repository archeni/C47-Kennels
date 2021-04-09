import React from "react";
import { Route, Register } from "react-router-dom";
import { Home } from "./Home";
// import { AnimalList } from "./animal/AnimalList"
// import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeList } from "./employee/EmployeeList";
import { LocationList } from "./location/LocationList";
import { AnimalDetail } from "./animal/AnimalDetail";
import { LocationDetail } from "./location/LocationDetail";
import { AnimalForm } from './animal/AnimalForm';
import { LocationForm } from './location/LocationForm';
import { CustomerForm } from './customer/CustomerForm';
import { EmployeeForm } from './employee/EmployeeForm';

export const ApplicationViews = () => {
  const isAuthenticated = () => sessionStorage.getItem("kennel_customer") !== null;

    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route> */}

            {/* Render the animal list when http://localhost:3000/animals */}
            {/* <Route exact path="/animals">
            if(isAuthenticated()) {
                <AnimalList />
              }else {
                <Redirect to="/login"/>
              }
            </Route> */}

            <Route path="/animals/:animalId(\d+)">
              <AnimalDetail />
            </Route>

            <Route path="/animals/create">
              <AnimalForm />
            </Route>

            <Route exact path='/locations'>
              <LocationList />
            </Route>

            <Route path="/locations/:locationId(\d+)">
              <LocationDetail />
            </Route>
            
            <Route path="/locations/create">
              <LocationForm />
            </Route>

            <Route exact path='/customers'>
              <CustomerList />
            </Route>

            <Route path="/customers/create">
              <CustomerForm />
            </Route>

            <Route exact path='/employees'>
              <EmployeeList />
            </Route>

            <Route path="/employees/create">
              <EmployeeForm />
            </Route>
        </>
    )
}