let x;
let mob;

function setup() {
createCanvas(600, 400);
}
function draw() {

mob = random(880);
  
stroke(0,20);
  
//background(220)
circle (300,200,mob);  //center
circle (600,0,mob);   //right up
circle (0, 400, mob);  //left down
circle (600,400,mob);  //right down
circle(0,0,mob);  //left up
  
  noFill();
  
line(0,400, 300, mob);   //left down
line(0,mob, 600, 0);   //right up
line(mob, 0, 0, 300);  //left up
line(mob,0, 600, 100);  //right down
  
}