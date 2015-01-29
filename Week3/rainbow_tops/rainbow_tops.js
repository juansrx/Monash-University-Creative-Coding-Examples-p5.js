/*
 * @name Rainbow Tops
 * @frame 800,600
 * @description I don't know what I did here...
 * 's' Saves the actual frame. Modified and adapted to p5 code by
 * Juan Sebastian Robles Jimenez. October 13 2014.
 *
 * Based on:
 *
 * "Rainbow Tops" by Juan Sebastian Robles Jimenez, licensed under Creative
 * Commons Attribution-Share Alike 3.0 and GNU GPL license.
 * Work: http://openprocessing.org/visuals/?visualID= 153332
 * License: 
 * http://creativecommons.org/licenses/by-sa/3.0/
 * http://creativecommons.org/licenses/GPL/2.0/
 */

var nTops = 20,
  posX,
  posY,
  dx,
  dy,
  topGap = 10,
  nFrames = 0,
  canvas;

function setup() {

  var i;

  canvas = createCanvas( 800, 600 );
  background( 0 );
  frameRate( 60 );
  
  posX = new Array(nTops);
  posY = new Array(nTops);
  dx = new Array(nTops);
  dy = new Array(nTops);
  
  for ( i = 0; i < nTops; ++i ) {

    posX[i] = random( 0, width );
    posY[i] = random( 0, height );
  }
}

function draw() {

  var i;

  blendMode(BLEND);

  // For the lights effects
  fill( 0, 9 );
  rect( 0, 0, width, height );

  for ( i = 0; i < nTops; ++i ) {

    drawSpinner( posX[i], posY[i], (nFrames % 60) + 1, topGap );

    dx[i] = 20 * cos( random( -TWO_PI, TWO_PI ) );
    dy[i] = 20 * sin( random( -TWO_PI, TWO_PI ) );

    dx[i] *= ((posX[i] > width - 80 || posX[i] < 80) && dx[i] < 0 ? -1 : 1);
    dy[i] *= ((posY[i] > height - 80 || posY[i] < 80) && dy[i] < 0 ? -1 : 1);

    posX[i] += dx[i];
    posY[i] += dy[i];

    posX[i] = posX[i] > width - 80 ? width - 80 : posX[i];
    posY[i] = posY[i] > height - 80 ? height - 80 : posY[i];
    posX[i] = posX[i] < 80 ? 80 : posX[i];
    posY[i] = posY[i] < 80 ? 80 : posY[i];
  }

  // Save your drawing when you press keyboard 's'
  if ( keyIsPressed == true && key == 's' ) {

    var dataURL = canvas.canvas.toDataURL( 'image/jpeg' );
    window.open( dataURL, "rainbow_tops_" + nFrames, "width=" + width + ", height=" + height );
  }

  ++nFrames;
}

function drawSpinner( x, y, radius, nGap) {

  var i,
    px,
    py;

  stroke( 255 );
  strokeWeight( 5 );
  point( x, y );
  noFill();
  strokeWeight( 1 );
  ellipse( x, y, radius * 2, radius * 2 );
  stroke( 0 );

  fill( random( 0, 255 ), random( 0, 255 ), random( 0, 255 ) );

  // Drawing the lights
  for ( i = 0; i < nGap; ++i ) {

    px = x + radius * cos( i * (TWO_PI / nGap) );
    py = y + radius * sin( i * (TWO_PI / nGap) );
    ellipse( px, py, 10, 10 );    
  }
}