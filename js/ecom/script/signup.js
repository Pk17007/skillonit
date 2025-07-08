let form = document.getElementById("login")
let email = document.getElementById("email")
let username = document.getElementById("username")
let password = document.getElementById("password")
let home = document.getElementById("home")
form.addEventListener("submit", signupfun)

let signup_arr = JSON.parse(localStorage.getItem("signupdata"))|| []; 
function signupfun(){
    event.preventDefault();
    // console.log("signup")
    let obj = {
        email:email.value,
        username:username.value,
        password:password.value
    }
    signup_arr.push(obj);
    
    localStorage.setItem("signupdata",JSON.stringify(signup_arr))
    // console.log(signup_arr);
    alert("Sign Up successfully")

    window.location.href ="http://127.0.0.1:5500/js/ecom/html/login.html"
}



home.addEventListener("click",function(){
    window.location.href = "http://127.0.0.1:5500/js/ecom/html/index.html"
    
})


// home.addEventListener("mouseover",function(){
//     home.style.backgroundColor = "grey"
//     home.style.color = "white"
// })
// home.addEventListener("mouseout",function(){
//     home.style.backgroundColor = "white"
//     home.style.color = "black"
// })