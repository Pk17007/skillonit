let a = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q='
let b = "&key=AIzaSyCiby7Zkt8gKme9BkQVZgGbP35nG6X7hCw"
  let search = document.querySelector("input")
const abc = async()=>{
   let x = await fetch(`${a}${search.value}${b}`)
   let data = await x.json()
   let w = data.items
   
   console.log(w);
   // display(data)
}




const inputfun = () =>{
   setTimeout(abc,500)

}

// const display = ()=>[
//    obj.map((el){

//    })
// ]