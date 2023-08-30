import React, {useEffect} from 'react'
import Home from '../../homs/Home/Home'
import Friendly from '../../homs/friendly/Friendly'
import World from '../../homs/world/World'
import Started from '../../homs/started/Started'
import Platform from '../../homs/platform/Platform'
import Staking from '../../homs/staking/Staking'
import Footer from '../footer/Footer'
import Step from '../../homs/steps/Step'
import ResStep from '../../homs/steps/ResStep'
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
    
     

      <Step />
      <ResStep />
      <Staking />
      <Footer />
    </>
  )
}

export default Homer