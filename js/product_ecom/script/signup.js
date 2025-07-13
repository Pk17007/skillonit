let form =  document.querySelector("form")
let signup_data = JSON.parse( localStorage.getItem("signup_data")) || []
let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")



form.addEventListener("submit",function(){

    let obj = {
        email : email.value,
        username : username.value,
        password : password.value,
    }
    // let signup_data =  localStorage.getItem("signup_data") || []
    signup_data.push(obj)
    localStorage.setItem("signup_data",JSON.stringify(signup_data))
    // stored signup data..
    alert("signup success")
    
    window.baseU.href = "http://127.0.0.1:5500/js/product_ecom/html/login.html"
    
})

// form.submit.target = "http://127.0.0.1:5500/js/product_ecom/html/login.html";
