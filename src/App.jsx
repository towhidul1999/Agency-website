import { useState } from 'react'
// import './App.css'

import Footer from './Components/Footer'
import Herosection from './Components/Herosection'
import Navabar from './Components/Navabar'
import OurClient from './Components/OurClient'
import Service from './Components/Service'
import Technology from './Components/Technology'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navabar></Navabar>
        <Herosection></Herosection>
        <OurClient></OurClient>
        <Service></Service>
        <Technology></Technology>
        <Footer></Footer>

      </div>
    </>
  )
}

export default App
