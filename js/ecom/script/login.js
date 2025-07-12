let form1 = document.querySelector("form")
let username = document.getElementById("username")
let password = document.getElementById("password")
let home = document.getElementById("home")
let btn1 = document.getElementById("btn")
let navbar = document.getElementById("navbar")
// let signup_arr = document.getElementById("signup_arr")
let signup_arr = JSON.parse(localStorage.getItem("signupdata"));

let account_loggedIn = false;
function loginfun(){
    event.preventDefault();
    // console.log("submit")
    let usn = 0;
    let pas = 0;
    let name = "";
    for(i=0;i<signup_arr.length;i++){
        
        if(signup_arr[i].username == username.value){
               usn++;
               name = signup_arr[i].username;
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
                // alert("login Success")

                account_loggedIn = true;
                let usn = document.createElement("h2");
                usn.innerText = username.value;
                // set this usnername in local storage
                localStorage.setItem("name1",usn.innerText)
                // console.log(name)
                
                // console.log(window);

                window.location.href ="http://127.0.0.1:5500/js/ecom/html/index.html"
                
                
                // loggedin();
                
            }
        }

    
}


    form1.addEventListener("submit",loginfun);


home.addEventListener("click",function(){
    window.location.href = "http://127.0.0.1:5500/js/ecom/html/index.html"
})






///