import { createSlice } from '@reduxjs/toolkit';
import { getUserData } from '../../api/profile';


const initialState = {
    data: {}
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.data = action.payload
        }
    }
})

export const getUserDataAsync = (toast) => async (dispatch) => {
    try {
        const response = await getUserData();
        response && dispatch(setUserData(response.data));
    } catch (error) {
        error && toast.error(error.message);
    }
}

export const { setUserData } = profileSlice.actions;
export default profileSlice.reducer;