// random  videos from Array
let v = 0
myButton.addEventListener("click", (eo) => {
  let videoArr = [
    ` <iframe   id="iframe" src="https://www.youtube.com/embed/GsoAL5sd4q4" title="YouTube video player" frameborder="0" allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,

    `<iframe  id="iframe" src="https://www.youtube.com/embed/Mc2-YM9Bhu4" title="YouTube video player" frameborder="0" allow="accelerometer;
         autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,

         `<iframe id="iframe"  src="https://www.youtube.com/embed/BGkL2Pq-g3A" title="YouTube video player" frameborder="0" allow="accelerometer;
          autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,

          `<iframe  id="iframe" src="https://www.youtube.com/embed/K4DyBUG242c" title="YouTube video player" frameborder="0" allow="accelerometer;
           autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,

          `<iframe id="iframe" src="https://www.youtube.com/embed/3nQNiWdeH2Q" title="YouTube video player" frameborder="0" allow="accelerometer;
           autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,

  ];
//   let random = Math.floor(Math.random() * videoArr.length)

//   container_iframe.innerHTML = `${videoArr[random]}`;
  container_iframe.innerHTML = `${videoArr[v]}`;
  v++
  if(v > videoArr.length - 1){
      v = 0 
  }
});


// random quotes from Array

let index = 0;
randomquote.addEventListener("click", (eo) => {
  const quoteArr = [

    `<blockquote lang="ar" dir="rtl" class="sidekick">
    لا تُبرر أخطائك بل إجلطهم بالمزيد
    &#128127; &#128514;
    <br>
    <cite>    شخص عادى </cite>
  </blockquote> `,




  `<blockquote lang="ar" dir="rtl" class="sidekick">
  لا تتعلق بأحد فالناس ليست أشجاراً وانت لست قرداً
  &#128514;
  
  <br>
  <cite>  انسان مجروح  </cite>
</blockquote> `,



`<blockquote lang="ar" dir="rtl" class="sidekick">

الحياة ليست سباق  ف إهدى كده و relax  يا صاحبى
&#128526;

<br>
<cite> شخص رايق  </cite>
</blockquote> `,





`<blockquote lang="ar" dir="rtl" class="sidekick">

الحياة إما مغامرة جريئة أو لا شي
&#129505; &#128170;
<br>
<cite>شخص جامد</cite>
</blockquote> `,



`<blockquote lang="ar" dir="rtl" class="sidekick">
اللى ملوش قلب ملوش رزق
&#129505; &#128170;
<br>
<cite> شخص شبح</cite>
</blockquote> `,






`<blockquote lang="ar" dir="rtl" class="sidekick">
الثقة بالنفس تصنع المُعجزات
&#128521;
<br>
<cite>   شخص عارف قيمة نفسة  </cite>
</blockquote> `,


  ];


  parentquote.innerHTML = quoteArr[index];

  (index < quoteArr.length-1) ? index++ : index = 0

});