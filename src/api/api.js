import axios from "axios";

let baseUrl = "http://localhost:5000/";

export default class FetchData {
  // get products
  static async getData(location) {
    return await axios.get(baseUrl + 'products' + location);
  }
  // get single product
  static async getSingleProduct(id) {
    return await axios.get(baseUrl + "products/single_product?id=" + id);
  }


  static async addData(location, data) {
    data = { backet: data };
    return await axios.patch(baseUrl + location, data);
  }
}