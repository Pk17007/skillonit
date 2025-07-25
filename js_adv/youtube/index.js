let a = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q='
let b = "&key=AIzaSyCiby7Zkt8gKme9BkQVZgGbP35nG6X7hCw"
  let search = document.querySelector("input")
let main = document.getElementById("main")
const abc = async()=>{
   let x = await fetch(`${a}${search.value}${b}`)
   let data = await x.json()
   let w = data.items
   console.log(w);
   display(w)
}




const inputfun= () =>{
   setTimeout(abc,500)

}

const display =(obj)=>[
   obj.forEach((etag,id:{videoid},kind,snippet:{title})=>{
      let h1 = document.createElement("h1")
      h1.innerText = title;
      let h2 = document.createElement("h1")
      h2.innerText = videoid;
      main.append(h1.h2)
   })
]