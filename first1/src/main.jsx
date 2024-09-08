
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Print from './own.jsx'
import React from 'react'


/* const Element1 = React.createElement(
    'a',
    {
        href:"#"
    } ,
    'click here'
)

*/
// aise bhi koi react element create kar skte h
//par isme sequence bohot matter karega

//type
//attribute or property
//child text



//yha print function import kar liya own.jsx file se....
createRoot(document.getElementById('root')).render(
  <>
    <App />
<Print/>



    </>
    
    //yha print function call kar liya .....

)
