/*
 * @name w4_02 "images as textures - image drawing program"
 * @frame 800,800
 * @description This program demonstrates the use of images.
 *
 * Keyboard interaction:
 * key 'd' = delete drawing
 * key LEFT and RIGHT = De/Increase Image size
 * key '1' and '2' = change image
 *
 * Modified and adapted to p5 code by Juan Sebastian Robles Jimenez.
 * January 28 2015.
 *
 * Based on:
 *
 * Creative Coding
 * Week 4, 02 - images as textures - image drawing program
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

// p5.Image is used to store an image in memory
var myImage,
  // current scale of the image
  scaleOfImage,
  // display window image
  bgImage,
  selectedImageNum;

function setup() {

  createCanvas( 800, 800 );

  // allocate a new array with space for two images
  myImage = new Array( 2 );
  myImage[0] = loadImage("data/sample_01.png");
  myImage[1] = loadImage("data/sample_02.png");

  loadCanvasImage();
  
  // set initial scale to be 0.5 and use the first image (index 0)
  scaleOfImage = 0.5;
  selectedImageNum = 0;
}

function draw() {

  var scaleValue = 0.0,
    i;

  // background() doesn't display images so I use image()
  bgImage.updatePixels();
  image( bgImage, 0, 0 );

  // left and right arrow keys to scale the image
  if ( keyIsPressed ) {
    if ( keyCode == LEFT_ARROW ) {
      scaleOfImage -= 0.01;
    } else if ( keyCode == RIGHT_ARROW ) {
      scaleOfImage += 0.01;
    }
  }

  // draw image accorinding to current scale and mouse position
  push();
  translate(mouseX, mouseY);
  scaleValue = constrain( scaleOfImage, 0.05, 6 );
  scale( scaleValue );
  rotate( radians( frameCount ) );
  imageMode( CENTER );
  image( myImage[selectedImageNum], 0, 0 );
  pop();

  // if the mouse is pressed load the image into the main background image
  if ( mouseIsPressed ) {
    loadPixels();
    bgImage.loadPixels();
	for ( i = 0; i < bgImage.pixels.length; i++ ) {
	  bgImage.pixels[i] = pixels[i];
    }

    bgImage.updatePixels();
  }
}

// Originally this function was not needed, but without setting the pixels
// to the right color, the example doesn't work properly.
function loadCanvasImage() {

  var i,
    j;

  bgImage = createImage( width, height, RGB );
  bgImage.loadPixels();

  for ( i = 0; i < bgImage.width; i++) {
    for ( j = 0; j < bgImage.height; j++) {
      bgImage.set(i, j, color(255, 255, 255)); 
    }
  }
}

// Originally, this was the keyPressed function, but we need to test the strict
// lowercase letter 'd'.
function keyTyped() {

  if ( key == 'd' ) {
    loadCanvasImage();
  } else if (key == '1') {
    selectedImageNum = 0;
  } else if (key == '2') {
    selectedImageNum = 1;
  }
}