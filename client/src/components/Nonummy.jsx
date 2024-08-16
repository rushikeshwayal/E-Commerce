import React from "react";
import CoutesPng from "./images/Coutes.png"
import FacebookIcon from "./images/facebookIcon.png"
import InstaIcon from "./images/icons8-instagram-24.png"
import LinkdinIcon from "./images/icons8-linkedin-24.png"
import YoutubeIcon from "./images/icons8-youtube-24.png"
function Nonummy() {
    return(
        <div className="flex flex-wrap items-center mt-20 gap-24">
        <div className="flex">
            <img className="h-[450px]" src="https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2020/07/green-leaf-plants.jpg" alt="img" />
            <img className="h-[450px]" src="https://images.pexels.com/photos/4132363/pexels-photo-4132363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" />
        </div>
        <div className="w-[600px] ">
        <div className="flex flex-col flex-wrap gap-5">
            <h1 className="text-2xl text-green-500 font-bold">We Help Gardens Thrive!</h1>
            <p className="text-5xl font-bold">Nonummy Cum Convallis</p>
            <p  className="text-xl">Elementum tristique mi montes nibh deserunt magna. Netus assumenda molestias nisi porro, nascetur molas. Habitant urna fugiat wisi nceptos sodales magna. Molestie suspendisse faucibus justo! Sollicitudin tempore unde, dolorem, blanditiis a nam beatae nihil bibendum, taciti.</p>
            <img className="w-8" src={CoutesPng} alt="img" />
            <p  className="text-xl">Tempore ut mauris aenean cillum ultrices nunc aliqu auris aenean mpore utma.</p>
        </div>
<div className="flex w-52 justify-around items-center space-x-5 mt-5">
   <img className="h-12 w-12 bg-cover p-1 rounded-full object-contain hover:bg-green-300" src={FacebookIcon} alt="img" />
    <img className="h-12 w-12 bg-cover p-1 rounded-full object-contain hover:bg-green-300" src={InstaIcon} alt="img" />
    <img className="h-11 w-11 bg-cover p-1 rounded-full object-contain hover:bg-green-300" src={LinkdinIcon} alt="img" />
    <img className="h-12 w-12 bg-cover p-1 rounded-full object-contain hover:bg-green-300" src={YoutubeIcon} alt="img" />
</div>
        </div>
        </div>
    );
}

export default Nonummy;
