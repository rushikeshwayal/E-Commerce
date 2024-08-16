import React from "react";




function Categories() {


    return(
       <div className="flex h-[300px] justify-around items-center flex-wrap pt-40 bg-gradient-to-b from-gray-50 to-white">
  <div className="w-[20%] flex flex-col justify-center items-center group transform transition-transform duration-300 hover:scale-110">
    <img
      src="https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2018/01/pic59-free-img.jpg"
      alt="Cactus"
    />
    <h1 className="font-semibold text-xl">Cactus →</h1>
  </div>
  <div className="w-[20%] flex flex-col justify-center items-center group transform transition-transform duration-300 hover:scale-110">
    <img
      src="https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2018/01/pic60-free-img.jpg"
      alt="Bonsai"
    />
    <h1 className="font-semibold text-xl">Bonsai →</h1>
  </div>
  <div className="w-[20%] flex flex-col justify-center items-center group transform transition-transform duration-300 hover:scale-110">
    <img
      src="https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2018/01/pic61-free-img.jpg"
      alt="Succulent"
    />
    <h1 className="font-semibold text-xl">Succulent →</h1>
  </div>
  <div className="w-[20%] flex flex-col justify-center items-center mb-[5px] group transform transition-transform duration-300 hover:scale-110">
    <img
      src="https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2021/03/indoor-plant-secculant-600x600.jpg"
      alt="Indoor Plants"
    />
    <h1 className="font-semibold text-xl">Indoor Plants →</h1>
  </div>
</div>
    );
    }

    

export default Categories;