/*
 * @name w2_02_ConditionsAndBranching_switch
 * @frame 500,300
 * @description This program illustrates the use of the switch statement.
 * Notice that it is functionally equivelent to the cascade of if...else if ...
 * statements from the previous example.
 *
 * The general form is:
 * switch (condition) {
 *   case X:
 *      execute the code below the case if "condition == X"
 *      keep executing until you encounter a "break"
 *   break;
 *   case Y:
 *      execute the code below the case if "condition == Y"
 *   break;
 *   case Z:
 *      execute the code below the case if "condition == Z"
 *      if you forget the break statement, the code keeps executing
 *      to the end of the switch statement or unitl a break is encountered.
 *   break;
 *   default:
 *      place a "default" at the bottom of your case statement to catch
 *      any values of condition that were not matched by any previous case.
 * }
 *
 * Modified and adapted to p5 code by Juan Sebastian Robles Jimenez. August 31
 * 2014.
 *
 * Based on:
 *
 * Creative Coding
 * Week 2, Foldout 02: Conditionals: switch statement
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
  stroke( 255 );

  var i,
    style;

  // loop that increments i from 0 to width by 4
  for ( i = 0; i < width; i+=4 ) {

    // the remainder when i is divided by 3
    style = i % 3;
    switch( style ) {
      case 0:
        line( i, 0, i, 100 );
        break;
      case 1:
        line( i, 100, i, 200 );
        break;
      case 2:
        line( i, 200, i, 300 );
        break;
    // end switch
    }
  // end for
  }
// end draw
}