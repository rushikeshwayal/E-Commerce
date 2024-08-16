import React from "react";
import homePng from './images/pexels-mak_-jp-107017486-10839684.jpg'
import NavBar from "./Nav";



function LandingHome() {


    return(
        <div >
       
     <div className="h-[1000px] w-full bg-cover bg-center -z-10 " style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${homePng})`, backgroundAttachment: 'fixed'  }}>
    <NavBar />
    <div  className="text-white min-h-screen flex flex-wrap justify-center flex-col items-center pb-40 gap-2">
   
        <h1 className="text-2xl  ">The Boutique Store For Plants!</h1>
        <h1 className="text-7xl  font-bold">Everything Is Better With </h1>
        <h1 className="text-7xl font-bold text-green-400">Plants</h1>
       
    </div>


</div>
</div>
    );
    }

    

export default LandingHome;