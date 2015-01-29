/*
 * @name w2_03 "n squares"
 * @frame 600,600
 * @description In the next iteration of the square drawing sketch, this
 * version selects a random number of squares and a random gap between them.
 * From this it calculates the width of each square then draws the squares
 * using two nested for loops.
 *
 * A simple drop shadow is also drawn to give the illusion of depth.Modified
 * and adapted to p5 code by Juan Sebastian Robles Jimenez. August 24 2014.
 *
 * Based on:
 *
 * Creative Coding
 * Week 2, 03 - n squares
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
  rectMode( CORNER );
  noStroke();

  // Set the frame rate to 1 draw() call per second
  frameRate( 1 );
}

function draw() {

  var num,
    gap,
    cellsize,
    offsetX,
    offsetY,
    i,
    j;

  // Clear the screen to grey
  background( 180 );

  // Select a random number of squares each frame
  num = random( 3, 12 ) | 0;

  // Select a random gap between each square
  gap = random( 5, 50 ) | 0;

  // Calculate the size of each square for the given number of squares and gap
  // between them
  cellsize = ( width - (num + 1) * gap ) / num;

  // Print out the size of each square
  print("cellsize = " + cellsize);

  // Calculate shadow offset
  offsetX = cellsize / 16.0;
  offsetY = cellsize / 16.0;

  for ( i = 0; i < num; i++ ) {
    for ( j = 0; j < num; j++ ) {
      // Shadow
      fill( 140, 180 );
      rect( gap * ( i + 1 ) + cellsize * i + offsetX, gap * ( j + 1 )
      + cellsize * j + offsetY, cellsize, cellsize );

      // Rectangle
      fill( 247, 57, 57, 180 );
      rect(gap * ( i + 1 ) + cellsize * i, gap * ( j + 1 ) + cellsize * j,
      cellsize, cellsize);
    }
  }
}