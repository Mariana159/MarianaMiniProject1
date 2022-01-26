function setup() {
    createCanvas(windowWidth, windowHeight);
  }

  let x=120;
  let y=100;

  //counts number of times through the loop
  let counter=0;

  let speedX=4;
  let speedY=2;

  //color
  let clrList=[[0,0,0]];

  function draw() {
    background(clrList[counter]);

      fill(200,30,30)
      circle(x,y,100)

      x=x+speedX;
      y=y+speedY;
      counter=counter+1


    

      thisRound=[x,(2*x),y];
      clrList.push(thisRound)


      //symbol for or || 
      //if this then do this
      if(x >windowWidth || x<=0){
          speedX=(-1)*speedX;
      }

      if(y >=windowHeight || y<=00){
          speedY=(-1)*speedY;
      }


  }