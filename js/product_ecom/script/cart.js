let cart_ = JSON.parse(localStorage.getItem("cart_data"))
let main = document.getElementById("main")
let Total = document.getElementById("Total")
let total = document.getElementById("total")


function display (arr){
    let count= 0;
    arr.map(function (el){
        let prod_box = document.createElement("div")

        let prod_img = document.createElement("img")
        prod_img.src = el.image

        let prod_title = document.createElement("p")
        prod_title.innerText = el.title;

        let item_count = document.createElement("h4")
        item_count.innerText = 1;


        let prod_price = document.createElement("h4")
        prod_price.innerText = `$ ${Math.floor(el.price)}`
        count =count + Math.floor(el.price)* item_count;
        total.innerText = `Total : $ ${count}`
        el.quantity = item_count;
        // console.log(typeof(el.price));
       

        let plus = document.createElement("button")
        plus.innerText = "➕";
        plus.addEventListener("click",function(){
            item_count++;
        })
        let minus = document.createElement("button")
        minus.innerText = "➖";
        minus.addEventListener("click",function(){
            item_count--;
        })

        let controls = document.createElement("div")
        controls.append(plus,item_count,minus)

        prod_box.append(prod_img,prod_title,prod_price,controls)
         main.append(prod_box)
    })

}
// total.innerText = `Total :${el.price + count  }`




display(cart_);