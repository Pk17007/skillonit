let a = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q='
let b = "&key=AIzaSyCiby7Zkt8gKme9BkQVZgGbP35nG6X7hCw"

  let search = document.querySelector("input")
let main = document.getElementById("main")
const abc = async()=>{
   let x = await fetch(`${a}${search.value}${b}&maxResults=30`)
   let data = await x.json()
   let w = data.items
   
   console.log(w);
   display(w)
}




const inputfun= () =>{
   setTimeout(abc,500)
   main.innerHTML = null;
}

const display =(obj)=>[
   
   obj.map(({id:{videoId},snippet:{title}})=>{
     
      let h1 = document.createElement("iframe")
      h1.src=`https://www.youtube.com/embed/${videoId}`
      
      if(h1.src !== ""){
            let h2 = document.createElement("h3")
            let div = document.createElement("div")
              h2.innerText = title;
             div.append(h1,h2)
             main.append(div)
      }
     
   })
]

function darkmode(){
   let window = document.querySelector("body")
   let dm_btn = document.getElementById("dm_btn")
    let text = dm_btn.textContent
   if(text = "Light Mode"){
       dm_btn.textContent = "Dark Mode"
   }else{
      dm_btn.textContent = "Light Mode"
   }
   window.classList.toggle("darkmode");
   
   
}



