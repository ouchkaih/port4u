import { configureStore } from "@reduxjs/toolkit";
import NavbarReducer from "../Reducers/NavbarReducer";
import ThemeReducer from "../Reducers/ThemeReducer";



export const store= configureStore(
    {
        reducer: {
            'navBar' : NavbarReducer,
            'theme' : ThemeReducer
        }
    }
)