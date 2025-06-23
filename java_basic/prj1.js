/////   table of 2

// let b = 2;
// for (let a=1; a<=10;a++){
//     console.log (a*b)
// }
//////////////////////////////////////////////
// // FActorial
// let count = 1;

// for(i=1;i<=5; i++){
//     count= count*i
// }
// console.log (count)
//////////////////////////////////////////
// // 
//         //  even no or odd no
// let a = 1;
// for (i=1; i<=30; i++){
//     if (i%2==0) {
//         console.log ("Even:",i)
//     }else
//     console.log (" Odd:", i)
// }
/////////////////////////////////////////

// //        sum of n numbers

//     count=0;
// for(a=1;a<=10;a++){
//     count=count+a;
    
// }console.log (count)

// ?////////////////////////////////////////

            // Average of n nos
 // Use of Math.floor
// Change value of b to get average
// it will remove decimal part from the averages'

//  count=0; 
//  b=6;
//  for ( a=1; a<=b ; a++){
//     count=count+a;
    
//  } console.log (Math.floor(count/b))  

// /////////////////////////////////////////////
//          Check your pRime nos
b=49;  //// Enter any no 
count=0;
for(a=1;a<=b;a++){
    if(b%a==0){
    count++;
    }
}
if(count==2){
        console.log( b ,"is a Prime no");
    }else{
        console.log( b ,"is not a Prime no");
 }


////////////////////////////////////////////////
    // checks positive or negative 
// var x;
// x = -32;
// if (x>0){
//     console.log("No. is positive");
// }else{
//     console.log("No. is negative");

// }

// ///////////////////////////////////////////////
//             // To check if a string is empty/
// var t;
// t = '';
// if (t==""){
//     console.log("Empty String");    
// }else{
//     console.log("NOT empty String ");
// }

////////////////////////////////////////////////
                    // Notes ka que from nested for loops   //
for(var i=1;i<=2;i++)
{
var bag="";
for(var j=1; j<=3; j++){
bag = bag + "Hello ";
}
console.log(bag);
}

////////////////////////////////////////////////
// for(var father=1; father<=5; father++)
// {
// var bag = "";
// for(var son=1; son<=10; son++)
// {
// bag = bag + "*";
// }
//     console.log("Field",father,bag);
// }
///////////////////////////////////////////////