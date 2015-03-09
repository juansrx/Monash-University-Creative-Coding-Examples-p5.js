/*
 * @name w4_01 "an interactive colour wheel picker"
 * @frame 600,600
 * @description This program draws an interactive colour selection wheel. Drag
 * the colour circle around the hue wheel to change hue, change the distance
 * from the wheel to control brightness.
 *
 * Another colour circle is displayed showing the colour 180 degrees from the
 * current colour Modified and adapted to p5 code by Juan Sebastian Robles
 * Jimenez. October 25 2014.
 *
 * Based on:
 *
 * Creative Coding
 * Week 4, 01 - an interactive colour wheel picker
 * by Indae Hwang and Jon McCormack
 * Copyright (c) 2014 Monash University
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the Free
 * Software Foundation; either version 3 of the License, or (at your option)
 * any later version.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License
 * for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, see <http://www.gnu.org/licenses>.
 */

// Color Squares
var currCol,
  currComp,
  nSquares = 10,
  currSquare = 0;

// colourHandle: the user interface element to changing colours over the wheel
// it has a postion and a size
var colorHandleX,
  colorHandleY,
  handleSize = 30;

// boolean isLocked
// the state of handle: when the color handle is pressed, 
// color hand is locked–released as the left mouse button is released 
var isLocked = false;

// Wheel radius: inner and outer
// inner
var innerR = 100,
  // outer
  outerR = 200,
  // limit of the handle's "pull" range
  outerR2 = outerR * 1.5;

// current and complementry colour
var hueValue = 90,
  brightValue = 100,
  complementryHue = 0,
  sat = 100;

function setup() {

  createCanvas(600, 600);

  // use HSB colour mode, H=0->360, S=0->100, B=0->100
  colorMode(HSB, 360, 100, 100);

  colorHandleX = ( width / 2 ) + 300;
  colorHandleY = height / 2;
  currCol = new Array( floor( width / nSquares ) );
  currComp = new Array( floor( width / nSquares ) );
}


function draw() {

  var i,
    angle,
	angleComHand,
	radiusComeHand,
	comHandX,
	comHandY;

  //Since were using HSB colour mode this clears the display window to white
  //         H  S  B
  background( 0, 0, 100 );

  // draw reference line at the 0/360 hue boundary
  stroke( 0, 40 );
  line( (width / 2) - innerR, height / 2, (width / 2) - outerR2, height / 2 );

  // draw itten's color wheel - we'll use a QUAD_STRIP for this
  noStroke();
  for ( i = 0; i <= 10; i++ ) {
    
	// 10 x 36 degree steps
	fill( 36 * i, 100, 100 );
	beginShape();
	
    var angle = radians( 36 * i - 90 );
	var angle2 = radians( 36 * (i + 1) - 90 );
    
	vertex( width / 2 + innerR * sin(angle), height /2 + innerR * cos(angle) );
	vertex( width / 2 + outerR * sin(angle), height /2 + outerR * cos(angle) );
	vertex( width/2 + outerR*sin(angle2), height/2 + outerR*cos(angle2) );
    vertex( width/2 + innerR*sin(angle2), height/2 + innerR*cos(angle2) );
	
	endShape(CLOSE);	
  }

  // colour handle Position Update
  colorHandleUpdate();

  // draw dotted line from center to colorhandle
  dotLine( width / 2, height / 2, colorHandleX, colorHandleY, 40 );

  // draw color handle
  noStroke();
  fill( 0 );
  ellipse( width / 2, height / 2, 10, 10 );

  //    H         S    B
  fill( hueValue, sat, brightValue );
  ellipse( colorHandleX, colorHandleY, handleSize, handleSize );

  // complementry color for colorHandle (comHand)
  angleComHand = map( atan2( colorHandleX - width / 2, colorHandleY -
    height / 2), -PI, PI, TWO_PI, 0 ) + HALF_PI;
  radiusComeHand = 150;
  comHandX = width / 2  + radiusComeHand * cos( angleComHand );
  comHandY = height / 2 + radiusComeHand * sin( angleComHand );

  // dotline from center to comHand
  dotLine( width / 2, height / 2, comHandX, comHandY, 20 ); 

  complementryHue = calculateCompHue( hueValue );

  currCol[currSquare] = color( hueValue, sat, brightValue );
  currComp[currSquare] = color( complementryHue, sat, brightValue );

  noStroke();
  for ( i = 0; i < currSquare; ++i ) {

    fill( currCol[i] );
    rect( i * floor( width / nSquares ), height - floor( height / nSquares ),
	  floor( width / nSquares ), floor( height / nSquares ) );
    fill( currComp[i] );
    rect( i * floor( width / nSquares ) + 10, ( height + 10 ) -
	  floor( height / nSquares ), floor( width / nSquares ) - 20,
	  floor( height / nSquares ) - 20 );
  }

  fill( hueValue, sat, brightValue );
  rect( i * floor( width / nSquares ), height - floor( height / nSquares ),
    floor( width / nSquares ), floor( height / nSquares ) );
  fill( complementryHue, sat, brightValue );
  rect( (i * floor( width / nSquares )) + 10, (height + 10) -
    floor( height / nSquares ), floor( width / nSquares ) - 20,
	floor( height / nSquares ) - 20 );
  ellipse( comHandX, comHandY, 40, 40 );
}

/*
 * calculateCompHue
 *
 * Calculates the complimentary hue from the hue supplied
 */
function calculateCompHue( hueValue ) {

  // Calculate complimentary color with hueValue
  // The complimentary colour should be 180 degrees opposite the selected colour
  if ( hueValue >= 180 && hueValue < 360 ) {
    return hueValue - 180;
  } else {
    return hueValue + 180;
  }
}


/*
 * colorHandleUpdate
 *
 * Updates the position and orientation of the colour handle based on
 * mouse position when left mouse button is pressed.
 */
function colorHandleUpdate() {

  var angle,
    distance,
	radius;

  // isLocked will be true if we pressed the mouse down while over the handle
  if ( isLocked ) {

    // calculate angle of handle based on mouse position
    // atan2 value is in the range from pi to -pi
    angle = atan2( mouseY - height / 2, mouseX - width / 2 );
    distance = dist( mouseX, mouseY, width / 2, height / 2 );
    radius = constrain( distance, outerR, outerR2 );
    colorHandleX = (width / 2)  + radius * cos( angle );
    colorHandleY = (height / 2) + radius * sin( angle );

    hueValue = map ( degrees( angle ), -180, 180, 360, 0 );

    // map distance from outer edge of the wheel to brightness
    brightValue = map( radius, outerR, outerR2, 0, 100 );

    // Shape for the locked colorHandle
    noStroke(); 
    fill( 0, 0, 85 );
    ellipse( colorHandleX, colorHandleY, handleSize + 20, handleSize + 20 );
  }
}


/*
 * isWithinCircle
 * boolean function that returns true if the mouse is within the circle with
 * centre (x,y) radius r
 */
function isWithinCircle( x, y, r ) {

  return dist( mouseX, mouseY, x, y ) <= r;
}

/*
 * dotLine
 * draw a dotted line from (x1,y1) to (x2,y2)
 */
function dotLine( x1, y1, x2, y2, dotDetail ) {

  var i,
    dotDetailFloat,
    dotX,
	dotY;

  for ( i = 0; i <= dotDetail; i++ ) {
    dotDetailFloat = dotDetail * 1.0;
    dotX = lerp( x1, x2, i / dotDetailFloat );
    dotY = lerp( y1, y2, i / dotDetailFloat );
    strokeWeight( 2 );
    stroke( 0, 0, 40 );
    point( dotX, dotY );
  }
}

/*
 * mousePressed
 * When mouse button is first pressed, check if the user has pressed over the
 * colour handle. If so, set isLocked to true to lock manipulation of the
 * handle.
 *
 */
function mousePressed() {

  if ( isWithinCircle( colorHandleX, colorHandleY, handleSize ) ) {
    isLocked = true;
  }
}

/*
 * mouseReleased
 * Unlock control of the handle
 *
 */
function mouseReleased() {

  if ( isLocked ) {
    isLocked = false;
    currSquare = (currSquare + 1) % nSquares;
  }
}

/**
 * To change saturation. Originally, this was the keyPressed function.
 */
function keyTyped() {

  if ( key == '+' ) {
    sat = constrain( sat += 1, 0, 100 );
  }

  if ( key == '-' ) {
    sat = constrain( sat -= 1, 0, 100 );
  }
}