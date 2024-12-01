import React from 'react'
import Header from '../../components/home-components/header'
import Showcase from '../../components/home-components/showcase'
import Category from '../../components/home-components/category'
import AutoOils from '../../components/home-components/autooils'
import Recommend from '../../components/home-components/recommend'
import FrequentlySold from '../../components/home-components/frequently-sold'
import Footer from '../../components/home-components/footer'

const Home = () => {
  return (
    <>
        <Header/>
        <Showcase/>
        <Category/>
        <AutoOils/>
        <Recommend/>
        <FrequentlySold/>
        <Footer/>
    </>
  )
}

export default Home