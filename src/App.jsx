import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import HelloWorld from './HelloWorld/HelloWorld'
 //panggil component

function App() {
  return(
    <div>
      <HelloWorld />
    </div>
  )
}

export default App
