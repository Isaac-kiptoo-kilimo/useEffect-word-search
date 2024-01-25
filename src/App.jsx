import { useState } from 'react'

import './App.scss'
import Navbar from './layout/Navbar'
import Main from './layout/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="main">
    <div className="container">
    <div className="nav">
      <Navbar/>
    </div>
    <div className="main-cont">
      <Main/>
    </div>
   </div>
   </div>
  )
}

export default App
