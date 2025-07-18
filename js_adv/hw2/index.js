let img_arr = [ "https://cdn.pixabay.com/photo/2016/12/14/12/09/violin-1906127_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/03/07/13/11/flower-9453062_1280.jpg",
    'https://cdn.pixabay.com/photo/2025/06/05/17/48/mountains-9643430_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/19/10/12/skyline-7862200_1280.jpg',
    "https://cdn.pixabay.com/photo/2024/08/31/06/24/river-9010602_1280.jpg"
] 
count = 0;


function dispaly(){
       
        let image = document.createElement("img")
        image.src = img_arr[count]
        main = document.getElementById("main")
        main.innerHTML = null;
        main.append(image)
        console.log(count)
        // console.log("poi");
        if(count < img_arr.length-1){
            count++;
        }else{
            count = 0
        }

}


    let x;
   function start(){
    x = setInterval(dispaly,600)
   }

   function stop(){
        clearInterval(x)
     }
// dispaly(img_arr)


// console.log(img_arr[2]);

