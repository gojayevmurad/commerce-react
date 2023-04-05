import axios from "axios";

let baseUrl = "http://localhost:3000/";

export default class FetchData {
  static async getData(location) {
    return await axios.get(baseUrl + location);
  }
  static async addData(location, data) {
    data = { backet: data };
    return await axios.patch(baseUrl + location, data);
  }
}
