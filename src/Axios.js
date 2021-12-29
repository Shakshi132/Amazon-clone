//Axios is a fetching library

 import axios from "axios";

 const instance = axios.create({
     baseURL: 'http://localhost:5001/fir-44ef9/us-central1/api'                    /*API (CLOUD FUNCTION) url, local API endpoint */
 });

 export default instance;