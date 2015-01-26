/*
 * @name w1_03 "Draw your name! (part 3)"
 * @frame 500,500
 * @description Another variation, this time chaining the shape drawn over
 * time. Modified and adapted to p5 code by Juan Sebastian Robles Jimenez. 
 * August 17 2014.
 *
 * Press 's' to save your drawing as an image.
 * Press 'r' to erase your drawing and start with a blank screen
 *
 * Based on:
 *
 * Creative Coding
 * Week 1, 03 - Draw your name! (part 3)
 * by Indae Hwang and Jon McCormack
 * Copyright (c) 2014 Monash Universit
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

// variables to store the delay and target counts
var delayCount,
  targetCount;

function setup() {

  canvas = createCanvas( 500, 500 );

  background( 0 );

  delayCount = 0;

  // set target count to a random integer between 10 and 5
  targetCount = random( 15, 30 ) | 0;
}

function draw() {

  var style; 

 // increment delay count (shorthand for delayCount = delayCount + 1)
  delayCount++;

    if ( delayCount == targetCount ) {
      style = random(4) | 0;
      targetCount = random(5, 20) | 0;
      delayCount = 0;
    } else {
      style = 0;
    }

  if ( mouseIsPressed && mouseButton == LEFT ) {

    stroke( random( 0, 255 ) ); 
    fill( random( 0, 255 ), random( 0, 255 ), random( 0, 255 ) );

    // switch statement
    switch( style ) {
      case 0:
        // draw a point
        point( mouseX, mouseY );
        break;
      case 1:
        // draw a circle with random radius
        var esize = random( 1, 20 );
        ellipse( mouseX, mouseY, esize, esize );
        break;
      case 2:
        // draw a random sized rectangle
        var qsize = random( 1, 10 );
        quad( mouseX - qsize, mouseY, mouseX, mouseY - qsize, mouseX + qsize,
          mouseY, mouseX, mouseY + qsize );
        break;
      case 3:
        // draw a triangle with random size
        var tsize = random( 1, 5 );
        triangle( mouseX - tsize, mouseY + tsize, mouseX, mouseY - tsize,
          mouseX + tsize, mouseY + tsize );
        break;
        // end of switch statement
    }
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