import { useEffect, useState } from "react";
import '../assets/css/navbar.css'
import { useDispatch, useSelector } from "react-redux";
import { DarkModeToggle } from "darkmode-toggle-react"; 
import { Link, useLocation } from "react-router-dom";
import BuyMeCoffee from "./icons/BuyMeCoffe";
import { setTheme } from "../redux/Reducers/ThemeReducer";
// import {DarkModeToggle} from 'darkmode-toggle-react'

export default function NavBar({aboutRef , homeRef, projectsRef}) {
    const [navbar, setNavbar] = useState(false);
    const [pathname, setPathname] = useState('home');
    const dispatch = useDispatch()
    const [scrollY, setScrollY] = useState(window.scrollY)

    const [theme , setThemeActive ] = useState( localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');


    useEffect(()=>{
        dispatch(setTheme(theme));
    }, [theme, dispatch])


    const [items , setItems] = useState(useSelector((state)=> state.navBar.navItems))


    const ChangeActiveLink = (path)=>{
        setPathname(path)
    }

    useEffect(() => {
        const handleScroll = event => {
          if(window.scrollY > 0 && window.scrollY <300){
            setPathname('home')
            ChangeActiveLink('home')
          }else if(window.scrollY > 300 && window.scrollY < 800){
            setPathname('about')
            ChangeActiveLink('about')
          }else if(window.scrollY > 800){
            setPathname('projects')
            ChangeActiveLink('projects')
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    const scrollToSection = (ref, path) => {
        const offsetTop = ref.current.offsetTop;
        window.scrollTo({
            top: offsetTop - 60, // Adjust 60px to match the height of your NavBar
            behavior: 'smooth',
        });

        ChangeActiveLink(path)
    };

    return (
        <nav className="w-full relative md:fixed backdrop-blur-2xl supports-backdrop-blur:bg-white/60 dark:bg-transparent bg-blend-lighten hover:bg-blend-darken top-0 bg-[#FDFAF6] dark:bg-[#0A192F] dark:text-[#5AE5C6] text-[#0A192F] py-3 block z-50">
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
                <div className="
                 backdrop-blur-2xl supports-backdrop-blur:bg-white/60 dark:bg-transparent bg-blend-lighten hover:bg-blend-darken 
                relative w-full md:w-full flex justify-center md:block bg-[#FDFAF6] dark:bg-[#0A192F] md:relative left-0 ">
                    <div
                        className={`justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 flex pl-7 md:pl-20 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center text-sm justify-center space-y-8 md:flex md:space-x-10 md:space-y-0">
                            {
                                items?.map((item, index)=>(
                                    <li key={index} className={`${ item.id === pathname ? 'text-[#0A192F] font-bold dark:text-[#5AE5C6]' : ' text-[#0A192F] dark:text-[#CCD6F6] opacity-80 dark:opacity-100'} hover:text-[#0A192F] text-center hover:font-bold hover:opacity-100 dark:hover:text-[#5AE5C6] cursor-pointer `}>
                                        <span className="text-[#0A192F] font-bold dark:text-[#5AE5C6] mr-2 text-sm">{index+1}.</span>
                                        <button to="#" onClick={() => scrollToSection(eval(item.id + 'Ref'), item.id)} className="capitalize">{item.name}</button>
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