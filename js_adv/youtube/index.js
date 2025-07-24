let a = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=rrr&key=AIzaSyCiby7Zkt8gKme9BkQVZgGbP35nG6X7hCw'

const abc = async()=>{
   let x = await fetch(a)
   let data = await x.json()
   console.log(data);
   

}

abc()