import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer'
import MenuImage from './Components/MenuImage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Footer/> */}
        <MenuImage/>
      </div>
    </>
  )
}

export default App
