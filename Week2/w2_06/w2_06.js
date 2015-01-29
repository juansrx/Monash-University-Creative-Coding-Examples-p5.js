/*
 * @name w2_06 "Moving Patterns 2"
 * @description Similar to the previous sketch, this sketch draws a grid of
 * oscillating circles. Each circle has a "lifetime" over which it grows and
 * changes intensity and opacity. At the end of each lifetime the circle begins
 * again. Pressing the left and right arrow keys changes the lifetime of all
 * the circles globally. Modified and adapted to p5 code by Juan Sebastian
 * Robles Jimenez. August 31 2014.
 *
 * Based on:
 *
 * Creative Coding
 * Week 2, 06 - Moving Patterns 2
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

// variable used to store the current frame rate value
var frame_rate_value;

function setup() {

  // make the display window the full size of the screen
  canvas = createCanvas( displayWidth, displayHeight );
  frame_rate_value = 12;
  frameRate( frame_rate_value );
  rectMode( CENTER );
  background( 0 );
}

function draw() {

  background( 0 );

  var i,
    j,
    num = 20,
    margin = 0,
    gutter = 0, //distance between each cell
    cellsize = ( width - (2 * margin) - gutter * (num - 1) ) / (num - 1),
    circleNumber = 0; // counter

  for ( i = 0; i < num; i++ ) {
    for ( j = 0; j < num; j++ ) {

      // different way to calculate the circle number from w2_04
      circleNumber = (i * num) + j;

      var tx = margin + cellsize * i + gutter * i,
        ty = margin + cellsize * j + gutter * j;

      movingCircle( tx, ty, cellsize, circleNumber );
    }
  }
}

function movingCircle( x, y, size, offset ) {

  var circlePeriod = frame_rate_value * 1.0,
    circleAge = ( ( frameCount + offset ) % Math.floor( circlePeriod ) ) /
      circlePeriod,
    circleSize = size * 2.0 * sin( circleAge * HALF_PI );

  strokeWeight( 2 );
  stroke( 255, lerp( 255, 0, circleAge ) );
  fill( lerp( 128, 0, circleAge ), lerp( 120, 0, circleAge ) );
  ellipse( x - size / 2, y - size / 2, circleSize, circleSize );
}

/**
 * Called by p5 when a mouse button is clicked
 */
function mouseClicked() {

  // click on right side, increase frame rate
  if ( ( mouseX > ( width / 2 ) ) && frame_rate_value < 120 ) {
    frame_rate_value++;
  }

  // click on left side, decrease frame rate
  if ( ( mouseX < (width / 2) ) && frame_rate_value > 2 ) {
    frame_rate_value--;
  }

  // print the current value on the screen
  print( "Current frame Rate is: " + frame_rate_value );
}