const allcopybtns = document.querySelectorAll(".copy")

allcopybtns.forEach((item) => {

    item.addEventListener("click" , () => {
        const copy = item.nextElementSibling.innerText

        navigator.clipboard.writeText(copy)
        item.innerText = "Copied!"


       setTimeout(() => {
            item.innerText = "Copy"
        }, 1000);

        
       

     
    });


});
