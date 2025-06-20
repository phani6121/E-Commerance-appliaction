import React from 'react'
import CategoryList from '../components/CategoryList';
import BannerProduct from '../components/BannerProduct';
import HorizontalCartProduct from '../components/HorizontalCartProduct';
import VerticalCartProduct from '../components/VerticalCartProduct';

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />
      <HorizontalCartProduct category={"airpodes"} heading={"Top's Airpodes"} />
      <HorizontalCartProduct category={"watches"} heading={"Popular Watches"} />

      <VerticalCartProduct category={"mobiles"} heading={"Popular Mobiles"} />
      <VerticalCartProduct category={"Mouse"} heading={"Popular Mouse"} />
      <VerticalCartProduct category={"television"} heading={"Popular television"} />
      <VerticalCartProduct category={"camera"} heading={"Popular camera"} />
      <VerticalCartProduct category={"earphones"} heading={"Popular earphones"} />
      <VerticalCartProduct category={"speakers"} heading={"Popular speakers"} />
      <VerticalCartProduct category={"refrigerator"} heading={"Popular refrigerator"} />
      <VerticalCartProduct category={"trimmer"} heading={"Popular trimmer"} />

    </div>
  )
}

export default Home;