let api = "https://fakestoreapi.com/auth/login"

function loginfun(){
  
    let x = fetch(api)
    x.then((resolve)=>{
        // console.log(resolve)
        y = resolve.json();
        y.then((res)=>{
            z = res.json()
            console.log(z);
            
        })
        
    })


}

loginfun();