/*
 * @name w6_01 "Recursive funtions"
 * @frame 800,800
 * @description This sketch demonstrates a recursive function to draw circles
 * within circles. Modified and adapted to p5 code by Juan Sebastian Robles
 * Jimenez. March 22 2015.
 *
 * Based on:
 *
 * Creative Coding
 * Week 6, 01 - Recursive funtions
 * by Jon McCormack
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

// size ratio of circles
var ratio = 3,
  // number of circles inside each circle
  division = 6;

function setup() {

  createCanvas( 800, 800 );
  noStroke();;
}

function draw() {

  // move to the middle of the screen
  translate( width / 2, height / 2 );

  // draw the recursive circle
  drawCircle( height / 2, 5 );
}

/*
 * drawCircle
 * recursive function that draws a circle
 * then draws 'division' circles inside that circle
 *
 */
function drawCircle( radius, level ) {

  var tt = 126 * level / 4.0,
    i,
	mult;

  fill( tt );

  // draw the circle
  ellipse( 0, 0, radius * 2, radius * 2 );
  if ( level > 1 ) {
    level = level - 1;

    // draw the inner circles
    for ( i = 0; i < division; ++i ) {  
      push();
      mult = (level % 2 == 1) ? -1 : 1;
      rotate( mult * frameCount / (20.0 * level) + TWO_PI / division * i );
      translate( radius - radius / ratio, 0 );
      drawCircle( radius / ratio, level );
      pop();
    }
  }
}