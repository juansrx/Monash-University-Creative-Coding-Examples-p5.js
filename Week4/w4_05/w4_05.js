/*
 * @name w4_05 "noise-based spinning top"
 * @frame 500,500
 * @description TThis sketch is a different cut of the spinning top example from
 * week 3. It uses the noise function to change the direction of the path.
 * Modified and adapted to p5 code by Juan Sebastian Robles Jimenez.
 * March 08 2015.
 *
 * Based on:
 *
 * Creative Coding
 * Week 4, 05 - noise-based spinning top
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

var noiseXoff = 0,
  noiseYoff = 0;

function setup() {

  createCanvas( 500, 500 );
  background( 0 );
}


function draw() {

  var x,
    y,
    angle,
    radius,
    rotateX,
    rotateY;

  // add a small increment to the offsets
  // (change these numbers and look at the visual results)
  noiseXoff += 0.005;
  noiseYoff += 0.003;

  // location of the ellipse
  x = width * noise( noiseYoff * 0.5 );
  y = height * noise( noiseXoff * 0.5 );

  ellipse( x, y, 2, 2 );

  // angle changes with time
  angle = radians( frameCount );
  
  // radius changes with noise
  radius = 100 * noise( noiseXoff );

  // calculate positions at the rotation point
  rotateX = x + radius * cos( angle );
  rotateY = y + radius * sin( angle );

  stroke( 255, 15 );
  line( x, y, rotateX, rotateY );
  ellipse( rotateX, rotateY, 1, 1 );
}