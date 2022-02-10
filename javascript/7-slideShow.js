// Declare Varibale
let sliderContainer = document.getElementById("sliderContainer")
let pre = document.getElementById("pre")
let next = document.getElementById("next")
let parentNumber = document.getElementsByClassName("numbers")[0]
let allButtons = document.querySelectorAll(".mynumber")



const arrimg = [

 ` <img  src="/img/1.png"  class="img-slider img1"  >`,
  `<img src="/img/2.png"   class="img-slider img2"  >`,
  `<img src="/img/3.png"   class="img-slider img3"  >`,
  `<img src="/img/4.png"   class="img-slider img4"  >`,
  `<img src="/img/5.png"   class="img-slider img5"  >`
]

let p = 0
sliderContainer.innerHTML = arrimg[p]
sliderContainer.innerHTML += `<p>slide #${p +1} of ${arrimg.length}</p>`

pre.setAttribute("disabled" , "")


next.addEventListener("click" , (eo) => {
pre.removeAttribute("disabled")
 p++ 

    
sliderContainer.innerHTML = arrimg[p]
sliderContainer.innerHTML += `<p>slide #${p +1} of ${arrimg.length}</p>`

if (p == arrimg.length-1) {
  next.setAttribute("disabled" , "")

}

parentNumber.getElementsByClassName("active-num")[0].classList.remove("active-num")
parentNumber.getElementsByTagName("button")[p].classList.add("active-num")

})



pre.addEventListener("click" , (eo) => {
  next.removeAttribute("disabled")
   p--
  sliderContainer.innerHTML = arrimg[p]
  sliderContainer.innerHTML += `<p>slide #${p +1} of ${arrimg.length}</p>`
  
  if (p == 0) {
    pre.setAttribute("disabled" , "")
  
  }
  parentNumber.getElementsByClassName("active-num")[0].classList.remove("active-num")
parentNumber.getElementsByTagName("button")[p].classList.add("active-num")
  })


  allButtons.forEach((item , index) => {

  item.addEventListener("click", (eo) => {

    parentNumber.getElementsByClassName("active-num")[0].classList.remove("active-num")
    item.classList.add("active-num")

    sliderContainer.innerHTML += arrimg[index]
    sliderContainer.innerHTML += `<p>slide #${index +1} of ${arrimg.length}</p>`



    p = index
    // First Index
     if(index == 0){
      next.removeAttribute("disabled")
      pre.setAttribute("disabled" , "")

      } 
      // Last Index
     else if (index == arrimg.length-1) {

        next.setAttribute("disabled" , "")
        pre.removeAttribute("disabled")
        } 
        // any case
        else{
        next.removeAttribute("disabled")
        pre.removeAttribute("disabled")
      }
           
  })

});

