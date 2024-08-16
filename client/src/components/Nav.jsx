import React from "react";
import DropDown from "./DropDown";
function NavBar() {
    return(
        <div className="flex   h-20   items-center z-20 text-white " >
            <div className="mr-auto  w-20 text-center ml-10">
                <a href="." className="font-bold text-2xl"><img src="https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2020/07/grow-plant-store-logo-white.svg" alt="Grow"/></a>
                </div>
                <div className="flex justify-around items-center text-center w-[60%]">
                <a href=".">Home</a>
                <a href=".">Shop</a>
                <DropDown />
                <a href=".">About Us</a>
                <a href=".">Contact Us</a>
                
                {/* <a href="." >Login</a>  */}
                <a className=" border-[1px] border-black text-black font-bold px-5 py-2 rounded-lg bg-green-400 hover:bg-green-500 " href=".">Register</a>
                

                </div>
            
        </div>
    );
}

export default NavBar;