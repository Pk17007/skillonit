let api = "http://localhost:3000/products";
let y;

const get_data =async()=>{
    let step_1 = await fetch(api)
    let step_2 = await step_1.json()
    // console.log(step_2);
    y = step_2;
    
    solve()
}


get_data()


const solve =()=>{
    console.log(y);
    let container = document.getElementById("container")
    y.map((el)=>{
        
        let img = document.createElement("img")
        img.src = el.img;

        let title = document.createElement("h4")
        title.innerText = `${el.name}   $${el.price}`

        let div = document.createElement("div")

        div.append(img,title);
        container.append(div)
    })
}