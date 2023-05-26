import { createSlice } from "@reduxjs/toolkit";
import { addFavoriteProduct, deleteFavoriteProduct, getFavoriteProducts } from "../../api/favorites";

const initialState = {
    loading: {
        main: false
    },
    data: []
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setFavoritesData: (state, action) => {
            state.data = action.payload
        },
        setFavoritesLoading: (state, action) => {
            state.loading = { ...state.loading, ...action.payload }
        }
    },
})

export const getFavoritesProductsAsync = (toast) => async (dispatch) => {
    dispatch(setFavoritesLoading({ main: true }));
    try {
        const response = await getFavoriteProducts()
        response && dispatch(setFavoritesData(response.data))
    } catch (error) {
        error && toast.error(error.message)
    }
    dispatch(setFavoritesLoading({ main: false }))
}


export const addFavoriteProductAsync = (data, toast) => async (dispatch) => {
    dispatch(setFavoritesLoading({ [data.productId]: true }));
    try {
        const response = await addFavoriteProduct(data);
        response && dispatch(setFavoritesData(response.data))
    } catch (error) {
        error && toast.message(error.message)
    }
    dispatch(setFavoritesLoading({ [data.productId]: false }))
}

export const deleteFavoriteProductAsync = (id, toast) => async (dispatch) => {
    dispatch(setFavoritesLoading({ [id]: true }))
    try {
        const response = await deleteFavoriteProduct(id)
        response && dispatch(setFavoritesData(response.data))
    } catch (error) {
        error && toast.error(error.message)
    }
    dispatch(setFavoritesLoading({ [id]: false }))
}

export const { setFavoritesData, setFavoritesLoading } = favoritesSlice.actions;

export default favoritesSlice.reducer;