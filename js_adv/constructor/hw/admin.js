let form = document.querySelector("form")
let name = document.getElementById("name")
let i = 0;
addEventListener("submit",Subm)
function Product(name,category,image,price,gender,sold){
    this.name = name,
    this.category = category,
    this.image = image,
    this.price = price,
    this.gender = gender,
    this.sold = sold;
}

function Subm(){
    
    event.preventDefault()
    //  console.log(name.value)
    // 
    const obj_ = new Product( name.value , category.value, image.src , price.value, gender.value, sold.value)

    let arr_ = JSON.parse(localStorage.getItem("Products"))  || []

    arr_.push(obj_)
    localStorage.setItem("Products",JSON.stringify(arr_))
}