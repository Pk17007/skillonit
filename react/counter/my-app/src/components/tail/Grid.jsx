
const Grid=()=>{
    return(
            <div className="w-9/10 min-h-96 max-h-256 bg-sky-200 m-auto mt-8 grid grid-cols-4 rounded-sm gap-4">
                <div className="bg-purple-400 text-center content-center text-xl rounded-xl  " >Div-1</div>
                <div className="bg-emerald-400 text-center content-center text-xl rounded-2xl ">Div-2</div>
                <div className="bg-fuchsia-400 text-center content-center text-xl rounded-3xl">Div-3</div>
                <div className="bg-amber-300 text-center content-center text-xl rounded-4xl">Div-4</div>
                <div className="bg-amber-300 text-center content-center text-xl ">Div-5</div>
                <div className="bg-slate-300 text-center content-center text-xl">Div-6</div>
                <div className="bg-green-300 text-center content-center text-xl scheme-dark">Div-7
                    <span class="relative flex size-3">
                                 <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                                                    <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                            </span>
                </div>
                <div className="bg-teal-300 text-center content-center text-xl">Div-8</div>
                <div className="bg-indigo-500 text-center content-center text-xl">Div-9</div>
            </div>

    )
}

export default Grid