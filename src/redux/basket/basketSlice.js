import { createSlice } from "@reduxjs/toolkit";
import { addToBasket, getBasketItems, removeBasketItems } from "../../api/basket";

const initialState = {
    basketItems: {
        loading: false,
        data: []
    },
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        setBasketItems: (state, action) => {
            state.basketItems = {
                ...state.basketItems,
                ...action.payload,
            };
        },
    },
});

export const addToBasketAsync = (data, toast) => async (dispatch) => {
    dispatch(setBasketItems({ loading: true }));
    try {
        const response = await addToBasket(data);
        response && dispatch(setBasketItems({ data: response.data }));
    } catch (error) {
        error && toast.error(error.message);
    }
    dispatch(setBasketItems({ loading: false }));
};

export const removeBasketItemsAsync = (data, toast) => async (dispatch) => {
    dispatch(setBasketItems({ loading: true }));
    try {
        const response = await removeBasketItems(data);
        response && dispatch(setBasketItems({ data: response.data }))
    } catch (error) {
        error && toast.error(error.message)
    }
    dispatch(setBasketItems({ loading: false }))
}

export const getBasketItemsAsync = (toast) => async (dispatch) => {
    dispatch(setBasketItems({ loading: true }));
    try {
        const response = await getBasketItems();
        response && dispatch(setBasketItems({ data: response.data }));
    } catch (error) {
        error && toast.error(error.message);
    }
    dispatch(setBasketItems({ loading: false }));
};

export const { setBasketItems } = basketSlice.actions;

export default basketSlice.reducer;