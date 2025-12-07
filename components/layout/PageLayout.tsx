'use client'

import React, { Fragment } from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import FloatingButtons from '../common/floatingButtons'
import SubHeader from '../common/subHeader'
import { NavigationProvider } from '@/lib/context/navigationContext'

interface ProviderTypes {
  children: React.ReactNode   
}

const PageLayout = ({children}:ProviderTypes) => {
  return (
   <Fragment>
    <NavigationProvider>
     <Header/>
      <SubHeader/>
      {children}
      <FloatingButtons/>
     <Footer/> 
    </NavigationProvider>
   </Fragment>
  )
}

export default PageLayout