//https://github.com/copilot/share/4a224216-4024-8895-a802-200c6439017b
// fpr explaination..

let task = document.getElementById("task")
let priority = document.getElementById("priority")
let tbody = document.querySelector("tbody")
let form = document.querySelector("form")

form.addEventListener("submit",submit)

let todo_data = []
function submit(){
    event.preventDefault;
   let obj = {
     task:task.value,
     priority:priority.value
   }
   todo_data.push(obj)
   console.log(todo_data);
   dispaly(todo_data)
}
    function dispaly(){
        submit.map(el,index,arr){
          console.log(index);
        }
    }