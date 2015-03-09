/*
 * @name w4_03 "one pixel cinema"
 * @frame 700,622
 * @description This simple sketch demonstrates how to read pixel values from an
 * image. It simulates a 10 pixel "scanner" that moves from the top to the bottom
 * of the image reading the colour values for 10 equally spaced points, then
 * displaying those colours as vertical bars on the left half of the screen.
 * Modified and adapted to p5 code by Juan Sebastian Robles Jimenez.
 * March 07 2015.
 *
 * Based on:
 *
 * Creative Coding
 * Week 4, 03 - one pixel cinema
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
 
var myImg,
  pixelColors,
  // vertical position
  scanLine;

function setup() {

  createCanvas(700, 622);

  myImg = loadImage("data/nasaImage.jpg");

  pixelColors = new Array( 10 );
  scanLine = 0;
  smooth(4);
}


function draw() {

  var i;

  background( 0 );

  // read the colours for the current scanLine
  for ( i = 0; i < 10; i++ ) {

    pixelColors[i] = myImg.get( 17 + (i * 35), scanLine );
  }

  // draw the sampled pixels as verticle bars
  for ( i = 0; i < 10; i++ ) {

    noStroke();
    fill( pixelColors[i] );
    rect( i * 35, 0, 35, 622 );
  }

  // draw the image
  image( myImg, width / 2, 0 );

  // increment scan line position every second frame
  if (frameCount % 2 == 0) {
    scanLine ++;
  }

  if ( scanLine > height ) {

    scanLine = 0;
  }

  // draw circles over where the "scanner" is currently reading pixel values
  for ( i = 0; i < 10; i++ ) {

    stroke(255, 0, 0);
    noFill();
    ellipse( (width / 2) + 17 + (i * 35), scanLine, 5, 5 );
  }
}