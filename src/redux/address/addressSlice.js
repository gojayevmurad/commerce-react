import { createSlice } from "@reduxjs/toolkit";
import { addAddress, deleteAddress, getAddressList } from "../../api/address";

const initialState = {
    addressList: {
        loading: false,
        data: {
            billingAddress: [],
            shippingAddress: []
        }
    }
}

const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        setAddressList: (state, action) => {
            state.addressList = {
                ...state.addressList,
                ...action.payload
            }
        }
    }
})

export const addAddressAsync = (data, toast) => async (dispatch) => {
    dispatch(setAddressList({ loading: true }))
    try {
        const response = await addAddress(data)
        response && dispatch(setAddressList({ data: response.data }))
    } catch (error) {
        error && toast.error(error.message);
    }
    dispatch(setAddressList({ loading: false }))
}

export const getAddressListAsync = (toast) => async (dispatch) => {
    dispatch(setAddressList({ loading: true }))
    try {
        const response = await getAddressList();
        response && dispatch(setAddressList({ data: response.data }))
    } catch (error) {
        error && toast.error(error.message);
    }
    dispatch(setAddressList({ loading: false }))
}

export const deleteAddressAsync = (id, type, toast) => async (dispatch) => {
    dispatch(setAddressList({ loading: true }))
    try {
        const response = await deleteAddress(id, type);
        response && dispatch(setAddressList({ data: response.data }))
        response && toast.success(response.message)
    } catch (error) {
        error && toast.error(error.message)
    }
    dispatch(setAddressList({ loading: false }))
}


export const { setAddressList } = addressSlice.actions

export default addressSlice.reducer;