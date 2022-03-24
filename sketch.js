
let mars
let saturn
let galaxies = []

function setup() {
  createCanvas(2000, 1000,);
  colorMode(HSB, 282, 87, 54, 1);
 }

function draw() {
  background(0);
  fill(140, 11, 132);
  ellipse(width/2, height/2, 100, 100);
  for (var i = 0; i < galaxies.length; i++) {
    galaxies[i].display();
  }
 

}
function mouseClicked(){
  galaxies.push(new Galaxy(mouseX, mouseY));




}

class Planet{

  constructor(radius, offset, size, hue){
    this.radius = radius;
    this.x;
    this.y;
    this.clockwise = true;
    this.hue = hue;
    this.color = color(random(200)+hue, 73, 100);
    this.offset = offset;
    this.size = size; 
    this.movement = 0;
    this.speed = random(2);
  }

  display(x, y){
    push();
    translate(x, y);
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
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

class Galaxy{

  constructor(x, y){
    this.x = x;
    this.y = y;
    this.hue = random(282);
    this.planets = [];
    for (var i = 0; i < 100; i++) {
      let p = new Planet(random(width), random(5), random(25), this.hue);
      this.planets.push(p);

    }
  }

  display(){
    for (var i = 0; i < this.planets.length; i++) {
      this.planets[i].move();
      this.planets[i].display(this.x, this.y);
  }

  }





}