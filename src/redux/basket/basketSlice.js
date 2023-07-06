import { createSlice } from "@reduxjs/toolkit";
import {
  addToBasket,
  getBasketItems,
  getBasketItemsData,
  removeBasketItems,
} from "../../api/basket";

const initialState = {
  loading: {
    main: false,
  },
  basketItems: {
    data: [],
  },
  productsDetails: [],
  totalPrice: 0,
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
    setBasketLoading: (state, action) => {
      state.loading = { ...state.loading, ...action.payload };
    },
    setBasketProductsDetails: (state, action) => {
      state.productsDetails = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export const addToBasketAsync = (data, toast) => async (dispatch) => {
  dispatch(setBasketLoading({ [data.productId]: true }));
  try {
    const response = await addToBasket(data);
    response && dispatch(setBasketItems({ data: response.data }));
  } catch (error) {
    error && toast.error(error.message);
  }
  dispatch(setBasketLoading({ [data.productId]: false }));
};

export const removeBasketItemsAsync = (data, toast) => async (dispatch) => {
  dispatch(setBasketLoading({ [data.productId]: true }));

  try {
    const response = await removeBasketItems(data);
    response && dispatch(setBasketItems({ data: response.data }));
  } catch (error) {
    error && toast.error(error.message);
  }
  dispatch(setBasketLoading({ [data.productId]: false }));
};

export const getBasketItemsAsync = (toast) => async (dispatch) => {
  dispatch(setBasketLoading({ main: true }));
  try {
    const response = await getBasketItems();
    response && dispatch(setBasketItems({ data: response.data }));
  } catch (error) {
    error && toast.error(error.message);
  }
  dispatch(setBasketLoading({ main: true }));
};

export const getBasketItemsDatasAsync = (toast) => async (dispatch) => {
  dispatch(setBasketLoading({ main: true }));
  try {
    const response = await getBasketItemsData();
    response && dispatch(setBasketProductsDetails(response.data));
    response && dispatch(setTotalPrice(response.price));
    console.log(response.price);
  } catch (error) {
    error && toast.error(error.message);
  }
  dispatch(setBasketLoading({ main: false }));
};

export const {
  setBasketItems,
  setBasketLoading,
  setBasketProductsDetails,
  setTotalPrice,
} = basketSlice.actions;

export default basketSlice.reducer;
