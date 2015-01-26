/*
 * @name w1_02 "Draw your name! (part 2)"
 * @frame 500,500
 * @description A variation on the first draw your name sketch. This one uses
 * time-varying functions to create a different aesthetic. Modified and adapted
 * to p5 code by Juan Sebastian Robles Jimenez. August 17 2014.
 *
 * Press 's' to save your drawing as an image.
 * Press 'r' to erase your drawing and start with a blank screen
 *
 * Based on:
 *
 * Creative Coding
 * Week 1, 02 - Draw your name! (part 2)
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

// variables for the angle (in radians), increment and canvas reference
var angle,
  inc,
  canvas;

function setup() {

  canvas = createCanvas( 500, 500 );

  background( 0 );

  // rectangles drawn from the center
  rectMode( CENTER );

  // initialise angle and inc to 0
  angle = 0;
  inc = 0;
}

function draw() {

    // map the mouse x position to the range (0.01, 0.08)
    inc = map( mouseX, 0, width, 0.01, 0.08 );

    // incremment the current angle
    angle = angle + inc;

  if ( mouseIsPressed && mouseButton == LEFT ) {

    stroke( 170 ); 
    fill( 120, 60 );

    rect( mouseX, mouseY, 2, 2 );

    // pmouse is the mouse position at the previous frame
    line( mouseX, mouseY, pmouseX, pmouseY );

    // oscillate the radius over time
    var radius = 30 * abs( sin( frameCount ) ),
      first_tempX  = mouseX + radius * cos( angle ),
      first_tempY  = mouseY + radius * sin( angle ),
      second_tempX = mouseX + radius * cos( -angle ),
      second_tempY = mouseY + radius * sin( -angle ),
      temp_w = random( 3 );

    // draw some lines and circles using transparency
    stroke( 110, 110, 110, 100 );
    line( mouseX, mouseY, first_tempX, first_tempY );
    line( mouseX, mouseY, second_tempX, second_tempY );
    ellipse(first_tempX, first_tempY, temp_w, temp_w);
    ellipse( second_tempX, second_tempY, temp_w, temp_w );
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
    background( 0 );
  }
}