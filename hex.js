const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const bgName=document.querySelector(".bg-name");

document.querySelector(".js-random-bg-btn").addEventListener("click",()=>{
  let bgClr='#';

  for(let i=0;i<6;i++){
    bgClr+=`${hex[(Math.random()*15).toFixed(0)]}`;
  }
  document.getElementById("bg-color").style.backgroundColor=bgClr;
  
  bgName.innerHTML=`Background Color : ${bgClr}`;
    
})

const resetBtn=document.querySelector(".reset-btn");
 
resetBtn.addEventListener("click",()=>{
  document.getElementById("bg-color").style.backgroundColor='lightblue';

  bgName.innerHTML=`Background Color : Light blue`;
})


