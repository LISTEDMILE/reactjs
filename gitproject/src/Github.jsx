import logo1 from './Logo.png'
import image1 from './Image1/Profile.png'
import './git.css'
import React, { useState , useEffect} from "react";
 function Git(){
    const [follow,setFollow] = useState([]);
    const [a,setA] = useState("");
    const [input1,setInput] = useState(false);
    const [found,setFound] = useState("LIVE NOW");
    const [foundinfo,setFoundInfo] = useState("The page is working properly...")
    useEffect(()=>{
        fetch(`https://api.github.com/users/${a}`)
        .then(Response=>Response.json())
        .then(data=>setFollow(data))
        setFound("LIVE NOW");
        setFoundInfo("The page is working properly...");
       
    },[a]);
   
    if ((follow.message)=="API rate limit exceeded for 103.81.25.20. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)" || follow.message=="Not Found"){
       setFollow({
"id": "---",
"avatar_url": image1.toString(),
"followers": "---",
"following": "---",
"created_at": "---",
"updated_at": "---"
})
if((follow.message)=="API rate limit exceeded for 103.81.25.20. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)"){
    setInput(true);
    setFound("TRIES OVER");
    setFoundInfo("The tries for GitHub Api are over, it will not work for some time. Kindly wait for some time and reload back after some time...");
} 
else{
    setFound("NO PROFILE");
    setFoundInfo("The input you entered does not match any of the repositories in GitHub...")
}
    }

  
   
    return(<>

    <header>
   <div id="logo"> <img
    src={logo1}
    
   /></div>
    <div> GET GITHUB INFO</div>
    <div id="hover"><h1>{found}</h1>
    <div id="foundinfo">{foundinfo} </div>
    </div>
   
    <div id="div2"><a>ABOUT</a><a>Help</a><a>Contact Us</a></div>
    </header>
    
    <div className="flex  justify-center">
       <div> <span className='text-white'>Enter any profile:</span>
        <input className='mx-8 my-4 mr-16  bg-slate-300 text-black p-2 text-center' 
        placeholder='git username'  disabled={input1}
        onChange={(e)=>{setA(e.target.value);}}/>
        
        
        
        </div></div><div id="main1"><div id="main">
        <div id="img">
        <img
                       
                                src={follow.avatar_url}
                                className="h-60"
                                alt="Logo"
                            />


                          
            
            <div id="info">
            <div> User Id :  {follow.id}</div> 
            <div> Followes: {follow.followers}</div>
                
<div>
    Following: {follow.following}
</div>


                </div></div>
              
                <div id="info2">
                <div class="updated">
                    Created On : 
                    <div>
                        {follow.created_at}
                    </div>
                </div>
                <div class="updated">
                
        
            Updated On : 
            <div>{follow.updated_at}
            </div>  </div></div>
            </div>
</div>
</>
    )
}

export default Git