export default class Furikake {

  ///////////////////////////
  /// constructor
  ////////////////////////////
  constructor(x,degree,img){
    var radian = degree * (Math.PI / 180);
    var radius = Math.floor(Math.random() * 10) + 5;
    this.radius = radius;
    this.degree = degree;
    this.radian = radian;
    this.x = x;
    this.y = (-(Math.floor(Math.random() * 300)) - 70);
    this.dir = Math.floor(Math.random() * 3);
    this.speedX = ((Math.random() * 5) + 1) / 200;
    this.speedY = (Math.floor(Math.random() * 8) + 2) / 10;
    this.range = Math.floor(Math.random() * 10) + 2;
    this.img = img;
  }

}