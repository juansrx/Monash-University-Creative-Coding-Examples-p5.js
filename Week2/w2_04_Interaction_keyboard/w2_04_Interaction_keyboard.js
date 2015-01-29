/*
 * @name w2_04_Interaction_keyboard
 * @frame 300,300
 * @description This sketch shows how to do interaction with the keyboard.
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
 * Week 2, Foldout 04: Basic Keyboard Interaction
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
  backgroundValue;

function setup() {
  canvas = createCanvas( 300, 300 );
  circleWidth = 50;
  backgroundValue = 120;
}

function draw() {

  background( backgroundValue );
  noStroke();
  ellipse( 150, 150, circleWidth, circleWidth );

  if ( keyIsPressed ) {
    if ( key == 'a' ) {
      backgroundValue++;
    } else if ( key == 's' ) {
      backgroundValue--;
    }

    // ensure backgroundValue is constrianed between 0 and 255
    backgroundValue = constrain( backgroundValue, 0, 255 );
  }
}

// Originally, this was the keyPressed function, but we need to test the strict
// lowercase letter 'c'.
function keyTyped() {
  if ( key == 'c' ) {
    circleWidth = 150;
  }

  print( "pressed " + key + " " + keyCode );
}   

function keyReleased() {
  if ( key == 'c' ) {
    circleWidth = 50;
  }

  print( "Released " + key + " " + keyCode );
}