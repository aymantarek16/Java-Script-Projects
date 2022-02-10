let plus = document.querySelectorAll(".plus");

plus.forEach((item) => {

  item.addEventListener("click", (eo) => {

    // Display Height Of Content
    let content =eo.target.parentElement.parentElement.getElementsByClassName("content")[0];
    content.classList.toggle("active");

    if (content.classList.contains("active")) {
      content.style.height = `${content.scrollHeight+25}px`;
    } else {
      content.style.height = "0";
    }


    // Change Plus Icon + to 
    item.classList.toggle("hide_plus");

    if (item.classList.contains("hide_plus")) {
      item.innerText = "_";
      item.style.transform = "translate(-5px , -18px)";
    } else {
      item.innerText = "+";
      item.style.transform = "translate(0 , 0)";


    }



  });
});
