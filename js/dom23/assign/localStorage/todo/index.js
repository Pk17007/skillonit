//https://github.com/copilot/share/4a224216-4024-8895-a802-200c6439017b
// fpr explaination..

let task = document.getElementById("task")
let priority = document.getElementById("priority")
let tbody = document.querySelector("tbody")
let form = document.querySelector("form")

form.addEventListener("submit",submit)

let todo_data = [] && JSON.parse(localStorage.getItem("data"))

function submit(){
    event.preventDefault();
   let obj = {
     task:task.value,
     priority:priority.value
   }
   todo_data.push(obj)
   console.log(todo_data);
   dispaly(todo_data)
   localStorage.setItem("todo", JSON.stringify(todo_data))
}
    function dispaly(data){
      tbody.innerHTML = "";
        data.map( function(el,index){
          let row = document.createElement("tr")

          let col1 = document.createElement("td")
          col1.innerText = el.task;
          let col2 = document.createElement("td")
          col2.innerText = el.priority;
          let col3 = document.createElement("td")
          row.append(col1,col2,col3)
          tbody.appendChild(row)
            if(col2.innerText == "Low"){
              col2.style.backgroundColor = "green"
            }else if (col2.innerText == "High"){
              col2.style.backgroundColor = "red"
            }else{
              col2.style.backgroundColor = "white"
            }
          col3.innerText = "Delete"
          col3.style.backgroundColor = "red"
          col3.style.color = "white"
          col3.style.fontSize = "14px"
              col3.addEventListener("click", function(){
                     delfun(index);
                      })

        })
    }
function delfun(i){
    // console.log(event)
    // event.target.parentNode.remove()
    todo_data.splice(i,1)
    dispaly(todo_data)
}