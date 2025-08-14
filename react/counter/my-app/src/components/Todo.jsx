import { useState } from "react"

const Todo=()=>{

    const [ text , setText] = useState("")
    const [ data, setData] = useState([])
    
    const addfunc=()=>{

       let  newObj = {
            task: text,
            status: false,
            id: Math.floor(Math.random(111)*1000)
       } 

       setData([...data,newObj])   
         console.log(data) 
    }

       const compfun=(id)=>{
        // console.log(id);
        
            data.map((el)=>
               el.id === id ? el.status = true : el.status = false
            )
       setData(data)
        
       }

        return(
            <div className="w-9/10 bg-sky-400 m-auto mt-8 rounded-2xl min-h-96 max-h-2/5 p-4 pl-8">
                <h1 className="text-center text-purple-900 font-bold text-3xl">Todo APP</h1>
                <label className="ml-2"  style={{fontSize:"18px"}}>Enter task Name</label>
                <br />
                <input className="scheme-dark rounded-xl p-2 bg-sky-100 mt-2 pl-3 enabled:border-blue-300 enabled:select:border-gray-400 disabled:opacity-75 ... " type="text"  onChange={(e)=>setText(e.target.value)} placeholder="Enter Your Task " />
                {/* <h1>{text}</h1> */}
                <br />
                
                <button className="text-center text-sm bg-emerald-300 rounded-2xl px-6 py-2 mt-6 hover:bg-emerald-400 transition duration-400 " onClick={addfunc}> Add Task</button>

                <div className="w-9/10 bg-purple-300 rounded-2xl m-auto mt-8 p-4" >
                    <ol>
                        {
                            data.map((el)=>{
                                return(
                                   <>
                                    <li className="bg-purple-400 rounded-sm  mt-3 px-4"  style={{fontSize:'20px'}} key={el.id}>{el.task}{"---------->"}{el.status ? "Completed" : "Incomplete"}  </li>
                                    <button className="rounded-3xl mt-1 px-6 py-2 bg-purple-400 hover:bg-emerald-400" onClick={()=>compfun(el.id)}>Completed</button>
                                    <button className="rounded-3xl mt-1 px-6 py-2 bg-purple-400 hover:bg-red-500" onClick={()=>remfun(el.id)}>Remove</button>
                                    
                                   </> 
                                )
                            })
                        }

                    </ol>

                </div>

            </div>

        )
        
}

export default Todo