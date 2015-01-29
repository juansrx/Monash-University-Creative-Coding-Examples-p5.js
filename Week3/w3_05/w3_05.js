/*
 * @name w3_05 "spinning top: dynamic motion"
 * @description This sketch builds on the w3_04 spinning top sketch. Modified
 * and adapted to p5 code by Juan Sebastian Robles Jimenez. October 13 2014.
 *
 * Based on:
 *
 * Creative Coding
 * Week 3, 05 - spinning top: dynamic motion
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
  bx,
  by,
  ang,
  ang_inc,
  tDist,
  num = 50,
  max = 0.5,
  min = 0.1,
  rad;

function setup() {

  var i;

  canvas = createCanvas( displayWidth, displayHeight );

  // Allocate
  x = new Array(num);
  y = new Array(num);
  dx = new Array(num);
  dy = new Array(num);
  ang = new Array(num);
  ang_inc = new Array(num);
  bx = new Array(num);
  by = new Array(num);
  tDist = new Array(num);

  // Initialise
  for ( i = 0; i < num; i++ ) {

    x[i] = width / 2;
    y[i] = height / 2;
    dx[i] = random( -0.9, 0.9 );
    dy[i] = random( -0.9, 0.9 );
    ang[i] = random( 360 );
    ang_inc[i] = random( -0.1, 0.1 );
    bx[i] = 0;
    by[i] = 0;
    tDist[i] = random( 10, 100 );
  }

  // Clear screen
  background(0);
}

function draw() {

  var i,
    j,
    currDist,
    b_dist;

  // Slowly fade the image over time
  if ( frameCount % 100 == 0 ) {

    fill( 0, 5 );
    rect( 0, 0, width, height );
  }

  for ( i = 0; i < num; i++ ) {

    x[i] += dx[i];
    y[i] += dy[i];
    ang[i] += ang_inc[i];

    if ( x[i] > width - 100 || x[i] < 100 ) {

      dx[i] = dx[i] > 0 ? -random( min, max ) : random( min, max );
    }

    if ( y[i] > height - 100 || y[i] < 100 ) {

      dy[i] = dy[i] > 0 ? -random( min, max ) : random( min, max );
    }

    bx[i] = x[i] + 100 * sin( radians( ang[i] ) );
    by[i] = y[i] + 100 * cos( radians( ang[i] ) );

    fill( 180 );
  }


  for ( i = 0; i < num; i++ ) {
    for ( j = 0; j < i; j++ ) {

      currDist = dist( x[i], y[i], x[j], y[j] );
      if ( currDist < tDist[i] ) {

        stroke( 0, 10 );
        beginShape( LINES );
        vertex( x[i], y[i] );
        stroke( 255, 10 );
        vertex( bx[j], by[j] );
        endShape();
      }

      b_dist = dist( bx[i], by[i], bx[j], by[j] );
      if ( b_dist < tDist[i] ) {

        beginShape( LINES );

        vertex( bx[i], by[i] );
        stroke( 255, 15 );
        vertex( bx[j], by[j] );
        stroke( 255, 5 );
        endShape();
      }
    }
  }
}