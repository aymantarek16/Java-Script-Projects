//  toggle the light & dark mode

{
  const dark = document.getElementById("dark");
  const body = document.getElementById("body");

  dark.addEventListener("click", (eo) => {
    body.classList.toggle("dark");
      
      (body.classList.contains("dark")) ? eo.target.innerText = "Light Mode" :  eo.target.innerText = "Night Mode"

  
  });
}

// ____________________________________________________________________________________________________________________________________________

//  when hover on  HEADER => change-color

changecolorbox.addEventListener("mousemove", (eo) => {
    hiddenul.style.display = "block";
  });

  //  when unhover on  HEADER => back change-color
  changecolorbox.addEventListener("mouseout", (eo) => {
    hiddenul.style.display = "none";
  });


//  ___________________________________________________________________________________________________________________________________________

// Reuseable Function

const ChangeColor = () => {
  return Math.round(Math.random() * 360);
};


//_____________________________________________________________________________________________________________________________________________


// Change-BackgrounColor Of Hedear

let headerbg = document.getElementById("headerbg");
let myheader = document.getElementsByClassName("myheader")[0];

headerbg.addEventListener("click", (eo) => {
  const random = Math.round(Math.random() * 360);
  myheader.style.backgroundColor = `hsl( ${random}, 44% , 55%)`;

  web_title = document.querySelector("#myheader  h1"); // Inspect + Rigth Click on Elem + Copy Selector
  web_title.style.backgroundColor = `hsl( ${random}, 44% , 55%)`;

  ChangeMode = document.querySelector("#dark");
  const random2 = Math.round(Math.random() * 360);
  ChangeMode.style.backgroundColor = `hsl( ${random2}, 44% , 55%)`;
});

// _____________________________________________________________________________________________________________________________________________

// Change-BackgrounColor Of Title

let titlebg = document.getElementById("titlebg");

titlebg.addEventListener("click", (eo) => {
  const random2 = Math.round(Math.random() * 360);
  let titBackground = document.querySelectorAll(".titBackground")

  titBackground.forEach((item) => {
    item.style.backgroundColor = `hsl( ${random2}, 44% , 55%)`;
    console.log(random2);

  });

});

//_______________________________________________________________________________________________________________________________________________

// // Change-Color Of Title 
// let titlecolor = document.getElementById("titlecolor");

// titlecolor.addEventListener("click", (eo) => {

//   title1 = document.querySelector("#sec > h1")
//   title1.style.color = `hsl( ${ChangeColor()}, 44% , 55%)`;

//   title2 = document.querySelector("#main > section:nth-child(2) > h2")
//   title2.style.color = `hsl( ${ChangeColor()}, 44% , 55%)`;

// });

//_______________________________________________________________________________________________________________________________________________


// // Change-Color Of Title Using array & i++
let arrColor = ["#000", "#ddd", "#0ff"];
var i = 0;

// let titlecolor = document.getElementById("titlecolor");

titlecolor.addEventListener("click", (eo) => {

  js_title = document.querySelectorAll(".js_title");

  js_title.forEach((item) => {
    item.style.color = arrColor[i];
  });
  if(i < arrColor.length -1 ){
    i++
  }
  else{
    i = 0
  }
});


//_______________________________________________________________________________________________________________________________________________



// Change-BackgrounColor Of Main Sections .......
// Reuseable Function

const ChangeBgColor = () => {
  return Math.round(Math.random() * 360);
};

// 1- Change-BackgrounColor Of Main Sections Using Reuseble Function

// let sectionbg = document.getElementById("sectionbg");

// sectionbg.addEventListener("click", (eo) => {

//   let section = document.querySelectorAll("section")
//   section.forEach((item) => {
//     item.style.backgroundColor = `hsl( ${ChangeBgColor()}, 44% , 55%)`;

//   });

// });

//_______________________________________________________________________________________________________________________________________________

// 2- Change-BackgrounColor Of  Main Sections Using Mach round

// const arrClr = ["#A0E7E5", "#FBE7C6", "#ffafcc"];

// sectionbg.addEventListener("click", (eo) => {
//   const section = document.querySelectorAll("section");

//   section.forEach((item) => {
//     let random = Math.floor(Math.random() * arrClr.length);
//     item.style.backgroundColor = arrClr[random];
//   });
// });

//_______________________________________________________________________________________________________________________________________________

// 3- Change-BackgrounColor Of  Main Sections Using rgb & return function

// const random = () => {
//   return Math.round( Math.random() * 255)
// };

// sectionbg.addEventListener("click", (eo) => {

//   const section = document.querySelectorAll("section");
//     const rgb1 = random()
//     const rgb2 = random()
//     const rgb3 = random()

//   section.forEach((item) => {
//     item.style.backgroundColor = ` rgb( ${rgb1} , ${rgb2} , ${rgb3} ) `  ;
//   });  
// });

//_______________________________________________________________________________________________________________________________________________

// 4- Change-BackgrounColor Of  Main Sections Using array & i++

// const arrClr = ["#A0E7E5", "#FBE7C6", "#ffafcc"];
// var i = 0;

// sectionbg.addEventListener("click", (eo) => {
//   const section = document.querySelectorAll("section");
//   section.forEach((item) => {
//     item.style.backgroundColor = `${arrClr[i]}`;
//   });

//   (i < arrClr.length - 1) ? i++ : i =0

// });

//_______________________________________________________________________________________________________________________________________________

// 5- Change-BackgrounColor Of  Main Sections Using For
// const arrClr = ["#A0E7E5", "#FBE7C6", "#ffafcc"];
// k = 0
// sectionbg.addEventListener("click", (eo) => {

//   let hexa = `#${Math.random().toString(16).slice(2,8)}`
//   let section = document.querySelectorAll("section");

//   for (  i = 0 ; i < section.length ; i++ ) {

//     section[i].style.backgroundColor = arrClr[k];
    
//   }
//   (k < arrClr.length - 1) ? k++ : k = 0

// });

//_______________________________________________________________________________________________________________________________________________

// 6- Change-BackgrounColor Of  Main Sections Using for-in / for-of / while / do-while

// let randomhex = `#${Math.random().toString(16).slice(2, 8)}`;
// sectionbg.addEventListener("click", (eo) => {
//   const allSections = document.querySelectorAll("section");
//   const hex = randomhex;


  // for (const i in allSections) { // in  = index of Section
  //   const item = allSections[i];
  //   item.style.backgroundColor = hex;
  // }





  // for (const i of allSections) { // for = Element
  //   const item = i;
  //   item.style.backgroundColor = hex;
  // }




  // let i = 0;
  // while (i < allSections.length) {
  //   const item = allSections[i];
  //   item.style.backgroundColor = hex;
  //   i++;
  // }




  // let i = 0;

  // do {
  //   const item = allSections[i];
  //   item.style.backgroundColor = hex;
  //   i++;
  // } while (i < allSections.length); 

// });

//_______________________________________________________________________________________________________________________________________________


// 7- Change-BackgrounColor Of  Main Sections Using hexadecimal

sectionbg.addEventListener("click", (eo) => {

  let hexa = `#${Math.random().toString(16).slice(2,8)}`
  const section = document.querySelectorAll("section");

  section.forEach((item) => {

    item.style.backgroundColor = hexa;

  });


});

//_______________________________________________________________________________________________________________________________________________


