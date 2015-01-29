/*
 * @name w3_06 "rule-based system"
 * @frame 500,500
 * @description This sketch draws a series of moving Elements (circles)
 * according to the following rules:
 * - start from a random position and move in a constant random direction
 * - if the point reaches the boundary of the screen move in the opposite
 *   direction with new velocity
 * - if the circles intersect then draw a line connecting their centres,
 *   colouring the line based on the circle being odd or even.
 * Modified and adapted to p5 code by Juan Sebastian Robles Jimenez.
 * October 13 2014.
 *
 * Based on:
 *
 * Creative Coding
 * Week 3, 06 - rule-based system
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
  // Position
  x,
  y,
  // Change per frame
  xInc,
  yInc,
  // Number of elements
  numArray,
  // If distance between elements < proximity then draw a line between them
  proximity;

function setup() {

  var i;

  createCanvas( 500, 500 );

  numArray = 15;

  // Allocate arrays
  x= new Array( numArray );
  y= new Array( numArray );
  xInc= new Array( numArray );
  yInc= new Array( numArray );

  // Influence distance
  proximity = 100;

  // Random starting position and direction
  for ( i = 0; i< numArray; i++ ) {

    x[i] = random( width );
    y[i] = random( height );
    xInc[i] = random( -1, 1 );
    yInc[i] = random( -1, 1 );
  }

  strokeWeight( 2 );
}

function draw() {

  var i,
    j,
    currDist;

  background( 255 );

  // Iterate over each point
  for ( i = 0; i < numArray; i++ ) {

    x[i] += xInc[i];
    y[i] += yInc[i];

    // Bounce off the sides of the window
    if ( x[i] > width || x[i] < 0 ) {

      xInc[i] = xInc[i] > 0 ? -random( 1 ) : random( 1 );
    }

    if ( y[i] > height || y[i] < 0 ) {

      yInc[i] = yInc[i] > 0 ? -random( 1 ) : random( 1 );
    }

    drawElement( x[i], y[i], xInc[i], yInc[i] );
  }

  for ( i = 0; i < numArray; i++ ) {

    for ( j = 0; j < i; j++ ) {

      currDist = dist( x[i], y[i], x[j], y[j] );
      if ( currDist < proximity ) {

        if ( i % 2 == 0 || j % 2==0 ) {

          stroke( 0, 0, 255, 20 );
        } else {

          stroke( 255, 0, 255, 20 );
        }

        line( x[i], y[i], x[j], y[j] );
      }
    }
  }
}

function drawElement( x, y, dx, dy ) {

  var endX,
    endY,
    arX,
    arY;

  // Draw the point in red
  noFill();
  stroke( 255, 0, 0 );
  point( x, y );

  // Draw an arrow in the current direction of travel
  stroke( 0, 100 );
  endX = x + ( dx * 20 );
  endY = y + ( dy * 20 );
  arX = x + ( dx * 15 );
  arY = y + ( dy * 15 );
  line( x, y, endX, endY );
  line( endX, endY, arX + (dy * 5), arY - (dx * 5) );
  line( endX, endY, arX - (dy * 5), arY + (dx * 5) );

  // Draw the boundary of proximity
  stroke( 0, 10 );
  ellipse( x, y, proximity, proximity );
}