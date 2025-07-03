let form = document.querySelector("form")
let name = document.getElementById("name")
let id = document.getElementById("id")
let exp = document.getElementById("exp")
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
    let col4 = document.createElement("td")        
        col4.innerText = "Delete"
          col4.style.backgroundColor = "red"
          col4.style.color = "white"
          col4.style.fontSize = "24px"
        
        row.append(col1,col2,col3,col4);
        tbody.append(row)

        console.log(DocData);
        

              col4.addEventListener("click", function(){
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




