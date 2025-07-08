let form = document.querySelector("form")
let username = document.getElementById("username")
let password = document.getElementById("password")
let home = document.getElementById("home")
let btn = document.getElementById("btn")
let navbar = document.getElementById("navbar")
// let signup_arr = document.getElementById("signup_arr")
let signup_arr = JSON.parse(localStorage.getItem("signupdata"));

    form.addEventListener("submit",loginfun);
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
                alert("login Success")
                account_loggedIn = true;
                let usn = document.createElement("h2");
                usn.innerText = username.value;

                navbar.append(usn)
                console.log(window);

                window.location.href ="http://127.0.0.1:5500/js/ecom/html/index.html"
                let usndisp = document.createElement("h2")
                usndisp.innerText = name
                btn.append(usndisp)
                // loggedin();
                
            }
        }

    
}


home.addEventListener("click",function(){
    window.location.href = "http://127.0.0.1:5500/js/ecom/html/index.html"
})




///