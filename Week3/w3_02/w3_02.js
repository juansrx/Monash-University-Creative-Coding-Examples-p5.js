/*
 * @name w3_02 "array with sin()"
 * @frame 500,500
 * @description This program demonstrates the use of arrays.
 * It creates three arrays that store the y-position, speed and phase of some
 * oscillating circles. You can change the number of circles by changing the
 * value of num in setup(). You can change the background colour by holding
 * the left mouse button and dragging. Modified and adapted to p5 code by Juan
 * Sebastian Robles Jimenez. October 12 2014.
 *
 * Based on:
 *
 * Creative Coding
 * Week 3, 02 - array with sin()
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
  // y-position of each circle (fixed)
  y,
  // Speed of each circle
  speed,
  // Phase of each circle
  phase,
  // Color components
  red = 120,
  green = 120,
  blue = 120;

function setup() {

  canvas = createCanvas( 500, 500 );
  num = 5;

  // Allocate space for each array
  y = new Array(num);
  speed = new Array(num);
  phase = new Array(num);

  // Calculate the gap in y based on the number of circles
  gap = height / ( num + 1 );

  //Setup an initial value for each item in the array
  for ( var i = 0; i < num; i++ ) {

    // Y is constant for each so can be calculated once
    y[i] = gap * ( i + 1 );
    speed[i] = random( 10 );
    phase[i] = random( TWO_PI );
  }
}

function draw() {

  background( red, green, blue );

  for ( var i = 0; i < num; i++ ) {

    // Calculate the x-position of each ball based on the speed, phase and
    // current frame
    x = width / 2 + sin( radians( frameCount * speed[i] ) + phase[i] ) * 200;
    ellipse( x, y[i], 20, 20 );
  }
}

// Change the background colour if the mouse is dragged
function mouseDragged() {

  red = map( mouseX, 0, width, 0, 255 );
  green = map( mouseY, 0, height, 0, 255 );
  blue = map( mouseX + mouseY, 0, width + height, 255, 0 );
}
