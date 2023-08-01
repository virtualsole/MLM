import React, {useEffect} from 'react'
import Home from '../../homs/Home/Home'
import Friendly from '../../homs/friendly/Friendly'
import World from '../../homs/world/World'
import Started from '../../homs/started/Started'
import Platform from '../../homs/platform/Platform'
import Staking from '../../homs/staking/Staking'
import Footer from '../footer/Footer'
const Homer = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <Home />
      <Friendly />
      <World />
      <Started />
      <Platform />
      <Staking />
      <Footer />
    </>
  )
}

export default Homer