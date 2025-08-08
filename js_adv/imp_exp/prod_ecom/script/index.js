let api = "https://fakestoreapi.com/products"

import display_fun from "./display.js";

function get_data(){

   let x = fetch(`${api}`)
    // console.log(x);  // retursm promise
    
    x.then((res)=>{
        // console.log(res) // gives response
        // console.log(res.json());  // same as clg(X ) but promise result is chaged to array of object
        
        let y = res.json();
        y.then((data)=>{
            console.log(data); // gives array of object !!!
        // //     // display_data(data)
        display_fun(data)
        })
    })
}

get_data()