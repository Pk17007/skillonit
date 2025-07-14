let cart_1 = JSON.parse(localStorage.getItem("cart_data"))
let main = document.getElementById("main")
let cart = document.getElementById("cart")
let Total = document.getElementById("Total")
let total = document.getElementById("total")
let pay = document.getElementById("pay")


cart_1.forEach(function(el) {
    if (!el.current_item_count){
        el.current_item_count = 1;
    }
});
// count_total = 0;

function display (arr1){
    let count= 0;
    arr1.map(function (el){
        let prod_box = document.createElement("div")

        let prod_img = document.createElement("img")
        prod_img.src = el.image

        let prod_title = document.createElement("p")
        prod_title.innerText = el.title;
        
        let quantity = el.current_item_count || 1; 

        let item_count = document.createElement("span")
        item_count.innerText = quantity
        item_count.innerText = 1;

        

        let prod_price = document.createElement("h4")
        prod_price.innerText = `$ ${Math.floor(el.price)}`
        count = count + Math.floor(el.price * quantity);
        total.innerText = `Total : $ ${count}`
        // console.log(count,"here");
        el.quantity = item_count;
        // console.log(typeof(el.price));
       

        let plus = document.createElement("button")
        plus.innerText = "➕";
        plus.addEventListener("click",function(){
            quantity++;
            el.current_item_count = quantity;
            prod_price.innerText = `Price : $${Math.floor(el.price* quantity)}`
            item_count.innerText = quantity;
            update();
            plus.innerText = "➕";
            
        })
        let minus = document.createElement("button")
        minus.innerText = "➖";
        minus.addEventListener("click",function(){
            if(quantity>1){
                quantity--;
                el.current_item_count = quantity;
            // prod_price.innerText = `Price : $${Math.floor(el.price* item_count)}`  //wrong
             prod_price.innerText = `Price : $${Math.floor(el.price* quantity)}`
            item_count.innerText = quantity;
                update();
                minus.innerText = "➖";
            }
        })


        // add quantity key in obj cart_data
            //cart_1.quantity = quantity;
        



        // count_total = count_total + (el.price)*quantity
        // total.innerText = `Total Price: $ ${count}`;

        let controls = document.createElement("div")
        controls.append(plus,item_count,minus)

        prod_box.append(prod_img,prod_title,prod_price,controls)
         main.append(prod_box)
    })

}

function update(){
    let Total1 = 0;
    let span1 = 0;
    cart_1.forEach(function(el){
        
        span1 = Math.floor((el.price)*(el.current_item_count))
         Total1 = Total1 + span1
    });
     total.innerText = `Total: $ ${Total1}`;

     final_total = Total1;
     localStorage.setItem("final_total",final_total)

}
// total.innerText = `Total :${el.price + count  }`
update();

cart.innerText =   `Cart(${cart_1.length})`

display(cart_1);





//////
pay.addEventListener("click",function(){
    window.location.href = "http://127.0.0.1:5500/js/product_ecom/html/pay.html"
})