let container = document.getElementById("container")

let api = "https://jsonplaceholder.typicode.com/todos";

let img_arr = [ "https://cdn.pixabay.com/photo/2016/12/14/12/09/violin-1906127_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/03/07/13/11/flower-9453062_1280.jpg",
    'https://cdn.pixabay.com/photo/2025/06/05/17/48/mountains-9643430_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/19/10/12/skyline-7862200_1280.jpg',
    "https://cdn.pixabay.com/photo/2024/08/31/06/24/river-9010602_1280.jpg"
] 

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
    let i = 0;
    data.map(({title,id})=>{
        
        let Title = document.createElement("h1")
        let Id = document.createElement("h3")
        let Img = document.createElement("img")
        
        Title.innerText = title;
        Id.innerText = id;
        Img.src = img_arr[i]
        i++;
        if(i>img_arr.length-1){
            i=0;
        }
        let box = document.createElement("div")

        box.append(Img,Title,Id)
        container.append(box)
    }
)
}


const delay = ()=>{
setTimeout(get_data,2000)
}