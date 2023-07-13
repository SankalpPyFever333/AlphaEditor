import React from 'react'
import Header from './Header'
import WriteCode from './WriteCode'
function Home() {
  return (
    // we can't return two adjascent jsx element, so wrap them in a <>
    <>
      <Header />
      <WriteCode />
    </>
  )
}

export default Home




