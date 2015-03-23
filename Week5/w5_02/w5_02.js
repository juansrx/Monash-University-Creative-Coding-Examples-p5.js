/*
 * @name w5_02 "Digital Clock"
 * @frame 1024,600
 * @description This sketch shows how to use text in p5. The sketch creates a
 * digital clock that shows the current time in hours, minutes and seconds. Use
 * the 'h', 'm' and 's' keys to enlarge the hours, minutes or seconds in the
 * display. Modified and adapted to p5 code by Juan Sebastian Robles Jimenez.
 * March 15 2015.
 *
 * Based on:
 *
 * Creative Coding
 * Week 5, 02 - Digital Clock
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

// what is selected (h,m,s)
var selected,
  // gap between digits
  gap;

function setup() {

  createCanvas( 1024, 600 );

  // you don't create a font object, you set the current font with textFont()
  // initially with size 16
  textFont( "Grundschrift" );

  selected = '0';
  gap = 300;
  noStroke();
}

function draw() {

  var c;

  background( 0 );
  fill( 255 );

  // draw h, m, s
  drawNumber( hour(), selected == 'h', -gap, 0 );
  drawNumber( minute(), selected == 'm', 0, 0 );
  drawNumber( second(), selected == 's', gap, 0 );
  c = color( selected == 'h' ? 255 : 0, selected == 'm' ? 255 : 0, selected == 's' ? 255 : 0 );
  drawBanner( c, 10 );
}

/*
 * drawNumber
 * takes an integer and draws it offset from the centre of the screen by
 * offsetX and offsetY. If big is true then use a big size for the type.
 *
 */
function drawNumber( number, big, offsetX, offsetY) {

  var textW,
    textAscent;

  // convert number to string
  var theText = number + '';

  if ( big ) {

    // set big font size
    textSize( 400 );
  } else {
  
    // normal font size
    textSize( 20 );
  }

  // no textAscent() methods so, we have to guess
  textW = textWidth( theText ) * 0.5;
  textAscent = (big ? 400 : 20) * 0.375;

  // draw text offset from the centre of the screen
  text( theText, width / 2 - textW + offsetX, height / 2 + textAscent + offsetY );
}

/*
 * drawBanner
 * draw a coloured banner at the bottom of the screen in the supplied colour
 */
function drawBanner( c, w ) {

  noStroke();
  fill( c );
  rect( 0, height - w, width, w );
}

// originally it was ketReleased, but we use this one to support lowercase
// characters
function keyTyped() {

  // set selected to be the last key released
  selected = key;
}