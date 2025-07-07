let form = document.getElementById("login")
let username = document.getElementById("username")
let password = document.getElementById("password")
// let signup_arr = document.getElementById("signup_arr")
let signup_arr = JSON.parse(localStorage.getItem("signupdata"));

form.addEventListener("submit",loginfun)

function loginfun(){
    event.preventDefault();
    // console.log("submit")
    for(i=0;i<signup_arr.length;i++){
        let usn = 0;
        let pas = 0;
        if(signup_arr[i].username !== username.value){
               usn++;
        }
            if(signup_arr[i].password !== password.value){
                pas++
            }

        if(usn == 0 ){
            alert("Wrong Username")
            console.log("wu")
            break;
        }else if (pas == 0){
            alert("Wrong Password")
            console.log("wp");
            break;
        }else{
            console.log("login successful");
            break;
            
        }
    }

    
}