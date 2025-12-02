import React from 'react'
import Header from './header'
import Banner from './banner'
import Card from './card'
import State from './overviewState'

function Dashboard() {
  return (
    <>
    <div className="px-[50px] py-[30px]">
        <Header />
        <Banner />
        <Card />
        <State />
        

    </div>
    </>
  )
}

export default Dashboard
