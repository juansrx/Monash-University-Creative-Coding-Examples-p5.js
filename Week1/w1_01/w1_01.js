/*
 * @name w1_01 "Draw your name!"
 * @frame 500,500
 * @description A simple drawing program that draws randomly sized squares when
 * the mouse if pressed. Modified and adapted to p5 code by Juan Sebastian Robles
 * Jimenez. August 17 2014.
 *
 * Press 's' to save your drawing as an image.
 * Press 'r' to erase your drawing and start with a blank screen
 *
 * Based on:
 *
 * Creative Coding
 * Week 1, 01 - Draw your name!
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

// In this case, we need to store a reference to the current canvas
var canvas = null;

// setup function -- called once when the program begins
function setup() {

  // set the display window to size 500 x 500 pixels
  canvas = createCanvas( 500, 500 );

  // set the background colour to white
  background( 255 );

  // set the rectangle mode to draw from the centre with a specified radius
  rectMode( RADIUS );
}

// draw function -- called continuously while the program is running
function draw() {

  // draw a rectangle at your mouse point while you are pressing
  // the left mouse button with a small random variation in size.
  // the mouseButton test was not there in the original example,
  // I added it to enforce the left mouse button.
  if ( mouseIsPressed && mouseButton == LEFT ) {

    // set the stroke colour to a light grey
    stroke( 170 );

    // set the fill colour to black with transparency
    fill( 0, 0, 0, 150 ); 

    rect( mouseX, mouseY, random( 6 ), random( 6 ) );
  }

  // save your drawing when you press keyboard 's'
  if ( keyIsPressed == true && key== 's' ) {

    // originally, this was made with a saveFrame() function, here I use the
    // toDataURL method of the canvas object, for now.
    var dataURL = canvas.canvas.toDataURL( 'image/jpeg' );
    window.open( dataURL, "yourName", "width=" + width + ", height=" + height );
  }

    // erase your drawing when you press keyboard 'r'
  if ( keyIsPressed == true && key == 'r' ) {
    background( 255 );
  }
}