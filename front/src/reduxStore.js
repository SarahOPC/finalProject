import { createSlice, configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Choice of the local storage

const initialState = {
    employees: [],
};

const employeeSlice = createSlice({
    name: "employee",
    initialState,        
    reducers: {
        saveEmployee: (state, action) => {
            //state.employees = [...state.employees, action.payload]; // Concat every new employee in employees

            // Creating a copy of the existing employees array
            const existingEmployees = [...state.employees];

            // Adding the new employee to the copied array
            existingEmployees.push(action.payload);

            // Updating the state with the new array
            state.employees = existingEmployees;

            // Debugging each entry in the employees array
            console.log("Existing Employees:");
            existingEmployees.forEach((employee, index) => {
            console.log(`Employee ${index + 1}: `, employee);
            });
        },
    }
});

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
