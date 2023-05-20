import { axiosClient, axiosClientFree } from ".";

const getProducts = (params) => {
    return axiosClientFree.get("/products/", {
        params,
    });
};

const getGamerWorldProducts = () => {
    return axiosClientFree.get("/products/gamer-world")
};

const getPopularSalesProducts = () => {
    return axiosClientFree.get("/products/popular-sales")
}


const getFavoriteProducts = () => {
    return axiosClient.get("/product-ms/v1/product/client/view/favorite");
};

const deleteFavoriteProduct = (id) => {
    return axiosClient.delete(
        `/product-ms/v1/product/client/view/favorite/${id}`
    );
};

export { getProducts, getFavoriteProducts, deleteFavoriteProduct, getGamerWorldProducts, getPopularSalesProducts };