/*
 * @name w5_04 "Moving balls 2"
 * @frame 600,600
 * @description This sketch shows the basics of classes and objects in p5. It
 * defines a class called "Ball" with one member function: "display()".
 * Modified and adapted to p5 code by Juan Sebastian Robles Jimenez.
 * March 21 2015.
 *
 * Based on:
 *
 * Creative Coding
 * Week 5, 04 - Moving balls 2
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

var centre,
  arounds,
  numOfObjects;

function setup() {

  var i;

  createCanvas( 600, 600 );

  numOfObjects = 100;

  centre = new MovingBall( width / 2, height / 2 );
  arounds = new Array( numOfObjects );

  for ( i = 0; i < arounds.length; i++ ) {
    arounds[i] = new MovingBall( random( width ), random( height ) );
  }

  background(0);
}

function draw() {

  //background( 0 );

  centre.run();

  for ( i = 0; i < arounds.length; i++ ) {
    arounds[i].run();
  }
}