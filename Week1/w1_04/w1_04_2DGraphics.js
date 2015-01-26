/*
 * @name w1_04 "Graphics Shapes and Drawing Order"
 * @frame 600,700
 * @description This program illustrates the use of a variety of graphic shapes
 * including points, lines, quads, circles and ellipises . Modified and adapted
 * to p5 code by Juan Sebastian Robles Jimenez. August 18 2014.
 *
 * based on:
 *
 * Creative Coding
 * Week 1, Foldout 04: Graphics Shapes and Drawing Order
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

var canvas;

// setup function -- called once when the program begins
function setup() {

  canvas = createCanvas( 600, 700 );

  // turn off looping, so draw is only called once
  noLoop();
}

// draw function -- called once because of noLoop() in setup()
function draw() {

  // set the background to white
  background( 255 );

  //black rectangle
  fill( 0 );
  rectMode( CORNER );
  noStroke();
  rect( 20, 20, 560, 330 );

  //quad
  stroke( 255, 0, 0 );
  noFill();
  strokeWeight( 1 );
  quad( 300, 150, 100, 350, 300, 550, 500, 350 );

  // top circle white
  fill( 255 );
  noStroke();
  ellipse( 300, 150, 80, 80 );

  // left circle
  fill( 0, 255, 0, 150 );
  noStroke();
  ellipse( 100, 350, 80, 80 );

  //right circle
  noFill();
  strokeWeight( 10 );
  stroke( 0, 0, 255 );
  ellipse( 500, 350, 80, 80 );
  strokeWeight( 1 );

  //triangle
  fill( 240, 200 );
  triangle( 300, 440, 140, 600, 460, 600 );

  // rectangle on the bottom of a triangle
  fill( 255 );
  stroke( 0, 0, 255 );
  rectMode( CENTER );
  rect( 300, 600, 10, 10 );

  // line between the white circle on top of the quad to the rectangle at the
  // bottom of a triangle
  stroke( 238, 23, 250 );
  strokeWeight( 3 );
  line( 300, 150, 300, 600 );
  strokeWeight( 1 );

  // arc 
  stroke( 0 );
  noFill();
  // PI and HALF_PI are constants defined by Processing (and in p5 too!)
  arc( 500, 550, 400, 400, PI, PI + HALF_PI ); 

  // point
  stroke( 255, 0, 0 );
  strokeWeight( 3 );
  point( 500, 550 );
  strokeWeight( 1 );

  //last circle
  stroke( 180, 30 );
  strokeWeight( 30 );
  ellipse( 300, 600, 320, 320 );

  stroke( 0 );
  strokeWeight( 1 );
  ellipse( 300, 600, 320, 320 );  
}