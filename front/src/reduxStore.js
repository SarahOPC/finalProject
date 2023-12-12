import { createSlice, configureStore } from "@reduxjs/toolkit";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
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
            const existingEmployees = [...state.employees]; // Copy of the existing employees array
            existingEmployees.push(action.payload); // Adding the new employee to the copied array
            state.employees = existingEmployees; // Updating the state with the new array
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
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: { 
            ignoreActions: [
                FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER],
        },
    }),
});

export const persistor = persistStore(store);