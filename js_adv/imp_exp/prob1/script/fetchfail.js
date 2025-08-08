let api = "https://fakestoreapi.com/products"
 let api2 = "https://jsonplaceholder.typicode.com/users";


const fetch = async()=>{
    let get = await fetch (api2)
    let data = await get.json()
    console.log(data);
    
}
fetch()


// const data_map=(data)=>{
//     data.map((el)=>{
//         let p = document.createElement("p")
//         p.innerText = el.title
//     })
// }



// let a = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q='
// let b = "&key=AIzaSyCiby7Zkt8gKme9BkQVZgGbP35nG6X7hCw"

// const abc = async()=>{
//    let x = await fetch(`${a}rrr${b}&maxResults=30`)
//    let data = await x.json()
//    let w = data.items
   
//    console.log(w);
  
// }

// abc()