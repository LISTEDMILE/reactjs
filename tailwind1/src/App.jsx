import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // to insert tailwind inside any tag we can use className and our tailwind properties
  //tailwind is just like css for styling
  //first in the terminal write (  npm install -D tailwindcss postcss autoprefixer  )
  //  then write (  npx tailwindcss init -p  )

  // now in tailwind.config.js replace constant [] to   
    //  content: [
    //  "./index.html",
    //  "./src/**/*.{js,ts,jsx,tsx}",
    //  ],

    // now in index.css add 
    //  @tailwind base;
    //  @tailwind components;
    //  @tailwind utilities;


    /*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  css:{
    postcss:{
      plugins:[tailwindcss()],
    }
  }
})
*/
//write this in vite.config.js......

    // tailwind is ready to use
  return (
    <>
     <h1 className='bg-green-400  rounded-xl text-black p-4'>TAILWIND</h1>
    </>
  )
}

export default App
