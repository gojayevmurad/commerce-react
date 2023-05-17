import { axiosClient } from "./index";

const addToBasket = (data) => {
    return axiosClient.post("/order-ms/v1/order-item", data);
};

const getBasketItems = (data) => {
    return axiosClient.get("/order-ms/v1/order-item", data);
};

export { addToBasket, getBasketItems };
