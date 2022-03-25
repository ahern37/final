
// let mars
// let saturn
//EXP CODE
// const cols = ['#fff2d8', '#fccdd3', '#fca2cf', '#d8f4f6', '#ade1eb'];
// let curr_col = cols[0];
//EXP CODE

let galaxies = []

function setup() {
  createCanvas(2000, 1000,);
  //EXP CODE
  // background(curr_col);
    //PASTED FROM DRAW
  // ellipse(width/2, height/2, 100, 100);
  // for (var i = 0; i < galaxies.length; i++) {
  //   galaxies[i].display();
    //PASTED FROM DRAW
  //}
//   function keyPressed(e) {
//   // console.log(e.keyCode);

//   switch (e.keyCode) {
//     case 87:
//       curr_col = cols[1];
//       break;

//     case 65:
//       curr_col = cols[2];
//       break;

//     case 83:
//     case 32:
//       curr_col = cols[3];
//       break;

//     case 68:
//       curr_col = cols[4];
//       break;

//       // default:
//       //   curr_col = cols[0];
//       //   break;
//       //EXP CODE
//   }
// }
  colorMode(HSB, 282, 87, 54, 1);
 }

function draw() {
  background(0);
  // EXP CODE
  //background(curr_col);
//} //EXP CODE
  //FILL(140, 11, 132);
    // MOVED TO SETUP
  ellipse(width/2, height/2, 100, 100);
  for (var i = 0; i < galaxies.length; i++) {
    galaxies[i].display();
  // }
    //MOVED TO SETUP
//INSERTING EXP CODE
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