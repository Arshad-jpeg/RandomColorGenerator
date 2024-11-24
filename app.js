import {colors,randomColor,randomNumber} from './colors data.js';


const bgName=document.querySelector(".bg-name");
const resetBtn=document.querySelector(".reset-btn");

document.querySelector(".js-random-bg-btn").addEventListener("click",()=>{
  randomColor();
})


resetBtn.addEventListener("click",()=>{
  document.getElementById("bg-color").style.backgroundColor='lightblue';

  bgName.innerHTML=`Background Color : Light blue`;
})


