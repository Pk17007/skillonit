// file:///D:/NEW%20PARTH/SkillonIT_FED/js-assginments/JS%20loop%20and%20nested%20que.pdf
//                      Q.16
// count = "";
// for(i=1;i<=4;i++){
//     for(j=0;j<i;j++)
//     {
//         count = count + "*"
//     }
//     console.log(count)
//     count = "";
// }
// *
// **
// ***
// ****

//////////////////////////////////////////////////
// Q.17 
// 1
// 1 2
// 1 2 3
// // 1 2 3 4
// count = "";
// for(i=1;i<=4;i++){
//     for(j=1;j<=i;j++){
//         count = count +""+ j;
//     }
//     console.log(count)
//         count = "";
// }

//////////////////////////////////////////////////////





////////////////////////////////////////////////////////////
// Q.18   Print the multiplication tables from 1 to 5 using nested loops

// for(i=1;i<=5;i++){
//     console.log("   Table of",i)
//     for(j=1;j<=10;j++){
//         console.log(i,"X",j,"=",j*i)
//     }
// }

///////////////////////////////////////////////////////////////////////////
// // 19. Print a square pattern using stars (5 rows and 5 columns)
// count = '';
// for(i=1;i<=5;i++){
//     for(j=1;j<=5;j++){
//        count = count+"*"
//     }
//     console.log(count);
//     count = ''
// }

/////////////////////////////////////////////////////////////////////////
// // Q.20
// count = "";
// for(i=5;i>=1;i--){
//     for(j=5;j>=1;j--){
//         count = count + j;
//     }
//     console.log(count);
//     count = '';
// }

//////////////////////////////////////////////////////////////////
//21. Print a triangle pattern using alphabets










///////////////////////////////////////////////////////////
// 22. Print a triangle pattern using numbers:
// 1
// 2 3
// 4 5 6

// count = 0;
// for(i=1;i<=6;i++){
//     count++;
//     // console.log(count)
    
// }


///////////////////////////////////////////////////////
//24. Print reverse star triangle:
// * * * * *
// * * * *
// * * *
// * *
// *

// for(i=5;i>0;i--){
//     count = "";
//     for(j=1;j<=i;j++){
//         count = count + "*";
//     }
//     console.log(count);
// }

///////////////////////////////////////////////////////
// 30. Use nested loops to print all pairs of numbers from 1 to 3:
// (1,1) (1,2) (1,3)
// (2,1) (2,2) (2,3)
// // (3,1) (3,2) (3,3)

for(i=1;i<=3;i++){
    count = "";
    for(j=1;j<=3;j++){
        count = count +"("+ String(i)+","+String(j) + ")"+"";
    }
    console.log(count);
    
}

/////////////////////////////////////////////////////////////////////