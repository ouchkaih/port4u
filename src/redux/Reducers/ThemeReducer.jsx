import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    theme: 'dark'
}
export const ThemeReducer = createSlice(
    {
        name:'theme',
        initialState,
        reducers : {
            setTheme : (state, action)=>{
                state.theme = action.payload;
            }
        }

    }
)

export const {setTheme} = ThemeReducer.actions
export default ThemeReducer.reducer