import { useState } from 'react'

function App() {
  const [Colour, setColor] = useState("red")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: Colour}}>
        
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">          dsf
        dsfs</div>
      </div>
    </>
  )
}

export default App
