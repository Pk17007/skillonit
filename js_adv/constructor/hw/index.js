let product_data = JSON.parse(localStorage.getItem("Products"))  || []
let main = document.getElementById("main")
function disp(arr){
    arr.map(function(el){

        let container = document.createElement("div")

        let img = document.createElement("img")
        if(el.image !== ""){
            img.src = el.image
        }else{
            img.alt = "None"
        }
        let product_name = document.createElement("h2")
        if(product_name !== ""){
            product_name.innerText = `Product Name : ${el.name}`
        }
        
        let product_cat = document.createElement("p")
         if(product_cat !== ""){
            product_cat.innerText = `Category : ${el.category}`
        }
        
        let product_price = document.createElement("p")
        if(product_price !== ""){
            product_price.innerText = `Price : ${el.price}`
        }
        
        let product_gen = document.createElement("p")
        if(product_gen !== ""){
            product_gen.innerText = `Gender : ${el.gender}`
        }
        
        let product_sold = document.createElement("h3")
        if(product_sold !== ""){
            product_sold.innerText = `Sold : ${el.sold}`
        }
        


        container.append(img,product_name,product_gen,product_cat,product_price,product_sold)
        main.append(container)
    })
}


disp(product_data);
// console.log(JSON.parse(localStorage.getItem("Products")) )