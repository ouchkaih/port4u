import { useEffect, useState } from "react";
import '../assets/css/navbar.css'
import { useSelector } from "react-redux";
import { DarkModeToggle } from "darkmode-toggle-react"; 
// import {DarkModeToggle} from 'darkmode-toggle-react'

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    const [themeMode , setThemeMode] = useState(localStorage.getItem("theme"));
    
    const [theme , setThemeActive ] = useState( localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');


    const [items , setItems] = useState(useSelector((state)=> state.navBar.navItems))


    // const changeTheme = ()=>{
    //     console.log('dfka');
    //     setThemeMode(items==="dark"?'light': 'dark')
    // }

    return (
        <nav className="w-full dark:bg-[#0A192F] dark:text-[#5AE5C6] text-[#0A192F] shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div >
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="#">
                            <h2 className="text-2xl font-bold">LOGO</h2>
                        </a>
                        <div className="pl-3 md:hidden">
                            <DarkModeToggle theme={theme} setThemeActive={setThemeActive} />
                        </div>

                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {
                                items?.map(item=>(
                                    <li className={`${ item.active ? 'text-[#33a2aa] dark:text-[#5AE5C6]' : ' text-[#0A192F] dark:text-gray-200 '} hover:text-[#5AE5C6] dark:hover:text-[#5AE5C6] `}>
                                        <a href="#" className="capitalize">{item.name}</a>
                                    </li>
                                ))
                            }
                             
                            <li className="block md:hidden"   >
                               <div className=""> 
                                    <button className="bg-[#0A192F] dark:bg-[#5AE5C6]">
                                        <span class="button_top text-[#0A192F] dark:text-[#5AE5C6] border-2 border-[#0A192F] dark:border-[#5AE5C6] bg-[#FDFAF6] dark:bg-[#0A192F]"> Button
                                        </span>
                                    </button>
                                </div>
                            </li>                           
                        </ul>
                        
                        
                    </div>
                    
                </div>
                <div className="hidden md:flex items-center">
                    <div>
                        <button className="bg-[#0A192F] dark:bg-[#5AE5C6]">
                            <span class="button_top text-[#0A192F] dark:text-[#5AE5C6] border-2 border-[#0A192F] dark:border-[#5AE5C6] bg-[#FDFAF6] dark:bg-[#0A192F]"> Button
                            </span>
                        </button>
                    </div>
                    <div className="block pl-3">
                        <DarkModeToggle theme={theme} setThemeActive={setThemeActive} />
                    </div>
                </div>
            </div>
        </nav>
    );
}