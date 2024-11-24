export const colors = [
  "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", 
  "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", 
  "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", 
  "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", 
  "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", 
  "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", 
  "darkorchid", "darkred", "darksalmon", "darkseagreen", 
  "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", 
  "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", 
  "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", 
  "ghostwhite", "gold"
]

export function randomNumber(){
  return (Math.random()*255).toFixed(0);
}
 
export function randomColor(){
  const bgName=document.querySelector(".bg-name");
  let r=0,g=0,b=0;
  let bgClr='';
  if(Math.random()<=0.9){
    r=randomNumber();
    g=randomNumber();
    b=randomNumber();
    bgClr=`rgb(${r},${g},${b})`;
  }

  else{
    bgClr=colors[(Math.random()*50).toFixed(0)];
  }
  document.getElementById("bg-color").style.backgroundColor=bgClr;

  bgName.innerHTML=`Background Color : ${bgClr}`;

}

