/*



*/



// so, let's get our canvas element from html, and make it usefull for our script
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
//setting canvas width and height, depending on our windows w & h
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//here's some default properties of our line
// ctx.strokeStyle = "BADASS";
ctx.lineJoin = "bevel";
ctx.lineCap = "round";
ctx.lineWidth = 15;
ctx.background = "black";
//and here was some unusefull sh** from photoshop
// ctx.globalCompositeOperation = 'multiply';


//couple of well described variables

//are we drawing now?
let isDrawing = false;
/*

*/
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

//function draw for... idk, drawing? name says it all
function draw(e){
  if(!isDrawing) return;

  //let's change that ugly variable name for something usefull
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if(hue >= 360){
    hue==0;
  }
  if(ctx.lineWidth >= 5 || ctx.lineWidth <= 5){direction = !direction}
  if(direction){
    ctx.lineWidth++;
  }else{
    ctx.lineWidth--;
  }
}
canvas.addEventListener("mousedown", (e)=> {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
})
canvas.addEventListener("touchstart", (e)=> {
  isDrawing = true;
  [layerX, layerY] = [e.offsetX, e.offsetY];
})



canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", ()=> isDrawing = false);
canvas.addEventListener("mouseout", ()=> isDrawing = false);
canvas.addEventListener("touchend", ()=> isDrawing = false);


// // TODO:
// 1. add left controls for: color, shape, canva bg modyfikator
