import { createSlice, configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Choice of the local storage

const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        firstName: "",
        lastName: "",
        dob: "",
        startDate: "",
        department: "",
        street: "",
        city: "",
        usState: "",
        zip: "",
    },
    reducers: {
        saveEmployee: (state, action) => {
            const { firstName, lastName, dob, startDate, department, street, city, usState: employeeState, zip } = action.payload;

            state.firstName = firstName;
            state.lastName = lastName;
            state.dob = dob;
            state.startDate = startDate;
            state.department = department;
            state.street = street;
            state.city = city;
            state.usState = employeeState;
            state.zip = zip;
        },
    }
})

export const { saveEmployee } = employeeSlice.actions;

const rootReducer = combineReducers({
    employee: employeeSlice.reducer,
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
