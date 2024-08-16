import React from 'react';
// import NavBar from './components/Nav';
import LandingHome from './components/LandingHome';
import DetailPlant from './components/DetailPlant';
import Categories from './components/Categories';
import FeturedProduct from './components/Featured Products';
import Nonummy from './components/Nonummy';
import PlantCare from './components/PlantCare';
import Adv from './components/Advertisement';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
function App() {
  return (
    <div className="">
      <LandingHome />
      <DetailPlant />
      <Categories />
      <FeturedProduct />
      <Nonummy />
      <PlantCare />
      <Adv />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
