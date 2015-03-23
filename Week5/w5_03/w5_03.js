/*
 * @name w5_03 "Moving balls"
 * @frame 500,500
 * @description This sketch shows the basics of classes and objects in p5. It
 * defines a class called "Ball" with member functions that move and display.
 * Actually, javascript is not a strict OOP language, so concepts as classes,
 * interfaces, inheritance, etc, don't exist as such, but they can be "simulated"
 * with functions and prototypes. Modified and adapted to p5 code by Juan
 * Sebastian Robles Jimenez. March 21 2015.
 *
 * Based on:
 *
 * Creative Coding
 * Week 5, 03 - Moving balls
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

// declare array of Balls
var theBalls,
  numBalls = 100;

function setup() {

  var i,
    ballSize;

  createCanvas( 500, 500 );

  // initialise array and fill it with balls
  theBalls = new Array( numBalls );
  for ( i = 0; i < numBalls; ++i ) {
    ballSize = constrain( 20 + (randomGaussian() * 4), 1, 100 );
    theBalls[i] = new Ball( random( width ), random( height ), ballSize );
    theBalls[i].randomiseDirection();
  }

  background(0);
}

function draw() {

  var i;

  background( 0 );

  for ( i = 0; i < numBalls; ++i ) {
    theBalls[i].move();
    theBalls[i].display();
  }
}