function setup() {
    createCanvas(windowWidth, windowHeight);
}
  
let x = 100;
let speedx = 2;

let K =1200;
let speedK=30

let C=250
let G=0
let speedG=16

let B=510
let speedB=16

let Ci=0
let speedCi=10

//if x=windowWidth, then multiple the speed by -1, this keeps it from leaving the screen.


console.log(x);

function draw() {
    background(5);
    fill(80);
    circle(windowWidth/2, windowHeight/2,150);

    let ptxo = (windowWidth*9/16)
    let ptyo = windowHeight/2
    let T= windowHeight*6/16
    let W=windowWidth/2
    let A=windowHeight-T*0.98


    //dark square
    fill(51);
    square(350,200,100);
    
    //triangle in square
    fill(200);            
    triangle(400,300,350,200,450,200);
    
    //small red circle
    fill(250);
    circle(400,300,20); 
    



    //moving circle and triangle up
    fill(C);
    circle(W,G,10);

    fill(250);
    triangle(W,G,windowWidth*6.5/18,1,windowWidth*5/8,1)


    G=G+speedG;
    if( G>=T || G<=0){
        speedG = speedG*-1;
    }
    
    //moving circles and triangles bottom
    fill(C);
    circle(W,B,10);


    fill(250);
    triangle(W,B,windowWidth*6.5/18,windowHeight,windowWidth*5/8,windowHeight)


    B=B+speedB;
    if(B>=windowHeight || B<=A){
        speedB = speedB*-1;
    }

    //moving circles and triangles left
    fill(C);
    circle(K,ptyo,10);
    
    stroke(250)
    fill(250);
    triangle(K,ptyo,windowWidth-1, windowHeight*3/4,windowWidth-1,windowHeight/4)

    fill(250);
    triangle(K,ptyo,windowWidth*3/4, windowHeight-1,windowWidth*5/8,windowHeight-1)

    fill(250);
    triangle(K,ptyo,windowWidth*3/4,1,windowWidth*5/8,1);

    //circle right
    let Tl=windowWidth*7/16
    let Lo=windowHeight*3/6
    fill(250);
    circle(Tl+Ci,Lo,10);

    
    K=K+speedK;
    Ci=Ci+speedCi;
    if(K >= windowWidth-1 || K<=ptxo+1){
        speedK = speedK*-1;
        speedCi= speedCi*-1;
    }



    
   

    




    
  }
