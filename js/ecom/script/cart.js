let cartdata = JSON.parse(localStorage.getItem("cdata")) || []
let main = document.getElementById("main")

function grid(arr){
    arr.map( function(el){
        
        let box = document.createElement("div")
        let des = document.createElement("div")
        let p = document.createElement("p")
        

        let img = document.createElement("img")
        img.src = el.image

        let title = document.createElement("h3")
        title.innerText = el.title

        p.innerText = el.description;
        des.append(p)
        box.append(img,title,des)
        main.append(box)
    })



}

grid(cartdata);