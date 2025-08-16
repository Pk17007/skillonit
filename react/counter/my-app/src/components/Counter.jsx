import { useState } from "react";

const Counter=()=>{
    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)

    return(
        <div className="w-9/10 m-auto grid-cols-3">
             <div className=" bg-sky-200 m-auto px-4 py-8" >
                    <h1 className="text-2xl text-purple-800 mb-9">Count is {count}</h1>

                 <button className="bg-purple-400 mr-2 rounded-xl text-white px-4 pb-1 hover:bg-violet-500 scale-110 "  onClick={()=>{setCount(count+1)}}>Increase</button>
                 <button className="bg-purple-400 mr-2 rounded-xl text-white px-4 pb-1 hover:bg-violet-500 " onClick={()=>{setCount(count-1)}}>Decrease</button>
                  <button className="bg-purple-400 mr-2 rounded-xl text-white px-4 pb-1 hover:bg-violet-500 " onClick={()=>{setCount(0)}}>Reset</button>
             </div>
<br />
        
                
               
            <div className="bg-gradient-to-r from-sky-200 from-10% via-sky-400 via-30% to-sky-700 to-90% m-auto px-4 py-8..." >
                    <h1 className="text-4xl text-purple-900  mb-3">Count is {count2}</h1>

                 <button className="text-2xl  hover:contrast-150 scale:110"  onClick={()=>{setCount2(count2+1)}}>⬆️</button>
                 <button className="text-2xl hover:contrast-150 scale:110" onClick={()=>{setCount2(count2-1)}}>⬇️</button>
                  <button className="text-2xl text-blue hover:contrast-150 " onClick={()=>{setCount2(0)}}>❌</button>

             </div>

        </div>
    )
}

export default Counter