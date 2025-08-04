let api = "https://fakestoreapi.com/products"
// const api2 = "https://jsonplaceholder.typicode.com/photos";


async function fetch(){
    try {
        let res = await fetch(api) 
    let x = await res.json()
       console.log(x);

    data_map(x)
        
    } catch (error) {
        console.log("err")
      
    }
}

fetch()


// const data_map=(data)=>{
//     data.map((el)=>{
//         let p = document.createElement("p")
//         p.innerText = el.title
//     })
// }