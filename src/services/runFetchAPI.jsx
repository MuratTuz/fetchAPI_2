


const runFetchAPI = async (requestMethod, data = {}) => {

  const url = "http://174.138.103.233/api/employees";
  const requestOptions = {
    method: requestMethod, // GET and POST for our case
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  }
  const response = await fetch(url, requestOptions);
  const dataJson = await response.json();

  return dataJson;
};

export default runFetchAPI;
