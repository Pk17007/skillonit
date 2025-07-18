// let obj = {}
// obj.name = "name2"
// obj.num = 12

// console.log(obj)



// function Object(){
//     this.name = "name4"
//     this.num = 76
// }
// console.log(Object) // ƒ Object(){
                        //  this.name = "name4"
                        //   this.num = 76
                        //     }
//////////////////////////////////
//     function nikefun(a,b){
//         let nike_obj = {}
//         nike_obj.name = a
//         nike_obj.price = b
//         return(nike_obj); // without this not work!!
//     }
// x = nikefun("Air Forces","500")
// console.log(x);
//////////////////////////////////

// function Nike(){
    
//     this.name = "Air Max 1"
//     this.price = "10,999"
   
// }

// let r = Nike;
// console.log(r);    //return function defination

// console.log(Nike); // return function defination

// let o = Nike()
// console.log(o)   // undefined

// ////////////////////////////////////////////////
// function Nike(){
    
//     this.name = "Air Max 1"
//     this.price = "10,999"
//    return this
// }

// let r  = Nike()
// console.log(r);     // window console hoga!!!

/////////////////////////////////////////////////////

function Nike(){
    let obj = {}
    obj.name = "Air Max 1"
    obj.price = "10,999"
   return obj
}

let y = Nike()
console.log(y);  // obj returned in console..

function timeout(){
    // alert ( " aerw")
    console.log("ADFas")
}
// setTimeout(timeout(),2000)


// Object()  // Won't show any output in console

// x = Object();
// console.log(x);   // undefined in console




