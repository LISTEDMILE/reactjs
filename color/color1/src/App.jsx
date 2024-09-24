import { useState } from 'react'

function App() {
  const [Colour, setColor] = useState("black")
/*w-full   --> used for full view port width
    h-screen   --> used for full view port height
    fixed  -->css
    flex,flex-wrap, justify-center  -->css
    bottom-2  --> bottom se 2px upper
    inset-x-0  --> left aur right se  x matlab left se    2px
    */

    // hmne Colour ko variable bnaya aur uski values use kar rhe h

  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor: Colour}}>
        
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-2 gap-8 bg-green-400">   
          <div className=" flex-wrap justify-center px-8 py-2.5 bg-white rounded-3xl outline-none shadow-lg  outline-emerald-950">
           <button className=" rounded-full px-8 text-white py-2 shadow-black " style={{backgroundColor:"red"}}
           onClick={() => setColor("red")}>
              red
            </button>
            </div>  

            <div className=" flex-wrap justify-center px-8 py-2.5 bg-white rounded-3xl outline-none shadow-lg  outline-emerald-950">
           <button className=" rounded-full px-8 text-white py-2 shadow-black " style={{backgroundColor:"black"}}
           onClick={() => setColor("black")}>
             black
            </button>
            </div>   


            <div className=" flex-wrap justify-center px-8 py-2.5 bg-white rounded-3xl gap-3 outline-none shadow-lg  outline-emerald-950">
           <button className=" rounded-full px-8 text-white py-2 shadow-black " style={{backgroundColor:"green"}}
           onClick={() => setColor("green")}>
              green
            </button>
            </div>  


            <div className=" flex-wrap justify-center px-8 py-2.5 bg-white rounded-3xl gap-3 outline-none shadow-lg  outline-emerald-950">
           <button className=" rounded-full px-8 text-black py-2 shadow-black " style={{backgroundColor:"cyan"}}
           onClick={() => setColor("cyan")}>
              cyan
            </button>
            </div>    
       </div>
      </div>
    </>
  )
}

export default App
