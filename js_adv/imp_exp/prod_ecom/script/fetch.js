// let api_part_1 = "https://fakestoreapi.com/products/"
let api = "https://fakestoreapi.com/products/category/"
import display_fun from "./display.js";

function get_data(param){

   let x = fetch(`${api}${param}`)
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


export default get_data;