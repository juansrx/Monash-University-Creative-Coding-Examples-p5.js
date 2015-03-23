/*
 * @name w5_01 "Basic Text"
 * @frame 800,600
 * @description This sketch shows how to use text in P5. It draws the current
 * location in x and y of the mouse on the screen and a red + centered at the
 * mouse location. Note that this reqires that you have the "Arial" typeface
 * installed on your computer. This font is standard on Mac and Windows
 * computers. Modified and adapted to p5 code by Juan Sebastian Robles Jimenez.
 * March 15 2015.
 *
 * Based on:
 *
 * Creative Coding
 * Week 5, 01 - Basic Text
 * by Jon McCormack
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

// No PFont implemented (or needed here)
var xSize = 10;

function setup() {

  createCanvas( 800, 600 );

  // you don't create a font object, you set the current font with textFont()
  // initially with size 16
  textFont( "Arial", 16 );

  // set font size to 24
  textSize( 24 );

  // set the fill colour to white
  fill( 255 );
}

function draw() {

  var mousePosition;

  // clear the screen to black
  background(0);

  // get the current mouse position as a string in the form "(x,y)"
  mousePosition = "(" + mouseX + "," + mouseY + ")";

  // display the mousePosition string at the current mouse location
  text( mousePosition, mouseX, mouseY );

  // draw the red '+' at the mouse location
  stroke( 255, 0, 0 );
  line( mouseX - xSize, mouseY, mouseX + xSize, mouseY );
  line( mouseX, mouseY - xSize, mouseX, mouseY + xSize );
}