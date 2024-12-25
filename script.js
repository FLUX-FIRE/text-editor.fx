                  // ELEMENT SELECTOR
var arrow = document.querySelector("#main"); // Use # for IDs
var arry = document.querySelector(".cursor"); // Use # for class
var crimson = document.querySelector(".crimson"); // Use # for class
var blue = document.querySelector(".blue"); // Use # for class
var yellow = document.querySelector(".yellow"); // Use # for class
var dflt = document.querySelector(".dflt"); // Use # for class
var text = document.querySelector("h1");
var inputBox = document.querySelector(".inputBox");
var confirmbtn = document.querySelector(".confirmbtn");
var speechBtn = document.querySelector(".SpeechBtn");
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const BgWall1 = document.querySelector(".BG-wall1");
const BgWall2 = document.querySelector(".BG-wall2");
const BgWall3 = document.querySelector(".BG-wall3");
const BgWall4 = document.querySelector(".BG-wall4");

const defaultText = "WE ARE FLUX";




           // MOUSE MOVE FUNCTION
arrow.addEventListener("mousemove",function(dets){
    arry.style.left = dets.x+"px"
    arry.style.top = dets.y+"px"
    
});



              // COLOR MANAGEMENT
crimson.addEventListener("click",function(){
  text.style.color = "crimson"; 
});
blue.addEventListener("click",function(){
  text.style.color = "blue"; 
});
yellow.addEventListener("click",function(){
  text.style.color = "yellow"; 
});


confirmbtn.addEventListener("click", () => {
    const newText = inputBox.value;
    if (newText.trim() !==""){
        text.textContent = newText;
        inputBox.value = "";
    }
});

dflt.addEventListener("click", () =>{
    text.textContent = defaultText;
    text.style.color = "white";
    BgWall1.style.zIndex = "0";
    BgWall2.style.zIndex = "-3";
    BgWall3.style.zIndex = "-3";
    BgWall4.style.zIndex = "-3";

    
});

 img1.addEventListener("click", function(){
     BgWall1.style.zIndex = "0";
     BgWall2.style.zIndex = "-3";
     BgWall3.style.zIndex = "-3";
     BgWall4.style.zIndex = "-3";
 });
img2.addEventListener("click", function(){
     BgWall1.style.zIndex = "-3";
     BgWall2.style.zIndex = "0";
     BgWall3.style.zIndex = "-3";
     BgWall4.style.zIndex = "-3";
 });
img3.addEventListener("click", function(){
     BgWall1.style.zIndex = "-3";
     BgWall2.style.zIndex = "-3";
     BgWall3.style.zIndex = "0";
     BgWall4.style.zIndex = "-3";
 });
img4.addEventListener("click", function(){
     BgWall1.style.zIndex = "-3";
     BgWall2.style.zIndex = "-3";
     BgWall3.style.zIndex = "-3";
     BgWall4.style.zIndex = "0";
 });
