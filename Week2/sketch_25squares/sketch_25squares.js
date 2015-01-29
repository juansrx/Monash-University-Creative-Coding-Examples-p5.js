/*
 * @name 25 Squares gone to party
 * @frame 600,600
 * @description 25 Squares went out to party, ¿do you dare to count them all?
 * 's' Saves the actual frame.
 * '+' Makes the squares go wilder.
 * Modified and adapted to p5 code by Juan Sebastian Robles Jimenez.
 * August 24 2014.
 *
 * Based on:
 *
 * "25 Square Party" by Juan Sebastian Robles Jimenez, licensed under Creative
 * Commons Attribution-Share Alike 3.0 and GNU GPL license.
 * Work: http://openprocessing.org/visuals/?visualID= 151664
 *
 * License: 
 * http://creativecommons.org/licenses/by-sa/3.0/
 * http://creativecommons.org/licenses/GPL/2.0/
 */

var nRect = 25,
  chaosFactor = 10;

function setup() {
  canvas = createCanvas( 600, 600 );
  rectMode( CENTER );
  frameRate( 1 );
}

function draw() {

  var g,
    i;

  background( 0 );
  g = width / nRect;

  for ( i = 0; i < nRect; ++i ) {
    stroke( random( 1, 255 ), random( 1, 255 ), random( 1, 255 ) );
    fill( random( 1, 255 ), random( 1, 255 ), random( 1, 255 ) );
    rect( (width / 2) + (random( -1, 1 ) * chaosFactor), (height / 2)
    + (random( -1, 1 ) * chaosFactor), width - g * i, height - g * i );    
  }

  if ( keyIsPressed == true && key== 's' ) {
    var dataURL = canvas.canvas.toDataURL( 'image/jpeg' );
    window.open( dataURL, "25squares", "width=" + width + ", height=" + height );
  }

  // Increase or decrease chaos factor
  if ( keyIsPressed == true && key == '+' ) {
    chaosFactor = min( chaosFactor + 10, width / 2 );
  }

  // Increase or decrease chaos factor
  if ( keyIsPressed == true && key == '-' ) {
    chaosFactor = min( chaosFactor - 10, 0 );
  }
}