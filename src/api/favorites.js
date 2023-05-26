import { axiosClient } from ".";

export const getFavoriteProducts = () => {
    return axiosClient.get('/favorites/get-products');
}

export const addFavoriteProduct = (data) => {
    return axiosClient.post('/favorites/add-product', data);
}

export const deleteFavoriteProduct = (id) => {
    return axiosClient.delete(`/favorites/delete-product/${id}`);
}