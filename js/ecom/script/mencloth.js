let data = localStorage.getItem("data")
let main =document.getElementById("main")
// console.log(data)   // array dega return in cosnole 

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

    // let id = el.id

    box.append(img,title,price,addtocart)
    main.append(box)
    })

}

grid();