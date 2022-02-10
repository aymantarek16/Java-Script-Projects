// Auto Writting Congratulation Animation

let counters = 1;

const autoWritings = () => {
  const titles = "Congratulations Animation";
  congrat.innerText = titles.slice(0, counters);


   (counters < titles.length) ?  counters++ :  counters = 1


};

setInterval(autoWritings, 100);


// Auto Writting Who Iam

let counter = 1;

const autoWriting = () => {

  const title = "who I am";
  who_iam.innerText = title.slice(0, counter);


  (counter < title.length) ?  counter++ :  counter = 1

 
  
};

const stopAutoFun = setInterval(autoWriting, 300);