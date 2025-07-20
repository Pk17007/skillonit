let container = document.getElementById("container")

let api = "https://fakestoreapi.com/products";

function get_data(){
    x = fetch(api)
    // console.log(x);  // retursm promise
    
    x.then((res)=>{
        // console.log(res) // gives response
        // console.log(res.json());  // same as clg(X ) but promise result is chaged to array of object
        let y = res.json()
        y.then((data)=>{
            // console.log(data); // gives array of object !!!
            display_data(data)
        })
    })
}

get_data()


const display_data = (data) => {
    data.map(({title,id,image,price,description})=>{
        
        let Title = document.createElement("h1")
        let Id = document.createElement("h3")
        let Price = document.createElement("h2")
        let Img = document.createElement("img")
        let des = document.createElement("p")
        
        Title.innerText = title;
        Id.innerText = id;
        Img.src = image
        Price.innerText = ` $:${price}`;
        des.innerText = ` Details:  ${description}`;
        let box = document.createElement("div")

        box.append(Img,Title,Id,Price,des)
        container.append(box)
    }
)
}


const delay = ()=>{
setTimeout(get_data,2000)
}