import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getFavoriteProducts, deleteFavoriteProduct, getGamerWorldProducts, getPopularSalesProducts } from "../../api/products";

const initialState = {
    products: {
        loading: false,
        totalCount: 0,
        data: null
    },
    gamerWorldProducts: {
        loading: false,
        data: null,
    },
    popularSalesProducts: {
        loading: false,
        data: null
    },
    favoritesProducts: {
        loading: false,
        data: null,
    },
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = {
                ...state.products,
                ...action.payload,
            };
        },
        setGamerWorldProducts: (state, action) => {
            state.gamerWorldProducts = {
                ...state.gamerWorldProducts,
                ...action.payload,
            }
        },
        setPopularSalesProducts: (state, action) => {
            state.popularSalesProducts = {
                ...state.popularSalesProducts,
                ...action.payload,
            };
        },
        setFavoriteProducts: (state, action) => {
            state.favoritesProducts = {
                ...state.favoritesProducts,
                ...action.payload,
            };
        },
    },
});

export const getGamerWorldProductsAsync = (toast) => async (dispatch) => {
    dispatch(setGamerWorldProducts({ loading: true }));
    try {
        const response = await getGamerWorldProducts();
        response && dispatch(setGamerWorldProducts({ data: response.data }));
    } catch (error) {
        error && toast.error(error.message)
    }
    dispatch(setGamerWorldProducts({ loading: false }));
}

export const getProductsAsync = (params, toast) => async (dispatch) => {
    dispatch(setProducts({ loading: true }));
    try {
        const response = await getProducts(params);
        response && dispatch(setProducts({ data: response.data, totalCount: response.totalCount }));
    } catch (error) {
        error && toast.error(error.message);
    }
    dispatch(setProducts({ loading: false }));
};


export const getPopularSalesproductsAsync = (toast) => async (dispatch) => {
    dispatch(setPopularSalesProducts({ loading: true }));
    try {
        const response = await getPopularSalesProducts();
        response && dispatch(setPopularSalesProducts({ data: response.data }));
    } catch (error) {
        error && toast.error(error.message);
    }
    dispatch(setGamerWorldProducts({ loading: false }));
}


export const getFavoriteProductsAsync = (toast) => async (dispatch) => {
    dispatch(setFavoriteProducts({ loading: true }));
    try {
        const response = await getFavoriteProducts();
        response && dispatch(setFavoriteProducts({ data: response.data }));
    } catch (error) {
        error && toast.error(error.message);
    }
    dispatch(setFavoriteProducts({ loading: false }));
};

export const deleteFavoriteProductAsync = (id, toast) => async (dispatch) => {
    try {
        await deleteFavoriteProduct(id);
        dispatch(getFavoriteProductsAsync());
    } catch (error) {
        error && toast.error(error.message);
    }
};

//deleteFavoriteProduct, getFavoriteProducts, getProducts



export const { setProducts, setFavoriteProducts, setGamerWorldProducts, setPopularSalesProducts } = productsSlice.actions;

export default productsSlice.reducer;