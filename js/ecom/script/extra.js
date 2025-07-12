let isInCart = false;

        for(j=0;j<cart_data.length;j++){
            if(cart_data[j].id == el.id){
                console.log("already in cart",j)
                isInCart = true; 
                break;
            }

            if(isInCart){
                addtocart.innerText = "Go to cart"
                addEventListener("click", function(){
                    this.window.location.href = "http://127.0.0.1:5500/js/ecom/html/cart.html"
                })
            }

        }