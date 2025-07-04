let data = JSON.parse(localStorage.getItem("data"))

console.log(data)

let container = document.getElementById("container")

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

console.log(data)
