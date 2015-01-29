/*
 * @name w3_04 "spinning top: curved motion with sin() and cos()"
 * @frame 500,500
 * @description This sketch is the first cut at translating the motion of a
 * spinning top to trace a drawing path. This sketch traces a path using sin()
 * and cos() Modified and adapted to p5 code by Juan Sebastian Robles Jimenez.
 * October 12 2014.
 *
 * Based on:
 *
 * Creative Coding
 * Week 3, 04 - spinning top: curved motion with sin() and cos()
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
  // Current drawing position
  x,
  y,
  // Change in position at each frame
  dx,
  dy,
  // Radius for the moving hand
  rad;

function setup() {

  canvas = createCanvas( 500, 500 );

  // Initial position in the centre of the screen
  x = width / 2;
  y = height / 2;

  // dx and dy are the small change in position each frame
  dx = random( -1, 1 );
  dy = random( -1, 1 );
  background( 0 );
}

function draw() {

  // Blend the old frames into the background
  blendMode( BLEND );
  fill( 0, 5 );
  rect( 0, 0, width, height );
  rad = radians( frameCount );

  // Calculate new position
  x += dx;
  y += dy;

  var max = 1,
    min = 0.5,
    bx = x + 100 * sin( rad ),
    by = y + 100 * cos( rad );
    radius = 100 * sin( rad * 0.1 );
    handX = bx + radius * sin( rad * 3 );
    handY = by + radius * cos( rad * 3 );

  // When the shape hits the edge of the window, it reverses its direction and
  // changes velocity
  if ( x > width - 100 || x < 100 ) {

    dx = dx > 0 ? -random( min, max ) : random( min, max );
  }

  if ( y > height-100 || y < 100 ) {

    dy = dy > 0 ? -random( min, max ) : random( min, max );
  }

  fill(180);
  stroke( 255, 50 );
  line( bx, by, handX, handY );
  ellipse( handX, handY, 2, 2 );
}