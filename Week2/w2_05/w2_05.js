/*
 * @name w2_05 "Moving Patterns 1"
 * @frame 500,500
 * @description This sketch builds on the previous sketches, drawing shapes
 * based on the current framerate. The movement of individual shapes combine to
 * create a gestalt field of motion. Use the arrow keys on your keyboard to
 * change the frame rate. Modified and adapted to p5 code by Juan Sebastian
 * Robles Jimenez. August 30 2014.
 *
 * Based on:
 *
 * Creative Coding
 * Week 2, 05 - Moving Patterns 1
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

var frame_rate_value;

function setup() {
  canvas = createCanvas( 500, 500 );
  frame_rate_value = 60;
  frameRate( frame_rate_value );
  rectMode( CENTER );
  background( 255 );
}

function draw() {

  background( 255 );

  var i,
    j,
    num = 10,
    margin = 0,
    gutter = 0, //distance between each cell
    cellsize = ( width - (2 * margin) - gutter * (num - 1) ) / (num - 1),
    circleNumber = 0; // counter

  for ( i = 0; i < num; i++ ) {
    for ( j=0; j < num; j++ ) {

      // different way to calculate the circle number from w2_04
      circleNumber = (i * num) + j;

      var tx = margin + cellsize * i + gutter * i,
        ty = margin + cellsize * j + gutter * j;

      movingCircle( tx, ty, cellsize, circleNumber );
    }
  }
}

function movingCircle( x, y, size, circleNum ) {

  // the rotating angle for each tempX and tempY postion is affected by
  // frameRate and angle
  var finalAngle = frameCount + circleNum / 4,
    tempX = x + (size / 2) * sin(PI / frame_rate_value * finalAngle),
    tempY = y + (size / 2) * cos(PI / frame_rate_value * finalAngle);

  strokeWeight( circleNum / 4 );
  fill( circleNum / random( 1, 4 ), tempY / random( 1, 4 ), tempX / random( 1, 4 ) );
  point( tempY, tempX );
  strokeWeight( 1 );

  noStroke();
  fill( tempX / random( 1, 4 ), tempY / random( 1, 4 ), circleNum / random( 1, 4 ) );
  rect( tempX, tempY, size / 5, size / 5 );
  rect( tempX, tempY, 1, size * 5 );
  stroke( tempY / random( 1, 4 ), tempX / random( 1, 4 ), circleNum / random( 1, 4 ) );
  noFill();
  stroke( circleNum / random( 1, 4 ), tempX / random( 1, 4 ), tempY / random( 1, 4 ) );
  ellipse( x, y, tempX, tempY );
}

/*
 * keyReleased function
 *
 * called automatically by Processing when a keyboard key is released
 */
function keyReleased() {

  // right arrow -- increase frame_rate_value
  if (keyCode == RIGHT && frame_rate_value < 60) {
    frame_rate_value++;
  }

  // left arrow -- decrease frame_rate_value
  if ( keyCode == LEFT && frame_rate_value > 1) {
    frame_rate_value--;
  }

  // set the frameRate and print current value on the screen
  frameRate( frame_rate_value );
  print( "Current frame Rate is: " + frame_rate_value );
}