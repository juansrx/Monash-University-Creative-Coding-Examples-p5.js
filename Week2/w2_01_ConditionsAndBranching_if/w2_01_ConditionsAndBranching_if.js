/*
 * @name w2_01_ConditionsAndBranching_if
 * @frame 500,300
 * @description This program illustrates the use of the if statement.
 * The general form is:
 *
 * if (condition) {
 *   execute the code between the { and }
 *   if the condition is true
 * } else {
 *   executre the code
 *   in here
 * }
 *
 * The else { ... } component is optional.
 * Modified and adapted to p5 code by Juan Sebastian Robles Jimenez. August 31
 * 2014.
 *
 * Based on:
 *
 * Creative Coding
 * Week 2, Foldout 02: Conditionals: if statement
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
  canvas = createCanvas( 500, 300 );
}

function draw() {

  background( 0 );
  stroke(255); 

  var i;
  for ( i = 0; i < width; i+=4 ) {
    if ( i % 3 == 0 ) {
      // this section of code is executed if the remainder of
      // dividing i by 3 equals 0
      line( i, 0, i, 100 );
    } else if ( i % 3 == 1 ) {
      // this section is executed if i%3 == 1
      line( i, 100, i, 200 );
    } else if ( i % 3 == 2 ) {
      // thes section if i%3 == 2
      // you can have as many lines of code as you like
      // between the opening and closing { }
      // You can even have other if statements!
      line( i, 200, i, 300 );
    // end if
    }
  // end for
  }
// end draw
}