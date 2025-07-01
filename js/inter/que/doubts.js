// Reverse a number using a while loop (e.g., 4321 → 1234)


// let num = 4321;
// let reversed = 0;

// while (num > 0) {
//   let digit = num % 10;  // 1 , 2  , 3 , 4
//   reversed = reversed * 10 + digit;  // 0*10+1 = 1 , 1*10+2 =12 , 12*10+3= 123 , 123*10+4 = 1234
//   num = Math.floor(num / 10); // 432  , 43 , 4
// }

// console.log(reversed); 

/////////////////////////////////////////////////////

// Calculate the sum of digits of a number using a while loop (e.g., 123 → 6).

// let num = 123;
// let sum = 0;

// while (num > 0) { 
//   let digit = num % 10;   // 3  2   1
//   sum = sum + digit; // 0+3  3  ,  3+2 = 5, 5+1
//   num = Math.floor(num / 10);  // 12    1
// }

// console.log(sum); 

///////////////////////////////////////////////////////

// Write a program to check if a number is a palindrome (e.g., 121, 1331)


// let num = 152;
// let originalNum = num;
// let reversed = 0;  // 25   

// for (let temp = num; temp > 0; temp = Math.floor(temp / 10)) {
//   let digit = temp % 10;  // 1
//   reversed = reversed * 10 + digit;  // r = 25 *10 + 1   251
// }

// if (originalNum === reversed) {
//   console.log(originalNum + " is a Palindrome");
// } else {
//   console.log(originalNum + " is Not a Palindrome");
// }

//////////////////////////////////////////////////////////////

// Find the maximum number in an array.

// let arr = [10, 25, 5, 60, 15];
// let max = arr[0]; 

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log("Maximum number is:", max);

///////////////////////////////////////////////////////////////
// Find the minimum number in an array

// let arr = [10, 25, 5, 60, 15];
// let min = arr[0]; 

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }

// console.log("Minimum number is:", min);

////////////////////////////////////////////////////////////////
// Swap the first and last element of an array.

// let arr = [10, 20, 30, 40, 50];

// let first = 0;
// let last = arr.length - 1;

// // Swapping first and last element
// let temp = arr[first];
// arr[first] = arr[last];
// arr[last] = temp;

// console.log("Array after swapping:", arr);

//////////////////////////////////////////////////////////////////

// What will happen if the condition in the if statement is not a boolean


// Value	    Meaning
// false	    Boolean false
// 0	        Zero
// ""	        Empty string
// null	        Null
// undefined	Undefined
// NaN	        Not a number


// if(){
//     console.log("hello")
// }

/////////////////////////////////////////////////////////////////

// Write an if statement to check if a variable is undefined.

// let a ;
// if(a == undefined){
//     console.log(a, "is undefined")
// }else{
//     console.log(a, "is not undefined")
// }

//////////////////////////////////////////////////////////////////////

