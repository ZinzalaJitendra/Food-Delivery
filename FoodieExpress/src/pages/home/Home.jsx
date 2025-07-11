import React from 'react';
import Header from '../../header/Header';
import ExploreMenu from '../../components/exploreMenu/ExploreMenu';
import { useState } from 'react';
import FoodDisplay from '../../components/foodDisplay/FoodDisplay';
import AppDownload from '../../components/appDownload/AppDownload';

const Home = () => {

    const [category, setCategory] = useState('All')

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home
