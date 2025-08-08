

const display_fun=(arr)=>{
    arr.map(function(el){
        let main = document.getElementById("main")

        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = el.image;
        let title = document.createElement("h3")
        title.innerText = el.title;

        let price = document.createElement("h5")
        price.innerText = `$${el.price}  `

        div.append(img,title,price)
        main.append(div)
    })
}

export default display_fun