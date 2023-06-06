import { axiosClient } from "./index";

const addToBasket = (data) => {
    return axiosClient.post("/basket/set-item", data);
};

const getBasketItems = () => {
    return axiosClient.get("/basket/get-items");
};

const getBasketItemsData = () => {
    return axiosClient.get('/basket/get-products-data')
}

const removeBasketItems = (data) => {
    return axiosClient.post("/basket/remove-item", data)
}

export { addToBasket, getBasketItems, removeBasketItems, getBasketItemsData };
