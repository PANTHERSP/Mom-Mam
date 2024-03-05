import React from 'react'
import BottomTab from '../components/BottomTab'
import Header from '../components/Header'
const SearchScreen = () => {
  return (
    // <div style={{width: 430, height: 932,display: 'flex',flexDirection: 'column',}}>
      <div style={{display: 'flex',flexDirection: 'column',width: '100%',height: '100vh'}}>
      <div style={{backgroundImage: 'linear-gradient(to bottom, #CFA6EB, #C39DC3, #6587BA)',width: '100%',height: '100%'}}>
        <Header />
        


        <BottomTab activeTab={'search'} />
        </div>
        </div>
  )
}

export default SearchScreen
