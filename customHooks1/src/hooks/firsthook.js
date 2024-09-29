import {useEffect, useState} from "react"
function useCurrencyInfo(currency){
    // go to app.jsx for notes....
    const [data,setData]=useState({})
    useEffect(()=> {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.min.json`)
        .then((res)=> res.json())
        .then((res)=>setData(res[currency]))
    
    
        },
[currency])
return data
}
export default useCurrencyInfo ;