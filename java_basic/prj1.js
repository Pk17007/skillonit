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
// Change value of b to fing average
// it will remove decimal part from the averages'

//  count=0; 
//  b=6;
//  for ( a=1; a<=b ; a++){
//     count=count+a;
    
//  } console.log (Math.floor(count/b))  

// ////////////////////////////////////////
//          pRime nos
b=59;  //// Enter any no 
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


