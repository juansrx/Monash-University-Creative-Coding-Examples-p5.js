/*
 * @name w3_01 "using map() to map mouse co-ordinates to background colour"
 * @frame 500,500
 * @description This program allows you to change the background color.
 * Press and hold 'left mouse button' to change color. Modified and adapted to
 * p5 code by Juan Sebastian Robles Jimenez. October 12 2014.
 *
 * Based on:
 *
 * Creative Coding
 * Week 3, 01 - using map() to map mouse co-ordinates to background colour
 * by Indae Hwang
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

// Color components
var red,
  green,
  blue;

function setup() {

  canvas = createCanvas( 500, 500 );
  red = 0;
  blue = 0;
  green = 0;
}

function draw() {

  background( red, green, blue );

  if ( mouseIsPressed ) {

    red = map( mouseX, 0, width, 0, 255 );
    green = map( mouseY, 0, height, 0, 255 );
    blue = map( mouseX + mouseY, 0, width + height, 255, 0 );

    print( "red: " + red + ", green: " + green + ", blue: " + blue );
  }
}