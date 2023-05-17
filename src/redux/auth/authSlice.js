import { createSlice } from "@reduxjs/toolkit";
import { changePassword, login, register } from "../../api/auth";

const initialState = {
    register: {
        loading: false,
    },
    login: {
        loading: false,
    },
    changePassword: {
        loading: false,
    },
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setRegisterData: (state, action) => {
            state.register.loading = action.payload.loading;
        },
        setLoginData: (state, action) => {
            state.login.loading = action.payload.loading;
        },
        setChangePasswordData: (state, action) => {
            state.changePassword.loading = action.payload.loading;
        },
    },
});

export const registerAsync = (data, navigate, toast) => async (dispatch) => {
    dispatch(setRegisterData({ loading: true }));
    try {
        const response = await register(data);
        response && toast.success(response.message);
        navigate("/login");
    } catch (error) {
        error && toast.error(error.message);
    }
    dispatch(setRegisterData({ loading: false }));
};

export const loginAsync = (data, navigate, toast) => async (dispatch) => {
    dispatch(setLoginData({ loading: true }));
    try {
        const response = await login(data);
        if (response) {
            localStorage.setItem("user", JSON.stringify(response.data));
            toast.success(response.message);
        }
        navigate("/");
    } catch (error) {
        error && toast.error(error.message);
    }
    dispatch(setLoginData({ loading: false }));
};

export const changePasswordAsync = (data, toast) => async (dispatch) => {
    dispatch(setChangePasswordData({ loading: true }));
    try {
        const response = await changePassword(data);
        response && toast.success(response.message);
    } catch (error) {
        error && toast.error(error.message);
    }
    dispatch(setChangePasswordData({ loading: false }));
};

export const { setRegisterData, setLoginData, setChangePasswordData } =
    authSlice.actions;

export default authSlice.reducer;
