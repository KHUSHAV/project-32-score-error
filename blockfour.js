class blockfour extends block {
    constructor(x,y,width,height){
      super(x,y,width,height);
      this.image = loadImage("box3.png");
      this.visibility = 255;
    }
  
    display() {
      if(this.body.speed<3){
        super.display();
       }
       else{
   
        World.remove(world,this.body)
      push();
      this.visibility = this.visibility -3
      tint(255,this.visibility)
      pop();
    }
    }
    score(){
      if(this.visiblity<0 &&  this.visiblity>-105){
        score++;
      }
        
       }
  }
  