import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LeafPng from './images/Leaf.png';
import TrippleLeafPng from './images/triple Leaf.png';
import TrophyPng from './images/Trophy.png';
import TruckPng from './images/Truck.png';
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
function DetailPlant() {
    return(
        <div className="flex justify-around h-40 items-center flex-wrap mt-10 mb-10">  
        
            <div className="w-[20%] ">
            <img src={LeafPng} alt="leaf" className="h-12 bg-gray-200 rounded-full p-3" ></img>
                <h1 className="text-2xl font-bold">High Quality Plants</h1>
                <p className="text-xl">A line about the service you've mentioned above.</p>
            </div>
    

        <div className="w-[20%]">
            <img src={TrippleLeafPng} alt="leaf" className="h-12 bg-gray-200 rounded-full p-3" ></img>
                <h1 className="text-2xl font-bold">Wide Plant Range</h1>
                <p>A line about the service you've mentioned above.</p>
        </div> 

        <div className="w-[20%]">
             <img src={TrophyPng} alt="leaf" className="h-12 bg-gray-200 rounded-full p-3"></img>
                <h1 className="text-2xl font-bold">Excellent Services</h1>
                <p className="text-xl">A line about the service you've mentioned above.</p>
        </div> 

            <div className="w-[20%]">
            <img src={TruckPng} alt="leaf" className="h-12 bg-gray-200 rounded-full p-3"></img>
                <h1 className="text-2xl font-bold">Fast Delivery</h1>
                <p  className="text-xl">A line about the service you've mentioned above.</p>
            </div>

        </div> 
       
    );
}

export default DetailPlant;