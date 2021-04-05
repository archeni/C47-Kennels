const remoteURL = "http://localhost:5002"

  export const getCustomerById = (id) => {
    //be sure your animals have good data and related to a location and customer
   return fetch(`${remoteURL}/customers/${id}?__expand=location`)
    .then(res => res.json())
  }

  export const getAllCustomers = () => {
    return fetch(`${remoteURL}/customers`)
    .then(result => result.json())
  }