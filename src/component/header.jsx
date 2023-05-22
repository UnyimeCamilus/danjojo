import React from "react";
import logo from "../assets/logo.svg"

const Header = ()=>{
    return(
        <div className="bg-[#EAE4F4]">
            
            <nav className="flex justify-between items-center p-2 pl-16 pr-16">
                
                 <img src={logo} alt="" />
                <ul>
                    <li><a href="#">Need help?</a></li>
                </ul>
                 
            </nav>
        </div>
    )
};

export default Header