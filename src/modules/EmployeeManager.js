const remoteURL = "http://localhost:5002"

  export const getEmployeeById = (id) => {
    //be sure your animals have good data and related to a location and customer
   return fetch(`${remoteURL}/employees/${id}`)
    .then(res => res.json())
  }

  export const getAllEmployees = () => {
    return fetch(`${remoteURL}/employees`)
    .then(result => result.json())
  }