import { axiosClientFree } from ".";

const getSingleProduct = (id) => {
    return axiosClientFree.get(`/products/single-product/${id}`)
}

const getProducts = (params) => {
    return axiosClientFree.get("/products/", params);
};

const getGamerWorldProducts = () => {
    return axiosClientFree.get("/products/gamer-world")
};

const getPopularSalesProducts = () => {
    return axiosClientFree.get("/products/popular-sales")
}

export { getProducts, getGamerWorldProducts, getPopularSalesProducts, getSingleProduct };