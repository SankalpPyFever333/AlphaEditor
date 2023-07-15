import React from 'react'
import Header from './Header'
import WriteCode from './WriteCode'
import Result from './Result'
function Home() {
  return (
    // we can't return two adjascent jsx element, so wrap them in a <>
    <>
      <Header />
      <WriteCode />
      <Result/>
    </>
  )
}

export default Home




