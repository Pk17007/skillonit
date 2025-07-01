// let arr = [45,78,12,55,89]

// function abc(data,a){  // data and a are called parameters
//    for(let i=0;i<data.length;i++){
//     console.log(data[i]+a)
//    }
// }

// abc(arr, 5);  // calling and assigning parametera


// let b = ["Volvo", "Bmw","Skoda","Merc","RR"]

// function fxn (brand,f){
//     for(i=0;i<brand.length;i++){
//         console.log(brand[i]+ String(f))
//     }
// }

// fxn (b,"_cars")

//////////////////////////////////////////////////

// 15. Swap the first and last element of an array

// let num = [ 23,42,32,14,53,2,42,5,53,23,98]

// function swap (arr){
//     let sw = arr[arr.length-1];
//     arr[arr.length-1] = arr[0];
//     arr[0] = sw;
//     console.log(arr);   
// }
// swap(num)

////////////////////////////////////////////////////
// 13. Check if a given element exists in an array or not.

// let num = [23,42,32,14,53,2,42,5,53,23,98]

// function exist (arr,no){
//       count =0;
//     for(i=0;i<arr.length;i++){
//         // console.log(arr[i])
//         if(arr[i]==no){
//             count++; 
//         }
//     }
//     if(count==0){
//         console.log(no," is not in the array");
//     }else if(count>1){
//         console.log(no," is in the array for",count,"times");
//     }else{
//         console.log(no," is in the array");
//     }

// }

// exist(num,53);

////////////////////////////////////////////////////////
//17. Find the common elements between two arrays.

// function common (arr1,arr2){
//     count =0;
//     for(i=0;i<arr1.length;i++){
//         for(j=0;j<arr2.length;j++){
//             if(arr1[i]==arr2[j]){
//                 console.log(arr1[i]);
//                 count++;
//             }
//         }
//     }
//     if(count = 0){
//         console.log("No elements are common");
//     }
// }

// A =  [23,42,57,8,76,5,48,9,8,723,]
// B =  [54,67,43,7,89,65,6,8,9,65,54]

// common (A,B);

//////////////////////////////////////////////////////
//26. Create an array of strings and print each string's length.

// a = ["avd","qwerty","dell","microsoft"]

// function strlgt(arr){
//     for(i=0;i<arr.length;i++){
//         console.log(arr[i].length);   
//     }
// }
// strlgt(a)

////////////////////////////////////////////////////////////////
//27. Check if an array is sorted in ascending order.

// a = [1,2,4,2,34,23,12,33,4,2,1]
// b =[1,2,4,6,8,9,10,23,45,56,]
// function asc(arr){
//     count =0;
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>arr[i+1]){
//             count++;
//         }        
//     }
//     if(count == 0){
//             console.log("Array is in ascending order");

//     }else{ console.log("Array not is ascending order");}
// }

// asc(a);

//////////////////////////////////////////////////////////////
// //29. Remove all 0s from an array.

a = [1,3,4,0,3,2,4,2,9]
b = [0,4,3,2,0,1,0,23,0,34,23,0]
count = 0;
function rmv0(arr){
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let swap = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = swap;
            }
        }
        if(arr[i]==0){
                count++;
            }
    }
    // if(count>0){
    //     for(k=0;k<count;k++){
    //        arr.shift();
    //     }
    // }
    // console.log("New array is" ,arr);
    console.log(count);
    
} 
rmv0(b)
