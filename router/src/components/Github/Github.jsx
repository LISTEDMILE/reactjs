import React, { useState , useEffect} from "react";
export default function(){
    const [follow,setFollow] = useState([]);
    const [a,setA] = useState("");
    useEffect(()=>{
        fetch(`https://api.github.com/users/${a}`)
        .then(Response=>Response.json())
        .then(data=>setFollow(data))
    },[setA]);

    return(<>
    <div className="flex  justify-center">
        <input className='m-2 mr-16  bg-slate-300 text-white p-2 text-center' placeholder='git username' onChange={(e)=>{setA(e.target.value)}}/>
        <div> Followes: {follow.followers}</div></div></>
    )
}