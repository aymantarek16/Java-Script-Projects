const updateTotalPrice = () => {
    const allProd = document.querySelectorAll(".item-container")
    let total = 0 
    
    allProd.forEach((item) => {
      let price = Number(item.getElementsByClassName("price")[0].innerText.replace("$" , ""))
      let quantity = Number(item.getElementsByClassName("input-quantity")[0].value)
      total = total + (price * quantity)
    });
    
    document.getElementById("totalPrice").innerText = ` ${total} $`
  
  };
  

let showItems = document.getElementById("show_items")
let allBtns = document.querySelectorAll(".btn-primary")

// Change Total Price When Change Number Of quantityItems In Input
blackScreen.addEventListener("change" , ()=>{
    updateTotalPrice()
})


blackScreen.addEventListener("click" , (eo)=>{
    if (eo.target.classList.contains("deleteProd")) {
        eo.target.parentElement.remove()
         updateTotalPrice()
         let nameOfDeletedProd = eo.target.parentElement.getElementsByClassName("product-name")[0].innerText


         let allCards = document.querySelectorAll(".card")
         allCards.forEach((item) => {
             let nameOfProdInGallery = item.getElementsByClassName("card-title")[0].innerText
           if ( nameOfProdInGallery == nameOfDeletedProd ) {
               let doneButton = item.getElementsByClassName("btn-success")[0]
               doneButton.removeAttribute("disabled")
               doneButton.classList.remove("btn-success")
               doneButton.classList.add("btn-primary")
               doneButton.innerText = "Add To Card"
           }
         });
         

    }
})



allBtns.forEach((item) => {
  item.addEventListener("click" , (eo) => {


    { // Change Button Text To Done
   
    item.setAttribute("disabled" , "")
    item.classList.remove("btn-primary")
    item.classList.add("btn-success")
    item.innerHTML = "Done &#10004"}
    

    { // Create div Cointain congratulations text
    let popUp = document.createElement("div")
    body.append(popUp)
    popUp.classList.add("done-pop-up")
    popUp.innerHTML = "&#127881 Congratulations"

    setTimeout(() => {
        popUp.style.transform = "translateX(-60vw)"
        }, 1500);

        setTimeout(() => {
        popUp.remove()
        }, 3000);   }

 
   const card = item.parentElement.parentElement.parentElement
   const imgSrc = card.getElementsByClassName("card-img-top")[0].getAttribute("src")
   const itemName = card.getElementsByClassName("card-title")[0].innerText
   const itemPrice = card.getElementsByClassName("price")[0].innerText


   const addedProduuct = `<div dir="rtl" class="item-container">

                            <div class="img-title-parent">
                                <img src="${imgSrc}" alt="">
                                <p class="product-name">${itemName}</p>
                            </div>



                            <div style="display: flex; align-items: center;">
                                <input type="number" value="1" min="1"  class="input-quantity" dir="ltr" id="input-quantity" >
                                <p >الكمية</p>

                            </div>

                            <div class="price">
                                ${itemPrice}
                            </div>


                            <div class="btn btn-secondary deleteProd" id = "deleteProd">
                                حذف
                            </div>




                    </div>`


                    
                    allProducts.innerHTML += addedProduuct
                    updateTotalPrice()


  }) // EventListener
}) // ForEach
                   

showItems.addEventListener("click", (eo) => {
    blackScreen.style.transform = "translateX(0)"
})

const close = document.getElementById("close")
close.addEventListener("click", (eo) => {
    blackScreen.style.transform = "translateX(110vw)"
})

// const deleteProd = document.getElementById("deleteProd")
// deleteProd.addEventListener("click" , () => {
    

// })

