import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {login} from "../http";

export const loginUser = createAsyncThunk(
    '/login',
    async (loginCredentials) => {
        const loginDataResponse = await login(loginCredentials);
        localStorage.setItem('user', JSON.stringify(loginDataResponse.data));
        return loginDataResponse;
    }
)

export const logoutUser = createAsyncThunk(
    '/logout',
    async () => {
        localStorage.removeItem('user');
        return null;
    }
);

export const setUser = createAsyncThunk(
    '/setUser',
    async () => {
        return JSON.parse(localStorage.getItem('user'));
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload.data;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.user = null;
                console.error(action?.error?.message || action?.error)
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                window.location.pathname = '/login';
                state.user = null;
            }).
            addCase(setUser.fulfilled, (state, action) => {
                state.user = action.payload;
        })
    }
});

export default userSlice.reducer;