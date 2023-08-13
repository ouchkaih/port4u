import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    navItems : [ 
        {
            name: 'home',
            href: '/',
            active: true
        },{
            name: 'about me',
            href: '/',
            active: false
        },{
            name: 'projects',
            href: '/',
            active: false
        },{
            name: 'education',
            href: '/',
            active: false
        },
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