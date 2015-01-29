/*
 * @name w3_03 "using sin(), cos(), dist() to make a dynamic pattern"
 * @description This program allows you to change background color. Press and
 * hold the left mouse button to change color. experiment with changing the
 * value of num and distanceMargin in setup. Modified and adapted to p5 code by
 * Juan Sebastian Robles Jimenez. October 12 2014.
 *
 * Based on:
 *
 * Creative Coding
 * Week 3, 03 - using sin(), cos(), dist() to make a dynamic pattern
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

var
  // The number of items in the array (# of circles)
  num,
  // x-position of point
  x,
  // y-position
  y,
  // Speed of each circle
  speed,
  // Phase of each circle
  phase,
  // Color components
  distanceMargin,
  rowHeight,
  red,
  green,
  blue;

function setup() {

  canvas = createCanvas( displayWidth, displayHeight );

  // Change each value below for different visual
  num = 5;
  distanceMargin = 20;

  // Height of each row
  rowHeight = height / ( num - 1 );

  // Allocate space for each array
  x = new Array(num);
  y = new Array(num);
  speed = new Array(num);
  phase = new Array(num);

  // Setup an initial value for each item in the array
  for ( var i = 0; i < num; i++ ) {

    x[i] = width / 2;
    y[i] = rowHeight * i;

    // Returns a random float bewteen 0 and 1
    speed[i] = random( 1 );
    phase[i] = random( TWO_PI );
  }

  red = 0;
  blue = 0;
  green = 0;
}

function draw() {

  var i,
    nRadians,
    distance;

  // Don't clear the screen each frame by calling background()
  // background(128);
  
  fill( 255 );

  for ( i = 0; i < num; i++ ) {

    nRadians = radians( frameCount * speed[i] );

     // Odd
    if ( i % 2 == 1 ) {

      x[i] = width / 2 + sin( nRadians + phase[i] ) * width / 2;
    } else {

      // Even
      x[i] = width / 2 + cos( nRadians + phase[i] ) * width / 2;
    }

    if ( i < num - 1 ) {

      distance = dist( x[i], y[i], x[i + 1], y[i + 1] );
      if ( distance > rowHeight && distance < rowHeight + distanceMargin ) {

        stroke( 0, 20 );
        line( x[i], y[i], x[i + 1], y[i + 1] );

        // Stroke(255);
        point( x[i], y[i] );
        point( x[i + 1], y[i + 1] );
      }
    }
  }

  if ( mouseIsPressed ) {

    red = map( mouseX, 0, width, 0, 255 );
    green = map( mouseY, 0, height, 0, 255 );
    blue = map( mouseX + mouseY, 0, width + height, 255, 0 );

    fill( red, green, blue, 10 );
    noStroke();
    rect( 0, 0, width, height );
  }
}
