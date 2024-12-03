import { configureStore } from '@reduxjs/toolkit';
import globalState from './states/globalState'; // Adjust the import path as needed

const store = configureStore({
    reducer: {
        globalState,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;