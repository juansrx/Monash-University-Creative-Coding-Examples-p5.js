/*
 * @name w2_04 "The Clocks"
 * @frame 600,600
 * @description This program draws a grid of circular "clocks", whose hands
 * move according to the elasped time. The higher the clock number the faster
 * it moves, the first clock takes 1 min to go all the way around. The function
 * "movingCircle" is used to draw each clock. It is passed the position, size
 * and hand angle as arguments. Modified and adapted to p5 code by Juan
 * Sebastian Robles Jimenez. August 30 2014.
 *
 * Based on:
 *
 * Creative Coding
 * Week 2, 04 - The Clocks
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

function setup() {
  canvas = createCanvas( 600, 600 );
  background( 180 );
  rectMode( CENTER );
  noStroke();
}

function draw() {

  background( 180 );
  noStroke();

  var i,
    j,
    num = 5,
    margin = 180,
    gutter = 0, // distance between each cell
    cellSize = ( width - (2 * margin) - gutter * (num - 1) ) / (num - 1),
    circleNumber = 0;

  for (i = 0; i < num; i++ ) {
    for ( j = 0; j < num; j++ ) {
      ++circleNumber;

      var tx = margin + cellSize * i + gutter * i,
        ty = margin + cellSize * j + gutter * j;

      if ( circleNumber % 2 != 1 ) {
        movingCircle2( tx, ty, cellSize, circleNumber * TWO_PI * millis() / 60000.0 );
      } else {
        movingCircle( tx, ty, cellSize, circleNumber * TWO_PI * millis() / 60000.0 );
      }
    }
  }
}

function movingCircle( x, y, size, angle ) {

  // calculate endpoint of the line
  var tempX = x + (size / 2) * sin( angle ),
    tempY = y + (size / 2) * cos( angle );

  stroke( 0 );
  strokeWeight( 1 );
  fill( 140, 180 );

   // circle
  ellipse( x, y, size, size );

  stroke( 255, 0, 0 );

  // red line
  line( x, y, tempX, tempY );
}

function movingCircle2( x, y, size, angle ) {

  // calculate endpoint of the line
  var tempX = x + (size / 2) * sin( angle ),
    tempY = y + (size / 2) * cos( angle );

  stroke( 0 );
  strokeWeight( 1 );
  fill( 140, 180 );

  // circle
  rect( x, y, size, size );

  stroke( 255, 0, 0 );

  // red line  
  line( x, y, tempX, tempY );
}