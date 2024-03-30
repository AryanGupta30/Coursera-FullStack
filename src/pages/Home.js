import React from 'react'
import Cards1 from '../components/cards1';
import Explore from '../components/explore';
import Footer from '../components/footer';
import Navbar from '../components/navbar'
import Homepagecompo from '../components/homepagecompo';

const Home = () => {
  return (
    <>
      <Navbar />
      <Homepagecompo />
      <Cards1 />
      <Explore />
      <Footer />
    </>
  )
}

export default Home;