class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255; //full green color of pig > max value to show the object > (RGB color)
  }
  

  display() {
    if(this.body.speed < 3) {
      super.display()
    }
    else {
      World.remove(world, this.body);
      push ();
      this.visibility -= 5;
      tint(255,this.visibility)
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      //want to pig to stay at the same location so we do this.body.positonx/y not 0,0
// predefined method to remove obejct
pop();
    }
  }

};