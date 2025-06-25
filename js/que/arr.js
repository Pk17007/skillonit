//file:///D:/NEW%20PARTH/SkillonIT_FED/js-assginments/JS%20array%20que.pdf

//1. Create an array of 5 numbers and print all the elements using a loop

// var num = [ 12 ,32, 43,24,56];

// for(i=0;i<num.length;i++){
//     console.log(num[i]);
// }
/////////////////////////////////////////////////////////
//2. Find the sum of all elements in an array
// var num = [ 12 ,32, 43,24,56];
// let sum = 0;
// for(i=0;i<num.length;i++){
//     sum =sum + num[i];
// }
// console.log(sum);
/////////////////////////////////////////////////////////
// 3. Find the maximum number in an array.








///////////////////////////////////////////////////////////
//5. Count how many even numbers are in an array.
//6. Count how many odd  numbers are in an array.
// var num = [ 12 ,32, 43,24,56];
// even = 0;
// odd = 0;
// for(i=0;i<num.length;i++){
//     if(num[i]%2==0){
//         even++;
//     }else{
//         odd++;
//     }
// }
// console.log("There are",even,"even numbers");
// console.log("There are",odd,"even numbers");

/////////////////////////////////////////////////////////
//7. Create a new array that stores squares of all elements from another array.
// let j=0;
// let num = [1,2,3,4,12,14];
// let num2=[]
// for(i=1;i<num.length;i++){
//         j=num[i]**2;
//         num2.push(j);
//         j++;
// }
// console.log(num2)

////////////////////////////////////////////////////////
// 8. Reverse the elements of an arra

// let arr = ["first","2nd",3,4,5,6]
// let arr2 = []
// for(i=0;i<arr.length;i++){
//     arr2.unshift(arr[i]);
// }
// console.log(arr2);

////////////////////////////////////////////////////////
// 9. Print only the positive numbers from an array
//  let arr = [1,3,5,-4,-2,45]

// for(i=0;i<arr.length;i++){
//     if(arr[i]>0){
//         console.log(arr[i]);
//     }
// }

///////////////////////////////////////////////////////
//12. Remove duplicate elements from an array (without using Set).

// let a = [11,34,34,11,45,23,14,553,34,21]

// for(i=0;i<a.length;i++){
//     for(j=1;j<i;j++){
//         if(a[i]==a[j]){
            
//         }
//     }
// }console.log(a);

/////////////////////////////////////////////////////////
// 13. Check if a given element exists in an array or not

// let a = [11,34,34,11,45,23,14,553,34,21];
// const t = 11;
// count = 0;
// for(i=0;i<a.length;i++){
//     if(t==a[i]){
//           count++;
//     }
// }
//  if(count==1){
//         console.log("Given element exists in array"); 
//     }else if(count==0){
//         console.log("Given element doesn't exists in array"); 
//     }else{
//         console.log("Given element exists for multiple times in array"); 
//     }

///////////////////////////////////////////////////////////
// 14. Count how many times a particular number appears in an array

// let a = [11,34,34,11,45,23,14,553,34,21,11, 11,11,];
// const t = 34;
// count = 0;
// for(i=0;i<a.length;i++){
//     if(t==a[i]){
//           count++;
//     }
// }
// console.log(t,"appeared for",count,"times in array");

////////////////////////////////////////////////////////////
// 15. Swap the first and last element of an array.






///////////////////////////////////////////////////////////////
// //16. Merge two arrays into one.

// let a = [11,34,34,11,45,23,14,53];
// let b = [12,21,34,23,32];
// let c=[];
// for(j=b.length-1;j--;){
//     c.unshift(b[j])
// }
// for(i=a.length;i--;){
//     c.unshift(a[i])
// }
// console.log(c);

////////////////////////////////////////////////////////
//17. Find the common elements between two arrays

// let a = [11,34,34,11,45,23,14,53];
// let b = [12,21,34,23,32];

// for(i=0;i<a.length;i++){
//     for(j=0;j<b.length;j++){
//         if(a[i]==b[j]){ 
//             console.log(a[i],"is common in both arrays")
//         }
//     }
// }


/////////////////////////////////////////////////////////////
// 18 .Find the difference of elements between two arrays (elements that are in one but
//not the other).

let a = [11,34,34,11,45,23,14,53];
let b = [12,21,34,23,32];
count=0;
for(i=0;i<a.length;i++){
    for(j=0;j<b.length;j++){
        if(a[i]==b[j]){ 
            count++;    
    }else if(count=b.length){
                console.log(a[i],"is not in both arrays")
                count = 0;
            }
    }
}