function setup() {
    createCanvas(windowWidth, windowHeight);
}
  
let x=1
let speedx=2

function draw() {
    //center circle

    background('#fae');
    fill(80)
    circle(windowWidth/2, windowHeight/2,150);

    //dark square
    fill(51);
    square(350,200,100);
    
    //triangle in sqaure
    fill(80);            
    triangle(400,300,350,200,450,200);
    
    //small red circle
    fill(400,50,100);
    circle(400,300,20); 
    
    //red circle right
    fill(250,100,100)
    circle(windowWidth*7/16,windowHeight*3/6,10);

    //ride circle left
    fill(250,100,100)
    circle(windowWidth*9/16,windowHeight/2,10);


    //ride circle left
    fill(250,100,100)
    circle(x,350,10);
    x=x+speedx



    
  }
