/*
 * declaration of the class "Ball"
 * Which represents the concept of a moving ball with a direction, speed and rate
 * of change in direction. It's implemented here as a constructor function
 * defining a set of variables as attributes and adding methods to its prototype
 * as methods.
 */
 
// the constructoris called when a new Ball is created, generally, constructors
// don't return any value
var Ball = function ( x_, y_, size_ ) {

  // store supplied values in the instance variables, you must use keyword "this"
  // to refer to the current object so you can access its properties.
  this.x = x_;
  this.y = y_;
  this.size = size_;

  // set speed and directions to 0
  this.speed = 0;
  this.direction = 0;
  this.omega = 0;
}

// randomiseDirection
// randomise the speed and direction of the ball, to define a method, create a
// propery in the prototype object of your class and assign a function definition
// to it.
Ball.prototype.randomiseDirection = function () {

  this.speed = random( 1 );
  this.direction = random( 360 );
  this.omega = randomGaussian() * 0.3;
}

// move method
// moves the ball in the current direction
Ball.prototype.move = function () {

  var dx,
    dy; 

  /*
   * direction is an angle that represents the current
   * direction of travel.
   * speed is the current speed in units/frame
   */

  dx = cos( radians( this.direction ) ) * this.speed;
  dy = sin( radians( this. direction) ) * this.speed;
  this.x += dx;
  this.y += dy;
  this.direction += this.omega;
  
  // you use this to call a method inside your class too
  this.checkBounds();
}

// checkBounds
// checks that the ball is within the display window.
// If it reaches the edge, move in the opposite direction
Ball.prototype.checkBounds = function () {

  if ( this.x <= 0 || this.x >= width || this.y <= 0 || this.y >= height ) {
    this.direction += 180;
    this.direction = this.direction % 360;
  }
}

// display method
// draws the ball as a transparent circle with a red point at the centre
Ball.prototype.display = function () {

  noStroke();
  fill( 200, 100 );
  ellipse( this.x, this.y, this.size, this.size );
  stroke( 255, 0, 0 );
  point( this.x, this.y );
}