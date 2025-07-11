let c_data = JSON.parse(localStorage.getItem("cdata")) || []
let main1 = document.getElementById("main")

function grid(arr){
    arr.map( function(el){
        
        let box = document.createElement("div")

           let  quantity = 1 || el.quantity;
        el.quantity = quantity ;

        let img = document.createElement("img")
        img.src = el.image

        let price = document.createElement("h3")
        price.innerText = `$  ${el.price * quantity}`

        let Q = document.createElement("div")

        let quan = document.createElement("p")
        quan.innerText = quantity;

        let plus = document.createElement("button")
        plus.innerText = "+";
        // plus1();
        
        let minus = document.createElement("button")
        minus.innerText = "-";
        // minus1();

        let title = document.createElement("h3")
        title.innerText = el.title
        Q.append(plus,quan,minus)

        box.append(img,title,price,Q)
        
        main1.append(box)
    })



}

grid(c_data);


// function plus1(){
//     addEventListener("click", function(){
//         quantity++;
        
//     })
// }
// function minus1(){
//     addEventListener("click", function(){
//         quantity--;
        
//     })
// }