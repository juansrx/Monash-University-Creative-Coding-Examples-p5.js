/*
 * @name w2_02 "Nine Squares, part 2"
 * @frame 600,600
 * @description This program draws 3 rows of 3 squares in the display window
 * Each row is coloured red, green, and blue. In this example the 9 squares are
 * drawn using two different methods involving for loops. Change the value of
 * the variable "caseNum" from 1 to 2 to swap methods. The first method
 * (caseNum == 1) uses 3 for loops to draw each row. The second method 
 * (caseNum == 2) uses 2 nested for loops to draw rows and columns. The 
 * on-screen results are the same, but the execution flow is different. Notice
 * that in the nested loop case, only one call to rect is made, but it is
 * called 9 times. Modified and adapted to p5 code by Juan Sebastian Robles
 * Jimenez. August 23 2014.
 *
 * Based on:
 *
 * Creative Coding
 * Week 2, 02 - Nine Squares, part 2
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

// variables: number of rows/cols, and method of looping to use
var num = 3,
  caseNum;

function setup() {

  canvas = createCanvas( 600, 600 );
  background( 180 );

  // only execute the draw function once
  noLoop();
  rectMode( CENTER );
  noStroke();

  // change the value of caseNum from 1 to 2 to execute different parts of the code
  caseNum = 2;
}

function draw() {

  var i;

  // the first case: 3 for loops, 1 for each row
  if ( caseNum == 1 ) {

    // row 1
    fill( 255, 0, 0 );
    for ( i = 0; i < num; i++ ) {
      rect( 150 + 150 * i, 150, 100, 100 );
    }

    // row 2
    fill( 0, 255, 0 );
    for ( i = 0; i < num; i++ ) {
      rect( 150 + 150 * i, 300, 100, 100 );
    }

    // row 3
    fill( 0, 0, 255 );
    for ( i = 0; i < num; i++ ) {
      rect( 150 + 150 * i, 450, 100, 100 );
    }
  } else if ( caseNum == 2 ) {
    // second case: nested for loops

    // col
    for ( i = 0; i < num; i++ ) {

      // row
      for ( j = 0; j < num; j++ ) {

        // select the fill colour based on row
        switch( j ) {
          case 0:
            fill( 255, 0, 0 );
            break;
          case 1:
            fill( 0, 255, 0 );
            break;
          case 2:
            fill( 0, 0, 255 );
            break;
        }

        // draw the rectangle
        rect( 150 + 150 * i, 150 + 150 * j, 100, 100 );
      // end for (j)
      }
    // end for (i)
    }
  // end if
  }
}