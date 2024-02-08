import { useEffect, useState } from "react";
import '../assets/css/navbar.css'
import { useDispatch, useSelector } from "react-redux";
import { DarkModeToggle } from "darkmode-toggle-react"; 
import { Link, useLocation } from "react-router-dom";
import BuyMeCoffee from "./icons/BuyMeCoffe";
import { setTheme } from "../redux/Reducers/ThemeReducer";
// import {DarkModeToggle} from 'darkmode-toggle-react'

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const location = useLocation();
    const { pathname} = location;
    const dispatch = useDispatch()

    const [theme , setThemeActive ] = useState( localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');


    useEffect(()=>{
        dispatch(setTheme(theme));
    }, [theme, dispatch])


    const [items , setItems] = useState(useSelector((state)=> state.navBar.navItems))


    const ChangeActiveLink = ()=>{
        // e.preventDefault()
        console.log(pathname)
    }

    return (
        <nav className="w-full bg-[#FDFAF6] dark:bg-[#0A192F] dark:text-[#5AE5C6] text-[#0A192F] py-3 block relative z-50">
            <div className="justify-between px-4 md:items-center md:flex md:px-10">
                <div >
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="/">
                            <h2 className="text-2xl font-bold">Ra!vox</h2>
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
                                        className="w-10 h-10 text-[#0A192F] dark:text-[#5AE5C6]"
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
                                        className="w-10 h-10 text-[#0A192F] dark:text-[#5AE5C6]"
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
                <div className="absolute w-full md:w-full flex justify-center md:block bg-[#FDFAF6] dark:bg-[#0A192F] md:relative left-0">
                    <div
                        className={`justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 flex ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center text-sm justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {
                                items?.map((item, index)=>(
                                    <li key={index} className={`${ item.href === pathname ? 'text-[#0A192F] font-bold dark:text-[#5AE5C6]' : ' text-[#0A192F] dark:text-[#CCD6F6] opacity-80 dark:opacity-100'} hover:text-[#0A192F] text-center  hover:font-bold hover:opacity-100 dark:hover:text-[#5AE5C6] `}>
                                        <span className="text-[#0A192F] font-bold dark:text-[#5AE5C6] mr-2 text-sm">{index+1}.</span>
                                        <Link to={item.href} onClick={()=> ChangeActiveLink} className="capitalize">{item.name}</Link>
                                    </li>
                                ))
                            }
                             
                            <li className="block md:hidden"   >
                               <div className=""> 
                                    <button className="bg-[#0A192F] dark:bg-[#5AE5C6]">
                                        <span className="button_top text-[#0A192F] dark:text-[#5AE5C6] border-2 border-[#0A192F] dark:border-[#5AE5C6] bg-[#FDFAF6] dark:bg-[#0A192F] text-sm"> 
                                            Buy Me Coffee
                                        </span>
                                    </button>
                                </div>
                            </li>                           
                        </ul>
                    </div>
                    
                </div>
                <div className="hidden md:flex items-center">
                    <div>
                        <button className="bg-[#0A192F] dark:bg-[#5AE5C6] navbar_btn">
                            <Link to="https://www.buymeacoffee.com/raivox" className="button_top text-[#0A192F] dark:text-[#5AE5C6] flex justify-center items-center gap-4 border-2 border-[#0A192F] dark:border-[#5AE5C6] bg-[#FDFAF6] dark:bg-[#0A192F]"> 
                              <div className="flex justify-center items-center gap-2">
                                <BuyMeCoffee/>  <span className="text-xs whitespace-nowrap">Buy Me Coffee</span>
                              </div>
                            </Link>
                        </button>
                    </div>
                    <div className="block pl-3 dark:text-[#CCD6F6]">
                        <DarkModeToggle theme={theme} setThemeActive={setThemeActive} />
                    </div>
                </div>
            </div>
        </nav>
    );
}