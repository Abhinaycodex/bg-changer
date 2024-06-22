import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("silver")

  return (
   <>

   <div className='w-full h-screen ' style={{background: color}}>
   <h1 className='text-3xl font-bold underline text-black bg-top' >background changer</h1>

    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl' >

        <button 
        onClick={()=> setColor("red")}
        className='px-4 rounded-full outline-none py-1 text-white' 
        style={{background:"red"}}>
          red
        </button>

        <button 
        onClick={()=> setColor("green")}
        className='px-4 rounded-full outline-none py-1 text-white' 
        style={{background:"green"}}>
          green
        </button>

        <button 
        onClick={()=> setColor("yellow")}
        className='px-4 rounded-full outline-none py-1 text-white' 
        style={{background:"yellow"}}>
          yellow
        </button>

        <button 
        onClick={()=> setColor("pink")}
        className='px-4 rounded-full outline-none py-1 text-white' 
        style={{background:"pink"}}>
          pink
        </button>

        <button 
        onClick={()=> setColor("orange")}
        className='px-4 rounded-full outline-none py-1 text-white' 
        style={{background:"orange"}}>
          orange
        </button>

        <button 
        onClick={()=> setColor("blue")}
        className='px-4 rounded-full outline-none py-1 text-white' 
        style={{background:"blue"}}>
          blue
        </button>

        <button
        onClick={()=> setColor("violet")}
         className='px-4 rounded-full outline-none py-1 text-white' 
        style={{background:"violet"}}>
          violet
        </button>

        <button
        onClick={()=> setColor("crimson")}
        className='px-4 rounded-full outline-none py-1 text-white' 
        style={{background:"crimson"}}>
          crimson
        </button>

      </div>
    </div>
   </div>
   
   </>
  )
}

export default App
