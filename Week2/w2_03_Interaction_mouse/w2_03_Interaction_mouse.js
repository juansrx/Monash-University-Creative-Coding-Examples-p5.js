/*
 * @name w2_03_Interaction_mouse
 * @frame 300,300
 * @description This sketch shows how to do interaction with the mouse.
 * Try pressing, releasing, clicking and dragging the mouse and observe the
 * results. When each event happens the sketch also prints a message in the
 * console.
 *
 * Modified and adapted to p5 code by Juan Sebastian Robles Jimenez. August 31
 * 2014.
 *
 * Based on:
 *
 * Creative Coding
 * Week 2, Foldout 04: Basic Mouse Interaction
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

var circleWidth,
  strokeWeightValue,
  backgroundValue,
  strokeColorValue;

function setup() {
  canvas = createCanvas( 300, 300 );
  circleWidth = 150;
  backgroundValue = 120;
  strokeWeightValue = 40;
  strokeColorValue = 80;
}

function draw() {

  background( backgroundValue );
  stroke( strokeColorValue );
  strokeWeight( strokeWeightValue );
  ellipse( 150, 150, circleWidth, circleWidth );
  
  if ( mouseIsPressed ) {
    strokeColorValue = 50 + mouseY / 5;
  }
}

function mousePressed() {
  print( "The mouse button was pressed" );
  circleWidth = 150;
}

function mouseReleased() {
  print( "The mouse button was released" );
  circleWidth = 50;
}

function mouseClicked() {
  print( "The mouse button was clicked" );
  if ( backgroundValue == 120 ) {
    backgroundValue = 180;
  } else {
    backgroundValue = 120;
  }
}

function mouseDragged() {
  print( "The mouse is being dragged" );
  strokeWeightValue = mouseX / 10;

  // Ensure that the value for stroke weight is never negative.
  if ( strokeWeightValue < 0 )
    strokeWeightValue = 0;
}