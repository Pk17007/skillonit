let form = document.getElementById("login")
let username = document.getElementById("username")
let password = document.getElementById("password")

let btn = document.getElementById("btn")
// let signup_arr = document.getElementById("signup_arr")
let signup_arr = JSON.parse(localStorage.getItem("signupdata"));

form.addEventListener("submit",loginfun)

function loginfun(){
    event.preventDefault();
    // console.log("submit")
    let usn = 0;
    let pas = 0;
    for(i=0;i<signup_arr.length;i++){
        
        if(signup_arr[i].username == username.value){
               usn++;
        }
            if(signup_arr[i].password == password.value){
                pas++
            }
    }
      if(usn== 0 ){
            alert("Wrong Username")
           
        }else{
            if(pas== 0){
                alert("Wrong Password")
            }else{
                alert("login Success")

                let usn = document.createElement("h2");
                usn.innerText = username.value;

                btn.append(usn)

                window.location.href ="http://127.0.0.1:5500/js/ecom/html/index.html"
                // loggedin();
                
            }
        }

    
}
console.log(window);

///