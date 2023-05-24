import { createSlice } from "@reduxjs/toolkit";
import { addAddress, deleteAddress, editAddress, getAddressList } from "../../api/address";

const initialState = {
    addressList: {
        loading: false,
        data: []
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


export const { setAddressList } = addressSlice.actions

export default addressSlice