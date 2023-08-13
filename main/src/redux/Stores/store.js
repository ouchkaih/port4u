import { configureStore } from "@reduxjs/toolkit";
import NavbarReducer from "../Reducers/NavbarReducer";



export const store= configureStore(
    {
        reducer: {
            'navBar' : NavbarReducer
        }
    }
)