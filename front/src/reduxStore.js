import { createSlice, configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Choice of the local storage

const userSlice = createSlice({
    name: "user",
    initialState: {
        firstName: "",
        lastName: "",
        dob: "",
        startDate: "",
        department: "",
        street: "",
        city: "",
        state: "",
        zip: "",
    },
    reducers: {
        saveUser: (state, action) => {
            const { firstName, lastName, dob, startDate, department, street, city, state: userState, zip } = action.payload;

            state.firstName = firstName;
            state.lastName = lastName;
            state.dob = dob;
            state.startDate = startDate;
            state.department = department;
            state.street = street;
            state.city = city;
            state.state = userState;
            state.zip = zip;
        },
    }
})

export const { saveUser } = userSlice.actions;

const rootReducer = combineReducers({
    user: userSlice.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
