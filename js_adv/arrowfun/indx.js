
// const ans = (i)=>{
//     if(i==0){
//         console.log("acd");
        
//     }else{
//         console.log("vrgWE");
        
//     }
// } 
// ans(32); //vrgWE
//////////////////////////////////////
let password = document.getElementById("pas")
let username = document.getElementById("usn")
let main = document.getElementById("main")

const abc =(get_pass,get_usn)=>{
    event.preventDefault();
    usn = "asd";
    pass = 123;
    if( usn == get_usn){
        if(pass == get_pass){
            console.log("Login");
            main.removeChild
            main.innerHTML = null;
            let gif = document.createElement("img")
            gif.src = "https://i.pinimg.com/originals/4a/10/e3/4a10e39ee8325a06daf00881ac321b2f.gif"
            main.append(gif)
        }else{
            console.log("Wrong Password");
            main.innerHTML = null;
            let gif = document.createElement("img")
            gif.src = "https://cdn.dribbble.com/userupload/20873319/file/original-985de1f42024ab56ee5a7d95c6f0ca83.gif"
            main.append(gif)
        }
    }else{
        console.log("Wrong Cred");
        main.innerHTML = null;
        let gif = document.createElement("img")
        gif.src = "https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyeGN1bWU3ODJzYW12bjY5NGVqM2VmYmF4YXAxNzQ2bzRyYWkwMnpoeiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vyTnNTrs3wqQ0UIvwE/source.gif"
        main.append(gif)
    }
}
function loginfun(){
    setTimeout(abc(password.value,username.value),2000)
    let gif = document.createElement("img")
    gif.src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
    main.append(gif)
}




































































// const promise = new Promise((res,rej)=>{
//     if(i%2 == 0){
//         console.log(res)

//     }else{
//         console.log(rej);
        
//     }
   
// }) 

//  promise.then((correct)=>{
//         console.log(correct)
//     }).catch((wrong)=>{console.log(wrong);
//     })