class Box1 extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      //this.image = loadImage("sprites/rectblue.png");
      this.Visibility = 255;
    }
    display(){
        //var angle = this.body.angle;
        //push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        
          //console.log(this.body.speed);
          if(this.body.speed < 3){
            rectMode(CENTER);
            fill(45, 140, 255);
            rect(this.body.position.x, this.body.position.y, this.width, this.height);
            //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        
          }
          else{
            World.remove(world, this.body);
            push();
            this.Visibility = this.Visibility - 5;
            tint(255, this.Visibility);
            //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            
            pop();
          }
          
        
        //pop();
      }
      score(){
        if (this.Visibility < 0 && this.Visibility > -105){
          score++;
        }
      }
  };
  