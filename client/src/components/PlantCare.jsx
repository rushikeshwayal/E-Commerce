import React from "react";
import Plant1Jpg from "./images/Planting1.jpg"
import Plant2Jpg from "./images/Planting2.jpg"

function PlantCare() {
    return(
       <div className="flex flex-wrap justify-center relative mt-20 ">
  {/* First image with dark overlay */}
  <div className="relative w-[50%] h-[400px]">
    <div className="absolute inset-0 bg-black/40 z-10"></div>
    <img className="w-full  relative z-0 h-[400px] bg-cover object-cover" src={Plant1Jpg} alt="Plant1" />
    <div className="absolute inset-0 flex justify-center text-start  flex-col ml-10 gap-3 z-20">
      <h1 className="text-white text-2xl font-bold">Plants Care Instruction</h1>
      <p className="text-white text-xl mb-20">Each order includes a small care guide booklet.</p>
      <a className="text-white text-sm font-bold hover:text-green-500" href=".">Shop Now →</a>
    </div>
  </div>

  {/* Second image with dark overlay */}
  <div className="relative w-[50%] ">
    <div className="absolute inset-0 bg-black/55 z-10"></div>
    <img className="w-full  relative z-0 h-[400px] bg-cover object-cover" src={Plant2Jpg} alt="Plant1" />
    <div className="absolute inset-0 flex justify-center text-start  flex-col ml-10 gap-3 z-20">
      <h1 className="text-white text-2xl font-bold">Plants Care Instruction</h1>
      <p className="text-white text-xl mb-20">Each order includes a small care guide booklet.</p>
      <a className="text-white text-sm font-bold hover:text-green-500" href=".">Shop Now →</a>
    </div>
  </div>
</div>

    );
}

export default PlantCare;
