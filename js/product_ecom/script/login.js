let form =  document.querySelector("form")
let signup_data = JSON.parse( localStorage.getItem("signup_data")) || []
let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")


if(signup_data == []){
    alert("Please Signup")
}else{
    form.addEventListener("submit",function(){
        let  usn = false;
        let  pass = false;

    for(i=0;i<signup_data.length;i++){
        if(signup_data[i].username == username.value){
            usn = true;
                 if(signup_data[i].password == password.value){
                    // alert("Login Success");
                    pass = true;  
                    break;
                }
        }
    }
    if( usn == true ){
        if(pass == true){
            alert("Login Success")
            let logged_user = username.value;
           
            
        localStorage.setItem("login_data",JSON.stringify( logged_user))
//  not working
             window.location.href ="http://127.0.0.1:5500/product_ecom/html/index.html";
        
        }else{
            alert("Wrong Password")
        }
    }else{
        alert("Wrong Username")
    }
    })
}


