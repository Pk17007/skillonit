import product from "./data";

let main = document.getElementById("main")



 let abc = product();
//   console.log(abc);

function data(){
    abc.forEach( function(el){
        let text = document.createElement('h4')
        text.innerText = el.title;
        console.log(`${el.id}`)

        main.append(text)
    })
}

data()