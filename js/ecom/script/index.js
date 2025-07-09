let data = JSON.parse(localStorage.getItem("data"))

let main = document.getElementById("main")
let cart = document.getElementById("cart")
let btn = document.getElementById("btn")

i=0
let cartdata = localStorage.getItem("cdata") || []

function grid(){
    data.map( function(el){
    let box = document.createElement("div")

    let img = document.createElement("img")
    img.src = el.image

    let title = document.createElement("h3")
    title.innerText = el.title
 
    let price = document.createElement("h4")
    price.innerText = "$ "+ el.price

    let addtocart = document.createElement("button")
    addtocart.innerText = "Add to Cart"

    let id = el.id

    box.append(img,title,price,addtocart)
    main.append(box)
    
        addtocart.addEventListener("click", addedcart)

            function addedcart(){
                    if(account_loggedIn = true){
                        // console.log("added toc cart")
                    alert("Added to Cart")
                    addtocart.innerText = "Go to Cart"
                    addtocart.style.backgroundColor = "yellowgreen"
                    addtocart.style.color = "white"
                    // cartfun();                    
                    i++;
                    cart.innerText = `Cart(${i})`
                    cart.style.color = "red"
                    
                    cartdata.push(id)
                    JSON.stringify(localStorage.setItem("cdata",cartdata))
                    console.log("cdata")
                    }else{
                        window.location.href ="http://127.0.0.1:5500/js/ecom/html/login.html"
                    }

                    
                    
                }



    // addtocart.innerText = "Add to cart"
        // addtocart.addEventListener("click",add_cart(){
        //         addtocart.innerText = "Added to cart"
        // })
    

        
    })
    

}
// addtocart.addEventListener("click",cartfun(){
//                         window.location.href = "http://127.0.0.1:5500/js/ecom/html/cart.html"
//                     })

grid( );
// console.log(grid)
 
if(localStorage.getItem("name1") !== ""){
    let usndisp = document.createElement("h2")
    usndisp.innerText = `HEllO ${localStorage.getItem("name1")}`
           let backupText =  btn.innerHTML
            btn.innerHTML = null;
                btn.append(usndisp);
    let logout = document.createElement("h3")
    logout.innerText = "Logout"
    btn.append(logout)
    logout.addEventListener("click", function(){
        localStorage.removeItem("name1")
       btn.innerHTML= backupText; 
    })
    
}else{
    console.log("Not logged in")
}


// 