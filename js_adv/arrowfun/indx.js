
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
    event.preventDefault()
    usn = "asd";
    pass = 123;
    if( usn == get_usn){
        if(pass == get_pass){
            console.log("Login");
            main.innerHTML = "";
            let gif = document.createElement("iframe")
            gif.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fsuccess-gif-share-and-celebrate-your-achievements--617204323945105542%2F&psig=AOvVaw2KVBw_IMLYKnlryCJ2EWue&ust=1753083903250000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKipycT4yo4DFQAAAAAdAAAAABAE"
            main.append(gif)
        }else{
            console.log("Wrong Password");
            main.innerHTML = "";
            let gif = document.createElement("iframe")
            gif.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnrifuture.com%2Fpayment-failure%2F&psig=AOvVaw06FRjL1j_rt3uztoyEY45n&ust=1753083965676000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMD42N_4yo4DFQAAAAAdAAAAABAK"
            main.append(gif)
        }
    }else{
        console.log("Wrong Cred");
        main.innerHTML = "";
        let gif = document.createElement("iframe")
        gif.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Flordicon.com%2Ficons%2Fwired%2Fflat%2F38-error-cross-simple&psig=AOvVaw0zUkXB49PkbbY3oK5b1lin&ust=1753084000921000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMj2jO_4yo4DFQAAAAAdAAAAABAE"
        main.append(gif)
    }
}
function loginfun(){
    setTimeout(abc(password.value,username.value),200)
    let gif = document.createElement("iframe")
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