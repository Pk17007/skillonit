let cart_1 = JSON.parse(localStorage.getItem("cart_data"))
let main = document.getElementById("main")
let Total = document.getElementById("Total")
let total = document.getElementById("total")


cart_1.forEach(function(el) {
    if (!el.current_item_count){
        el.current_item_count = 1;
    }
});


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
        count =count + Math.floor(el.price)* item_count;
        total.innerText = `Total : $ ${count}`
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
            prod_price.innerText = `Price : $${Math.floor(el.price* quantity)}`
            item_count.innerText = quantity;
                update();
                minus.innerText = "➖";
            }
        })

        let controls = document.createElement("div")
        controls.append(plus,item_count,minus)

        prod_box.append(prod_img,prod_title,prod_price,controls)
         main.append(prod_box)
    })

}

function update(){
    let Total1 = 0;
   cart_1.forEach(function(el){
        Total1+=Math.floor(el.price)*(el.current_item_count)
    });
     total.innerText = `Total Price: $ ${Total1}`;
    localStorage.setItem("cart_data", JSON.stringify(cart_1)); 
}
// total.innerText = `Total :${el.price + count  }`




display(cart_1);