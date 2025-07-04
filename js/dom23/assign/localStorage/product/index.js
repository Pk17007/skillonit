let data = JSON.parse(localStorage.getItem("data"))

console.log(data)


let container = document.getElementById("container")
let nav = document.getElementById("nav")
    data.map( function (el,index){
        let box = document.createElement("div")
        let title = document.createElement("h3")
        title.innerText = el.title;
        let price = document.createElement("h4")
        price.innerText = "$ " + el.price;
        let info = document.createElement("p")
        info.innerText = el.description;
        let img = document.createElement("img")
        img.src = el.image;
        box.append(img,title,price,info)
        container.appendChild(box)
        
        
        

         
    })
    function catfun(){
        // let category = el.category;
        let cat = document.createElement("div",)
        cat.innerText = "Select Category"
        let opt1 = document.createElement("div")
        opt1.innerText = "Men's Clothing";
        let opt2 = document.createElement("div")
        opt2.innerText = "women's clothing"
        let opt3 = document.createElement("div")
        opt3.innerText = "jewelery";
        let opt4 = document.createElement("div")
        opt4.innerText = "electronics";
        nav.append(cat,opt1,opt2,opt3,opt4);
    }
        
   
    catfun()
// console.log(catfun)
// console.log(data)
