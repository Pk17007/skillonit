let form = document.querySelector("form")
let name = document.getElementById("name")
let id = document.getElementById("id")
let tbody = document.querySelector("tbody")

form.addEventListener("submit",submit)

let DocData = [];

function submit(){
    event.preventDefault();
    let obj = {
        name : name.value,
        id: id.value
    }
    DocData.push(obj)
    display(DocData)
}

function display(data){
    tbody.innerHTML = null;
    data.map(function (el,index){    
    let row = document.createElement("tr")
    let col1 = document.createElement("td")
        col1.innerText = el.name;
    let col2 = document.createElement("td")
        col2.innerText = el.id;
    let col3 = document.createElement("td")
         col3.innerText = el.specs;

        col3.innerText = "Delete"
          col3.style.backgroundColor = "red"
          col3.style.color = "white"
          col3.style.fontSize = "24px"
              col3.addEventListener("click", function(){
                     delfun(index);
                      })
    })
}


function delfun(i){
    // console.log(event)
    // event.target.parentNode.remove()
    DocData.splice(i,1)
    display(DocData)
}




