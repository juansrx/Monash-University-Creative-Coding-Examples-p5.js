/*
 * @name w4_02 "Random, Noise and Gaussian"
 * @frame 400,700
 * @description This program illustrates the use of different methods for
 * generating randomness in Processing (p5). Modified and adapted to p5 code by
 * Juan Sebastian Robles Jimenez. March 08 2015.
 *
 * Based on:
 *
 * Creative Coding
 * Week 4, Foldout 02: Random, Noise and Gaussian
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

function setup() {

  createCanvas( 400, 700 );
  frameRate( 1 );
}

function draw() {

  var num,
    noiseOff,
	i,
	y;

  background( 255 );

  num = width;
  noiseOff = 0.0;

  // noise
  for ( i = 0; i < num; i += 5 ) {

    y = 150 * noise( noiseOff );
    line( i, 150, i, y );
    fill( 0 );
    ellipse( i, y, 3, 3 );
    noiseOff += 0.05;
  }

  // random
  for ( i = 0; i < num; i += 5 ) {

    fy = random( 100 );
    line( i, 350, i, 350 - y );
    ellipse( i, 350 - y, 3, 3 );
  }

  // randomGaussian
  for ( i = 0; i < num; i += 5 ) {

    y = 50 * randomGaussian();
    line( i, 540, i, y + 540 );
    ellipse( i, y + 540, 3, 3 );
  }
}