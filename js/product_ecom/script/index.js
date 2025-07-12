let data = JSON.parse(localStorage.getItem("data"))

let main = document.getElementById("main")
let logout = document.getElementById("signup")
let lil = document.getElementById("lil")
let cart_data = JSON.parse(localStorage.getItem("cart_data")) || []

let cartdisp = document.getElementById("cartdisp")

// console.log(data);
//  checking data 
display(data);
function display (arr){
    arr.map(function (el){
        let prod_box = document.createElement("div")

        let prod_img = document.createElement("img")
        prod_img.src = el.image

        let prod_title = document.createElement("h3")
        prod_title.innerText = el.title

        let prod_price = document.createElement("h4")
        prod_price.innerText = `$ ${el.price} \n\n ⭐${el.rating.rate} (${el.rating.count})`

        let add_to_cart_btn = document.createElement("button")
        add_to_cart_btn.innerText = "Add To Cart";

        add_to_cart_btn.addEventListener("click",function(){
            if(JSON.parse(localStorage.getItem("login_data") == null)){
        
        // alert("Not Logged In");
                window.location.href = "http://127.0.0.1:5500/js/product_ecom/html/login.html"
        
            }else{
                for(l=0;l<cart_data.length;l++){
                    if(el.id == cart_data[l].id){
                        add_to_cart_btn.innerText = "Go to Cart"
                        add_to_cart_btn.addEventListener("click",function(){
                            window.location.href = "http://127.0.0.1:5500/js/product_ecom/html/cart.html"})
                
                        
                   }else
                   {
                    cart_data.push(el);
                    localStorage.setItem("cart_data",JSON.stringify(cart_data))
                   }

                }
            }
        })

        
        // let add_to_cart_btn = document.createElement("button")
        // isItINCart();

        prod_box.append(prod_img,prod_title,prod_price,add_to_cart_btn)
        main.append(prod_box)


        //  if(add_to_cart_btn.innerText = "Go to Cart"){
           
        //                 })
// }

    })


   
}

                lil.innerHTML = null;
                let obj = localStorage.getItem("login_data");
                let name = document.createElement("h3")
                name.innerText =    ` hi! ${obj}`;
                name.style.color = "orange"
                lil.append(name)
                
                logout.innerText = "Logout";
                logout.addEventListener("click",function(){
                    localStorage.removeItem("login_data")
                })
                // console.log(obj)
                
// if(JSON.parse(localStorage.getItem("login_data")))

cartdisp.addEventListener("click",function(){
    window.location.href = "../html/cart.html"
})
