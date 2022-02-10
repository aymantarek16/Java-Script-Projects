// HeartAnimation logic
const randomhearts = document.getElementById("randomHeart"); //Button 
const containerheart = document.getElementById("containerHeart");

const RandomHearts = () => {
  const parentHeart = document.createElement("div");
  containerheart.append(parentHeart);

  const createRandomHeart = setInterval(() => {
    const heart = document.createElement("span");
    heart.classList.add("heart");
    heart.innerHTML = "&#129505;";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${      (Math.random() + 0.5)  * 1}s   `
   

      // ( 0  +0.5)         => 0.5            *1.5   => 0.75
      //  (0.9999999 +0.5)  => 1.4999999999   *1.5  => 2.25

      const heart2 = document.createElement("span");
      heart2.classList.add("heart");
      heart2.innerHTML = " &#128156;";
      heart2.style.left = `${Math.random() * 100}%`;
      heart2.style.animationDuration = `${(Math.random() + 0.2)  * 1.5}s   `



    parentHeart.append(heart);
    parentHeart.append(heart2);
   
  }, 20);


  setTimeout(() => {
    clearInterval(createRandomHeart);
  }, 2000);

  setTimeout(() => {
    parentHeart.remove();
  }, 6000);
};


randomhearts.addEventListener("click", (eo) => {
  RandomHearts()
});



