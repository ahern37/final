
let mars
let saturn
let planets = [];

function setup() {
  createCanvas(2000, 1000);
    mars = new Planet(30, 20, 40);
    saturn = new Planet(60, 60, 75);
    for (var i = 0; i < 1000; i++) {
      let p = new Planet(random(width), random(10), random(50));
      planets.push(p);
    }
}

function draw() {
  background(0);
  fill(137, 173, 137);
  ellipse(width/2, height/2, 100, 100);
  for (var i = 0; i < planets.length; i++) {
    planets[i].move();
    planets[i].display();
  }
  mars.move();
  saturn.move();
  mars.display();
  saturn.display();
 

}


class Planet{

  constructor(radius, offset, size){
    this.radius = radius;
    this.x;
    this.y;
    this.clockwise = true;
    this.color = color(random(0), random(255), random(255));
    this.offset = offset;
    this.size = size; 
    this.movement = 0;
    this.speed = random(2);
  }
//current working on changing translate
  display(){
    push();
    translate(width/2, height/2);
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
    //print(movement);
    pop();
  }

  move(){
    if (this.movement == 359){
      this.clockwise = false;
    }
    if (this.movement == -1){
      this.clockwise = true;
    }
    if (this.clockwise){
        this.movement+= this.speed;
    }else{
        this.movement-= this.speed;  
      }
      this.y = sin(radians(this.movement + this.offset))* this.radius;
      this.x = cos(radians(this.movement + this.offset))* this.radius;

  }
}