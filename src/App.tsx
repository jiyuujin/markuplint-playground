import React from 'react'
import HelloWorld from './components/HelloWorld'

const App = () => {
  return (
    <>
      <img
        alt="React logo"
        src="../assets/logo.png"
        width="80"
        height="80"
        decoding="async"
      />
      <HelloWorld msg="Hello React 16.13 + Vite" />
    </>
  )
}

export default App
