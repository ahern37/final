
let mars
let saturn
//let planets = [];
let galaxies = []

function setup() {
  createCanvas(2000, 1000);
  colorMode(HSB, 360, 100, 100, 1);
    //mars = new Planet(30, 20, 40);
    //saturn = new Planet(60, 60, 75);
    // for (var i = 0; i < 1000; i++) {
    //   let p = new Planet(random(width), random(10), random(50));
    //   planets.push(p);
    // }
}

function draw() {
  background(0);
  fill(137, 173, 137);
  ellipse(width/2, height/2, 100, 100);
  // for (var i = 0; i < planets.length; i++) {
  //   planets[i].move();
  //   planets[i].display();
  // }
  // mars.move();
  // saturn.move();
  // mars.display();
  // saturn.display();
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
//x,y from galaxy
  display(x, y){
    push();
    translate(x, y);
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

class Galaxy{

  constructor(x, y){
    this.x = x;
    this.y = y;
    this.hue = random(159);
    this.planets = [];
    for (var i = 0; i < 150; i++) {
      let p = new Planet(random(width), random(10), random(50), this.hue);
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