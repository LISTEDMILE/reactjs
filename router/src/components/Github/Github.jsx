
import './git.css'

import { useLoaderData } from 'react-router-dom'
export default function(){
   
   
const follow = useLoaderData();
    return(<>
    
    <div className="flex  justify-center">
       </div><div id="main1"><div id="main">
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