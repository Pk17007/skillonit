import { useState,useEffect } from "react"

const Stopwatch = () =>{
    const [ timer , setTimer] = useState(0);
    const [ isRunning ,setRunning] = useState(false)    
    
   useEffect(()=>{
    let interval;
      if(isRunning){
         interval = setInter(()=>{
                setTimer((abc)=> abc+1);
            },500)
      }
      return () => {
      clearInterval(interval);
      };
   },[isRunning])




    return(
        <div className="w-1/4 m-auto ">
            
            
             <h1 className="bg-emerald-300 w-7/10 m-auto mt-6 ml-4 p-2">Timer is :{timer}</h1>
             
             <button className="bg-sky-300 rounded-full ml-2 text-sm px-4 " onClick={()=>setRunning(true)}> Start  </button>
             <button className="bg-sky-300 rounded-full ml-2 text-sm px-4 " onClick={()=>setRunning(false)}> Pause  </button>
             <button className="bg-sky-300 rounded-full ml-2 text-sm px-4 " onClick={()=>{setTimer(0);setRunning(false)}}> Reset  </button>
        
        </div>
    )


    
}
export default Stopwatch