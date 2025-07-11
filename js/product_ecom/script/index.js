let data = JSON.parse(localStorage.getItem("data"))

let main = document.getElementById("main")
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
        add_to_cart_btn.innerText = "Add To Cart"
        // let add_to_cart_btn = document.createElement("button")
        // isItINCart();

        prod_box.append(prod_img,prod_title,prod_price,add_to_cart_btn)
        main.append(prod_box)

    })
}

let logged_user_name = localStorage.getItem("login_data").logged_user_name;
console.log(logged_user_name);

// if(JSON.parse(localStorage.getItem("login_data")))