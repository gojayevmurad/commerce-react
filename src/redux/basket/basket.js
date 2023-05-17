import { createSlice } from "@reduxjs/toolkit";
import { addToBasket, getBasketItems } from "../../api/basket";

const initialState = {
    addToBasket: {
        loading: false,
    },
    basketItems: {
        loading: false,
    },
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        setAddToBasket: (state, action) => {
            state.addToBasket = {
                ...state.addToBasket,
                ...action.payload,
            };
        },
        setBasketItems: (state, action) => {
            state.basketItems = {
                ...state.basketItems,
                ...action.payload,
            };
        },
    },
});

export const addToBasketAsync = (data, toast) => async (dispatch) => {
    dispatch(setAddToBasket({ loading: true }));
    try {
        const response = await addToBasket(data);
        response && dispatch(setAddToBasket({ data: response.data }));
    } catch (error) {
        error && toast.error(error.message);
    }
    dispatch(setAddToBasket({ loading: false }));
};
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

export const { setAddToBasket, setBasketItems } = basketSlice.actions;

export default basketSlice.reducer;
