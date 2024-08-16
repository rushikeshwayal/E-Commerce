import React from "react";




function FeturedProduct() {


    return(
     <div className="mt-72">
  <div className="flex justify-center flex-wrap rounded-lg">
    <div className="bg-gray-100 w-[100%]  rounded-xl p-10 flex flex-wrap flex-row justify-between items-start  space-y-20">
      {/* Header Section */}
      <div className="flex flex-wrap   justify-between items-center w-full">
        <div className="space-y-4 lg:w-1/2">
          <h1 className="text-5xl font-bold text-black">Featured Products</h1>
          <p className="text-gray-600">
            Use these paragraphs to focus on the topic in the headline. Make
            sure you keep it short and attractive.
          </p>
        </div>
        {/* Button Section */}
        <div className="lg:w-auto mt-4 lg:mt-0">
          <button className="border-2 border-black px-5 py-3 bg-green-400 font-semibold text-black rounded-lg hover:bg-green-500 transition-colors">
            View All Plants
          </button>
        </div>
      </div>

      {/* Product Section */}
      <div className="flex flex-wrap justify-around items-center w-full space-y-10 space-x-10 mt-10 lg:mt-0">
        <div className="flex flex-col items-center mt-8 space-y-3 w-[250px]">
          <img
            src="https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2018/01/pic25-free-img-600x600.jpg"
            alt="product"
            className="w-full rounded-lg shadow-md hover:scale-105 transition-transform"
          />
          <p className="font-medium text-gray-700">Lemon Bonsai</p>
          <div className="flex gap-2">
          <p>Price</p>
          <p className="line-through">$300</p>
          <p className="font-semibold text-green-500">$119</p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-3 w-[250px]">
          <img
            src="https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2018/01/pic21-free-img.jpg"
            alt="product"
            className="w-full rounded-lg shadow-md hover:scale-105 transition-transform"
          />
          <p className="font-medium text-gray-700">Rubber Indore Plant</p>
          <div className="flex gap-2">
          <p>Price</p>
          <p className="line-through">$350</p>
          <p className="font-semibold text-green-500">$149</p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-3 w-[250px]">
          <img
            src="https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2018/01/pic15-free-img-600x600.jpg"
            alt="product"
            className="w-full rounded-lg shadow-md hover:scale-105 transition-transform"
          />
          <p className="font-medium text-gray-700">Boncellensis Secullant</p>
          <div className="flex gap-2">
          <p>Price</p>
          <p className="line-through">$200</p>
          <p className="font-semibold text-green-500">$99</p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-3 w-[250px]">
          <img
            src="https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2018/01/pic13-free-img-600x600.jpg"
            alt="product"
            className="w-full rounded-lg shadow-md hover:scale-105 transition-transform"
          />
          <p className="font-medium text-gray-700">Old Lady Cactus</p>
          <div className="flex gap-2">
          <p>Price</p>
          <p className="line-through">$400</p>
          <p className="font-semibold text-green-500">$299</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    )
    }

    

export default FeturedProduct;