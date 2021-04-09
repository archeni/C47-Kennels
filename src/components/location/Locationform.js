import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addLocation, getAllLocations } from '../../modules/LocationManager';
import './LocationForm.css';

export const LocationForm = () => {
	// State will contain both animal data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [location, setLocation] = useState({
		name: "",
		address: "",
	});

	const [isLoading, setIsLoading] = useState(false);

	// you will need the the `getAll` in the LocationsManager and CustomersManager to complete this section
	const [locations, setLocations] = useState([]);

	const history = useHistory();

	//when a field changes, update state. The return will re-render and display based on the values in state
	// NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
	//Controlled component
  
  const getLocations = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return getAllLocations().then(locationssFromAPI => {
      setLocations(locationssFromAPI)
    });
  };

	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newLocation = { ...location }
		let selectedVal = event.target.value

		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Animal is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newLocation[event.target.id] = selectedVal
		// update state
		setLocation(newLocation)
	}

     useEffect(() => {
		//load Location data and setState
      getLocations();
	  }, []);


	const handleClickSaveLocation = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

			//invoke addAnimal passing animal as an argument.
			//once complete, change the url and display the animal list
		addLocation(location)
			.then(() => history.push("/locations"))
	}

	return (
		<form className="locationForm">
			<h2 className="locationForm__title">New Location</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Location's Full Name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={location.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="address">Location Address:</label>
					<input type="text" id="locationAddress" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location address" value={location.address} />
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveLocation}>
				Save Location
          </button>
		</form>
	)
}