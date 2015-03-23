/*
 * @name w5_05 "Text agents"
 * @frame 700,700
 * @description This sketch creates a simple agent-based simulation using text
 * and objects. The sketch reads in characters from the keyboard and dynamically
 * creates new objects for each character. Modified and adapted to p5 code by
 * Juan Sebastian Robles Jimenez. March 22 2015.
 *
 * Based on:
 *
 * Creative Coding
 * Week 5, 05 - Text agents
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

// aniChars was originally an ArrayList (Java) but javascript arrays work fine
// in this example
var aniChars,
  currentCount;

function setup() {

  createCanvas( 700, 700 );
  textFont( "Grundschrift" );

  aniChars = [];
  
  // enable antialiasing
  smooth(8);
}

function draw() {

  var i,
    tempObj;

  background( 255 );

  for ( i = aniChars.length - 1; i >= 0; i-- ) {
    tempObj = aniChars[i];

	// run each char
    tempObj.run();
  }
}

function keyTyped() {

  // key cannot be evaluted as backspace
  if ( BACKSPACE == keyCode && aniChars.length > 0 ) {
    println("c");

    // removing the last element of the list
    aniChars.splice( aniChars.length - 1, 1 );
  } else {

    // adding an element to the end of the list
    aniChars.push( new AniCharacter( random( width ), random( height ), key ) );
  }
}