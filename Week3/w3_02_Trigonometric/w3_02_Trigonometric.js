/*
 * @name w3_02 "Processing functions"
 * @frame 800,300
 * @description This program illustrates the use of the Processing funcions:
 * sin, cos. Modified and adapted to p5 code by Juan Sebastian Robles Jimenez.
 * October 13 2014.
 *
 * Based on:
 *
 * Creative Coding
 * Week 3, Foldout 02: Processing functions
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

var ball_x,
  ball_y,
  center_x,
  center_y,
  radius;

function setup() {

  createCanvas( 800, 300 );
  center_x = 120;
  center_y = height / 2;
  radius = 100;
}

function draw() {

  var nRadians,
    rad,
    i,
    angleForSinCosBall,
    increaseForSinCosBall,
    radiansForSinCosBall,
    sin_ball_x,
    sin_ball_y,
    cos_ball_x,
    cos_ball_y;

  background( 255 );

  nRadians = radians( frameCount );

  ball_x = center_x + radius * sin( radians );
  ball_y = center_y + radius * cos( radians );

  // Circle
  fill( 255 );
  stroke( 0 );
  ellipse( center_x, center_y, radius * 2, radius * 2 );

  // Line between center to rotating ball
  stroke( 180 );
  line( center_x, center_y, ball_x, ball_y );

  // Rotating ball
  fill( 255 );
  stroke( 0 );
  ellipse( ball_x, ball_y, 10, 10 );

  // centerPoint
  fill( 0 );
  ellipse( center_x, center_y, 5, 5 );

  // sin and cos curve
  for ( i = 0; i < 360; i++ ) {
  
    rad = radians( i );
    stroke( 255, 0, 0 );
    point( 250 + i, height / 2 + radius * sin( rad ) );
    stroke( 0, 0, 255 );
    point( 250 + i, height / 2 + radius * cos( rad ) );
  }

  angleForSinCosBall = frameCount % 360;
  increaseForSinCosBall = angleForSinCosBall;
  radiansForSinCosBall= radians( angleForSinCosBall );
  sin_ball_x = 250 + increaseForSinCosBall;
  sin_ball_y = height / 2 + radius * sin( radiansForSinCosBall );
  cos_ball_x = 250 + increaseForSinCosBall;
  cos_ball_y = height / 2 + radius * cos( radiansForSinCosBall );

  // Ball moves on sine curve
  noStroke();
  fill( 255, 0, 0 );
  ellipse( sin_ball_x, sin_ball_y, 5, 5 );
  // Ball moves on cosin curve
  fill( 0, 0, 255 );
  ellipse( cos_ball_x, cos_ball_y, 5, 5 );

  fill( 255, 0, 0 );
  rect( 635, height / 2, 30, radius * sin( radiansForSinCosBall ) );
  fill( 0, 0, 255 );
  rect(670, height / 2, 30, radius * cos( radiansForSinCosBall ) );
}