
const Grid=()=>{
    return(
            <div className="w-9/10 min-h-96 max-h-256 bg-sky-200 m-auto mt-8 grid grid-cols-4 rounded-sm gap-4">
                <div className="bg-purple-400 text-center content-center text-xl rounded-xl  " >Div-1</div>
                <div className="bg-emerald-400 text-center content-center text-xl rounded-2xl ">Div-2</div>
                <div className="bg-fuchsia-400 text-center content-center text-xl rounded-3xl">Div-3</div>
                <div className="bg-amber-300 text-center content-center text-xl rounded-4xl">Div-4</div>
                <div className="bg-linear-to-bl from-violet-500 to-fuchsia-500 text-center content-center text-xl ">Div-5</div>
                <div className="bg-slate-300 text-center content-center text-xl">Div-6</div>
                <div className="bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 text-center content-center text-xl scheme-dark">Div-7
                    <span class="relative flex size-3">
                                 <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                                                    <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                            </span>
                </div>
                <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-20% from-50% via-lime-400 to-emerald-500 to-100% text-center content-center text-xl">Div-8</div>
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center content-center text-xl">Div-9</div>
                <div className="w-30 h-30 bg-conic-180 from-red-500 to-blue-800 rounded-full"></div>
                <div class="size-18 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%  animate-spin"></div>
            </div>

    )
}

export default Grid