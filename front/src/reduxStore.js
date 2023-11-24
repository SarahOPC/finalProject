import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: "",
    reducers: {
        saveUser: (state, action) => {
            state = action.payload;
        },
    }
})

export const { saveUser } = userSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    }
});
