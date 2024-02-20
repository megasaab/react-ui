import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const setLoading = createAsyncThunk(
    '/setLoading',
    async (loading) => {
        return loading;
    }
)

const sessionSlice = createSlice({
    name: 'session',
    initialState: {
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(setLoading.fulfilled, (state, action) => {
                state.loading = action.payload;
                state.error = null;
            })
    }
});

export default sessionSlice.reducer