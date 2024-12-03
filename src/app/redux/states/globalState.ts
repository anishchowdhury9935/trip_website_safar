import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface GlobalState {
    hamBurgerMenuVisibility: boolean;
}
const initialState: GlobalState = {
    hamBurgerMenuVisibility: false,
};

const globalState = createSlice({
    name: 'globalState',
    initialState,
    reducers: {
        setHamburgerMenuVisibility: (state, action) => {
            return { ...state, hamBurgerMenuVisibility: action.payload };
        },
    },
});

export const { setHamburgerMenuVisibility } = globalState.actions;
export default globalState.reducer;