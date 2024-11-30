import React from 'react'
import Header from '../../components/home-components/header'
import Showcase from '../../components/home-components/showcase'
import Category from '../../components/home-components/category'
import AutoOils from '../../components/home-components/autooils'

const Home = () => {
  return (
    <>
        <Header/>
        <Showcase/>
        <Category/>
        <AutoOils/>
    </>
  )
}

export default Home