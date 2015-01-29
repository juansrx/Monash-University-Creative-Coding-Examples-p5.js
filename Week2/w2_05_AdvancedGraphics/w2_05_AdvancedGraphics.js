/*
 * @name w2_05_AdvancedGraphics
 * @frame 500,600
 * @description This sketch draws the Bacteriophage T4 Virus using p5's graphics
 * drawing shapes.
 *
 * Modified and adapted to p5 code by Juan Sebastian Robles Jimenez. August 31
 * 2014.
 *
 * Based on:
 *
 * Creative Coding
 * Week 2, Foldout 03: Advanced Graphics
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
  canvas = createCanvas( 500, 600 );
  // add extra smoothing to lines -- this takes more time, but gives better quality
  smooth( 4 );
}

function draw() {

  background( 255 );

  //head
  stroke( 0 );
  noFill();

  var headCenterX = width / 2,
    headCenterY = 100,
    headSize = 50,
    angle = TWO_PI / 6,
    i;

  beginShape();
  for ( i =0; i < 6; i++ ) {
    var x = headCenterX + headSize * cos( angle / 2 + angle * i ),
      y = headCenterY + headSize * sin( angle / 2 + angle * i );

    // add a new vertex
    vertex( x, y );

    //line from center
    strokeWeight( 1 );
    line( headCenterX, headCenterY, x, y );

    strokeWeight( 6 );
  }

  endShape( CLOSE );

  //body
  noFill();
  strokeWeight(3);

  var curveHeight = 5,
    curveWidth = 5,
    firstPointX = width / 2,
    secondPointX = width / 2;

  beginShape();
  for ( i = 0; i < 30; i++ ) {
    //this draws one unit of the curve, then repeats 10 times.

    var firstPointY = 150 + curveHeight * i,
      firstControlPointX = firstPointX + curveWidth - ( curveWidth * 2 ) *
        ( i % 2 ),
      firstControlPointY = firstPointY,
      secondPointY = 150 + curveHeight * ( i + 1 ),
      secondControlPointX = secondPointX + curveWidth - ( curveWidth * 2 ) *
        ( i % 2 ),
      secondControlPointY = secondPointY;

    // start point of each curve unit
    vertex( firstPointX, firstPointY );
     //leftside
    bezierVertex( firstControlPointX, firstControlPointY, secondControlPointX,
      secondControlPointY, secondPointX, secondPointY );
  }
  endShape();    

  //bottom
  var bottomX = width / 2,
    bottomY = 300,
    bottomWidth = 30,
    bottomHeight = 15,
    bottomRound = 5;

  rect( bottomX - bottomWidth / 2, bottomY, bottomWidth, bottomHeight,
    bottomRound );

  //leg-left (ll) 
  var ll_firstPointX = width / 2 + 15,
    ll_firstPointY = 307,
    ll_firstControlX = ll_firstPointX + 50,
    ll_firstControlY = ll_firstPointY - 50,
    ll_secondPointX = width / 2 + 70,
    ll_secondPointY = 450,
    ll_secondControlX = ll_secondPointX + 100,
    ll_secondControlY = ll_secondPointY + 50;

  curve( ll_firstControlX, ll_firstControlY, ll_firstPointX, ll_firstPointY,
    ll_secondPointX, ll_secondPointY, ll_secondControlX, ll_secondControlY );

  //leg-right(lr)
  var lr_firstPointX = width / 2 - 15;
    lr_firstPointY = 307, lr_firstControlX = lr_firstPointX - 50,
    lr_firstControlY = lr_firstPointY - 50,
    lr_secondPointX = width / 2 - 70,
    lr_secondPointY = 450,
    lr_secondControlX = lr_secondPointX - 100,
    lr_secondControlY = lr_secondPointY + 50;

  curve( lr_firstControlX, lr_firstControlY, lr_firstPointX, lr_firstPointY,
    lr_secondPointX, lr_secondPointY, lr_secondControlX, lr_secondControlY );

  //leg- middle
  line( width / 2, 307, width / 2, 450 );

  //guide line
  strokeWeight( 1 );
  stroke( 150 );
  line( ll_firstPointX, ll_firstPointY, ll_firstControlX, ll_firstControlY );
  line( lr_firstPointX, lr_firstPointY, lr_firstControlX, lr_firstControlY );
  line( ll_secondPointX, ll_secondPointY, ll_secondControlX, ll_secondControlY );
  line( lr_secondPointX, lr_secondPointY, lr_secondControlX, lr_secondControlY );
  noStroke();
  fill( 255, 0, 0 );
  ellipse( ll_firstPointX, ll_firstPointY, 5, 5 );
  ellipse( lr_firstPointX, lr_firstPointY, 5, 5 );
  ellipse( ll_firstControlX, ll_firstControlY, 5, 5 );
  ellipse( lr_firstControlX, lr_firstControlY, 5, 5 );
  ellipse( lr_secondPointX, lr_secondPointY, 5, 5 );
  ellipse( ll_secondPointX, ll_secondPointY, 5, 5 );
  ellipse( lr_secondControlX, lr_secondControlY, 5, 5 );
  ellipse( ll_secondControlX, ll_secondControlY, 5, 5 );
}