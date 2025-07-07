let form = document.querySelector("form")
let name = document.getElementById("name")
let id = document.getElementById("id")
let exp = document.getElementById("exp")
let role;
let tbody = document.querySelector("tbody")

form.addEventListener("submit",submit)

let DocData = [] || JSON.parse(localStorage.getItem("data"));

function submit(){
    event.preventDefault();
    let obj = {
        name : name.value,
        id: id.value,
        specs:specs.value,
        exp:exp.value,
        // role:role.value
    }
    DocData.push(obj)
    localStorage.setItem("data",JSON.stringify(DocData))
    display(DocData)
    console.log(DocData);
    
}

function display(data){
    tbody.innerHTML = null;
    // localStorage.getItem("data",JSON.parse(DocData))
    data.map(function (el,index){    
    let row = document.createElement("tr")
    let col1 = document.createElement("td")
        col1.innerText = el.name;
    let col2 = document.createElement("td")
        col2.innerText = el.id;
    let col3 = document.createElement("td")
         col3.innerText = el.specs;
    let col4 = document.createElement("td")
         col4.innerText = el.exp
    let col5 = document.createElement("td")
    
            if(el.exp<=1 && el.exp>=0 ){
                x ="Trainee"
            }else if(el.exp<5 && el.exp>1){
                x ="Junior"
            }else 
            if(el.exp>=5 && el.exp<=40){
                x ="Senior"
            }else{
                x = "Error"
            }; 
            col5.innerText = x;

    let col7 = document.createElement("td")        
        col7.innerText = "Delete"
          col7.style.backgroundColor = "red"
          col7.style.color = "white"
          col7.style.fontSize = "14px"
          col7.addEventListener("mouseover", function(){
            col7.style.backgroundColor = "white"
            col7.style.color = "red"
          })
          col7.addEventListener("mouseleave", function(){
            col7.style.backgroundColor = "red"
            col7.style.color = "white"
          })
        //   col7.addEventListener("")
          
          
        
        row.append(col1,col2,col3,col4,col5,col7);
        tbody.append(row)
///        
    
              col7.addEventListener("click", function(){
                     delfun(index);
                      })
    })
}


function delfun(i){
    // console.log(event)
    // event.target.parentNode.remove()
    DocData.splice(i,1)
    display(DocData)
    // localStorage.removeItem("data")
    // localStorage.removeItem("data").splice(i,1);
    JSON.parse(localStorage.setItem("data"))
}




