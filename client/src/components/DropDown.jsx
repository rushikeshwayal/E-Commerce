import React from "react";
import DropDownpng from './images/icons8-sort-down-30.png'
function DropDown() {
    
function DropdownIn() {
    const DropDown = document.getElementById('DropDown');
    DropDown.style.display = 'block';
}

function DropdownOut() {
    const DropDown = document.getElementById('DropDown');
    DropDown.style.display = 'none';
}



    return(
        <div>
             <div className="relative text-white  ">
  <button 
    className=" rounded-lg w-40 flex justify-between px-5 py-2 items-center transition duration-300 hover:bg-white hover:text-black" 
    onMouseOver={DropdownIn} 
    onMouseOut={DropdownOut}
  >
   Categories

    <img className="h-5" src={DropDownpng} alt="Dropdown Icon" />
  </button>

  {/* Dropdown menu */}
  <ul 
    className="hidden absolute  left-0 w-52  text-white shadow-lg pt-2   z-10"
    id="DropDown"
    onMouseOver={DropdownIn}
    onMouseOut={DropdownOut}
  >
    <li className="hover:bg-gray-100 hover:text-black transition duration-300 rounded-lg">
      <a className="block px-3 py-2 text-end mr-5" href=".">Cactus</a>
    </li>
    <li className="hover:bg-gray-100 hover:text-black transition duration-300 rounded-lg">
      <a className="block px-3 py-2 text-end mr-5" href=".">Bonsai</a>
    </li>
     <li className="hover:bg-gray-100 hover:text-black transition duration-300 rounded-lg">
      <a className="block px-3 py-2 text-end mr-5" href=".">Succulent</a>
    </li>
     <li className="hover:bg-gray-100 hover:text-black transition duration-300 rounded-lg">
      <a className="block px-3 py-2 text-end mr-5" href=".">Indoor Plants</a>
    </li>
  </ul>
</div>
        </div>
    );
}
export default DropDown;