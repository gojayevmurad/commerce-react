import { axiosClient } from "./index";

const addToBasket = (data) => {
    return axiosClient.post("/basket/set-item", data);
};

const getBasketItems = (data) => {
    return axiosClient.get("/basket/get-items", data);
};

const removeBasketItems = (data) => {
    return axiosClient.post("/basket/remove-item", data)
}

export { addToBasket, getBasketItems, removeBasketItems };
