import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    navItems : [ 
        {
            name: 'home',
            href: '/',
        },{
            name: 'about',
            href: '/about-me',
        },{
            name: 'education',
            href: '/education',
        },{
            name: 'projects',
            href: '/projects',
        }
    ]
}
export const NavbarReducer = createSlice(
    {
        name:'navBar',
        initialState,
        reducers : {
            setStatus : (state, action)=>{
                state.navItems[action.payload] = {
                    ...state.navItems[action.payload],
                    active : true
                }
            }
        }

    }
)

export const {setStatus} = NavbarReducer.actions
export default NavbarReducer.reducer