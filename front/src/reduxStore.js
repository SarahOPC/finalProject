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
            state.employees = [...state.employees, action.payload]; // Concat every new employee in employees
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
