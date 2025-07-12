let cart_ = JSON.parse(localStorage.getItem("cart_data"))
let main = document.getElementById("main")
let Total = document.getElementById("Total")
count= 0;

function display (arr){
    arr.map(function (el){
        let prod_box = document.createElement("div")

        let prod_img = document.createElement("img")
        prod_img.src = el.image

        let prod_title = document.createElement("p")
        prod_title.innerText = el.title

         let prod_price = document.createElement("h4")
        prod_price.innerText = `$ ${el.price}`

        console.log(typeof(el.price));
        
        
        
        count = el.price + count;

        prod_box.append(prod_img,prod_title,prod_price)
        main.append(prod_box)
    })

}
// total.innerText = `Total :${el.price + count  }`



let total = document.createElement("h3")
total.innerText = count;
Total.append(total)
display(cart_);