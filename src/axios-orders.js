import axios from "axios";
const instance = axios.create({
  baseURL: "https://reactburgermisha.firebaseio.com/"
});
export default instance;
