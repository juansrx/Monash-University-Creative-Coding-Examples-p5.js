/*
 * @name w4_04 "sound toy"
 * @frame 1000,500
 * @description This sketch is a simple generative sound toy. It shows how to
 * read and play sound samples in a sketch using the Minim library. But, in this
 * p5 code it will use the p5.sound library. Modified and adapted to p5 code by
 * Juan Sebastian Robles Jimenez. March 07 2015.
 *
 * Based on:
 *
 * Creative Coding
 * Week 4, 04 - sound toy
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

var x,
  y,
  dx,
  size,
  gap,
  selectSound,
  // an array of audio players
  soundFx;

// It's better to load the sound files on the preload function
function preload() {

  soundFx = new Array( 3 );
  soundFx[0] = loadSound("data/sound01.wav");
  soundFx[1] = loadSound("data/sound02.wav");
  soundFx[2] = loadSound("data/sound03.wav");
}

function setup() {

  createCanvas( 1000, 500 );

  // randomly select a sound player and play the sound
  selectSound = parseInt( random( 3 ) );
  soundFx[selectSound].play();

  gap = 0.8;
  x = random( width ); 
  y = 0;
  size = random( 10, 500 );
  dx = size;

  background( 0 );
  smooth( 8 );
}


function draw() {

  if ( frameCount % 10 == 0 ) {

    // every 10 frames
    y = y + dx * gap;
    // same as: size = size / 2;
    size *= 0.5;
    dx = size;
    noStroke();
    fill( 0, 10 );
    rect( 0, 0, width, height );
  }

  if ( size < 1 ) {

    // if the size has become too small, remap gap between 0.1 and 2, based on
    // the frame number
    gap = map( frameCount % 100, 0, 100, 0.1, 2 );
    x = random( width ); 
    y = 0;
    size = random( 10, 500 );
    dx = size;
    selectSound = parseInt( random( 3 ) );
    // there is not a rewind method in p5.sound so jump is used
    soundFx[selectSound].jump();
    soundFx[selectSound].play();
  }

  // draw the shapes associated with the sound
  noFill();
  stroke( 255, 50 );
  ellipse( x, y, size, size );
  stroke( 255, 10 );
  line( x, y, x, height );
}