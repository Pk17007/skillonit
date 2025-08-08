// import nav from "../css/nav.js";
import get_data from "./fetch.js";
let head = document.getElementById("header")





const nav=()=>{
        return`
            
                <h1>E-commerce Store</h1>
        <nav>
            <ul>
                <li><a href="http://127.0.0.1:5500/imp_exp/prod_ecom/index.html">Home</a></li>
                <li><a href="http://127.0.0.1:5500/imp_exp/prod_ecom/html/elec.html">Electronics</a></li>
                <li><a href="http://127.0.0.1:5500/imp_exp/prod_ecom/html/mc.html">Men's Clothing</a></li>
                <li><a href="http://127.0.0.1:5500/imp_exp/prod_ecom/html/wc.html">Women's Clothing</a></li>
            </ul>
        </nav>
         `
        
}


function disp(){
    head.innerHTML = nav()
}


disp()


function display_data(){
    get_data("jewelery")
}

display_data()