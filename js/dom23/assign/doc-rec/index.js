let form = document.querySelector("form")
let name = document.getElementById("name")
let id = document.getElementById("id")
let exp = document.getElementById("exp")
let role;
let tbody = document.querySelector("tbody")

form.addEventListener("submit",submit)

let DocData = [];

function submit(){
    event.preventDefault();
    let obj = {
        name : name.value,
        id: id.value,
        specs:specs.value,
        exp:exp.value,
        // role:role.value
    }
    
    // let z = localStorage.getItem("data") || "";
    DocData.push(obj);
    display()
    console.log(DocData);
    localStorage.setItem("Doc_data",JSON.stringify(DocData))
    
}

display(localStorage.getItem("Doc_data"));
 

function display(){
    let data = localStorage.getItem("Doc_data") || "";
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
}




