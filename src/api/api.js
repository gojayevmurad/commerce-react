import axios from "axios";

let baseUrl = "https://cute-peplum-ox.cyclic.app/";

export default class FetchData {
  // get products
  static async getData(location) {
    return await axios.get(baseUrl + 'products' + location);
  }
  // get single product
  static async getSingleProduct(id) {
    return await axios.get(baseUrl + "products/single_product?id=" + id);
  }
}