import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar(){
    const [isSidebarEnabled,setIsSidebarEnabled] = useState(false);
    return(
    <main className="sticky top-0 z-50 bg-white ">
        <header className="flex items-center justify-between w-full max-w-[95%] sm:max-w-2xl md:max-w-5xl xl:max-w-7xl 2xl:max-w-7xl md:mx-auto">
            <Link className="" draggable="false" to={'/shopping-list-web-app/'}>
                <img className="p-2 ml-[.5em] hover:cursor-pointer hover:w-[52%] duration-200 hover:transition-all" draggable="false"  src="/shopping-list-web-app/img/logo nobg small.png" width={150} alt="" />
            </Link>

            <nav className="md:!flex hidden "> 
                <div className=" relative flex gap-0 mx-auto items-center justify-center">
                    <NavLink to={'/shopping-list-web-app/login'} draggable="false"
                    className={(({isActive}) => { 
                        return isActive ? 
                        `text-lg text-black hover:!font-semibold transition-all duration-100 p-5 bg-orange-100/50 h-full cursor-pointer hover:!text-black` 
                        : 'text-lg !text-black hover:!font-semibold transition-all duration-100 p-5 hover:!bg-orange-100/50 h-full hover:cursor-pointer'})}
                    >Login</NavLink>

                    <NavLink to={'/shopping-list-web-app/lists'} draggable="false"
                    className={(({isActive}) => { 
                        return isActive ? 
                        `text-lg text-black hover:!font-semibold transition-all duration-100 p-5 bg-orange-100/50 h-full cursor-pointer hover:!text-black` 
                        : 'text-lg !text-black hover:!font-semibold transition-all duration-100 p-5 hover:!bg-orange-100/50 h-full hover:cursor-pointer'})}
                    >My Lists</NavLink>
                    
                    <NavLink 
                    to={'/shopping-list-web-app/recipes'} draggable="false"
                    className={(({isActive}) => { 
                    return isActive ? 
                        `text-lg text-black hover:!font-semibold transition-all duration-100 p-5 bg-orange-100/50 h-full cursor-pointer hover:!text-black` 
                        : 'text-lg !text-black hover:!font-semibold transition-all duration-100 p-5 hover:!bg-orange-100/50 h-full hover:cursor-pointer'})}
                    >Recipes</NavLink>
                    
                    <NavLink to={'/shopping-list-web-app/about'} draggable="false"
                    className={(({isActive}) => { 
                        return isActive ? 
                        `text-lg text-black hover:!font-semibold transition-all duration-100 p-5 bg-orange-100/50 h-full cursor-pointer hover:!text-black` 
                        : 'text-lg !text-black hover:!font-semibold transition-all duration-100 p-5 hover:!bg-orange-100/50 h-full hover:cursor-pointer'})}
                    >About</NavLink>
                </div>
            </nav>
            <div className="flex md:hidden flex-row items-center">
                <div className="md:hidden flex mx-auto lg:pr-4 -right-3 cursor-pointer relative mt-1 mr-[.5em]">
                    <div id="mobile-menu-button"  onClick={()=>{ setIsSidebarEnabled(!isSidebarEnabled)}} className={`group ${isSidebarEnabled ? "open" : ""}`}>
                        <div className={`bg-black rounded-full relative t w-8 transition-all duration-200 h-1 ${isSidebarEnabled ? "rotate-45 top-2" : ""}`}></div>
                        <div className={`bg-black rounded-full w-8 h-1 transition-all ease-in-out duration-200 my-1 ${isSidebarEnabled ? "-rotate-45 " : ""}`}></div>
                        <div className={`bg-black rounded-full w-8 h-1 ${isSidebarEnabled ? "hidden" :""}`}></div>
                    </div>
                    <div className={`absolute transition-all ${isSidebarEnabled? "block" : "hidden"} z-40 -right-[78%] w-[calc(100vw+10px)] top-11 text-center bg-white`}>
                    <NavLink draggable="false" to={'/shopping-list-web-app/login'} className="text-lg text-black hover:font-semibold h-12 flex items-center hover:text-black justify-center hover:bg-orange-100 hover:cursor-pointer">Login</NavLink>
                    <NavLink draggable="false" to={'/shopping-list-web-app/lists'} className="text-lg text-black hover:font-semibold h-12 flex items-center hover:text-black justify-center hover:bg-orange-100 hover:cursor-pointer">Lists</NavLink>
                    <NavLink draggable="false" to={'/shopping-list-web-app/recipes'} className="text-lg text-black hover:font-semibold h-12 flex items-center hover:text-black justify-center hover:bg-orange-100 hover:cursor-pointer">Recipes</NavLink>
                    <NavLink draggable="false" to={'/shopping-list-web-app/about'} className="text-lg text-black hover:font-semibold h-12 flex items-center hover:text-black justify-center hover:bg-orange-100 hover:cursor-pointer">About</NavLink>
                    </div>
                </div>
            </div>
        </header>
    </main>)
}

export default NavBar;