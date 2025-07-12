let data = JSON.parse(localStorage.getItem("data"))
let main = document.getElementById("main")
// let cart = document.getElementById("cart")
let btn = document.getElementById("btn")
let cart = document.getElementById("cart")
let lt = document.getElementById("logint")
let st = document.getElementById("signupt")


i=0
let cartdata = JSON.parse(localStorage.getItem("cdata")) || []
cart.innerText = `Cart(${cartdata.length})`
                    cart.style.color = "red"
                    gotocart();
let txt = "";

function grid(arr){
    arr.map( function(el){
    let box = document.createElement("div")

    let img = document.createElement("img")
    img.src = el.image

    let title = document.createElement("h3")
    title.innerText = el.title
 
    let price = document.createElement("h4")
    price.innerText = "$ "+ el.price

    let addtocart = document.createElement("button")
    addtocart.innerText = "Add to Cart"

    box.append(img,title,price,addtocart)
    main.append(box)
    
        function match(){
            for(x=0;x<cartdata.length;x++){
                            if(el.id == cartdata[x].id){
                                    addtocart.innerText = "Go to Cart"
                                   addtocart.style.backgroundColor = "yellowgreen"
                                    addtocart.style.color = "white"
                                    // carthtml();
                            }
                        }
        }
        


        addtocart.addEventListener("click", addedcart)

            function addedcart(){
                    if(account_loggedIn = true){
                        
                            match();

                    if(txt != 1){
                                 alert("Added to Cart")
                                cartdata.push(el);
                                localStorage.setItem("cdata",JSON.stringify(cartdata))
                             addtocart.addEventListener("click",function(){
                           
                            txt = 1;

                        })
                    }else{
                        
                    }

                    
        }
                    
                }

        
    })
    

}



grid(data);


function gotocart(){
    cart.addEventListener("click", function(){
        window.location.href ="http://127.0.0.1:5500/js/ecom/html/cart.html"
    })
}

// console.log(grid)
//////////////////////////////////////////////////////////
if (account_loggedIn = true){
        lt.innerHTML = null;
        lt.innerText = localStorage.getItem("name1") 
        st.innerHTML = null;
        let logout = document.createElement("a", addEventListener())
        logout.innerText = "Logout"
        logout.src = "../html/login.html"
        st.append(logout)
    }
 
// if(localStorage.getItem("name1") !== null){
//     let usndisp = document.createElement("h3")
//     usndisp.innerText = `hello!    ${localStorage.getItem("name1")}`
//            let backupText =  btn.innerHTML
//             btn.innerHTML = null;
//                 btn.append(usndisp);
//     let logout = document.createElement("h3")
//     logout.innerText = "Logout"
//     btn.append(logout)
//     logout.addEventListener("click", function(){
//         localStorage.removeItem("name1")
//        btn.innerHTML= backupText; 
//     })
    
// }else{
//     console.log("Not logged in");
    
// }
            // login wale user ka name 
/////////////////////////
// 