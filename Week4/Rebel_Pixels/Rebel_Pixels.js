/*
 * @name Rebel Pixels
 * @frame 500,348
 * @description What happens when some pixels from an image want to wander a bit?
 * 's' Saves the actual frame. Modified and adapted to p5 code by Juan Sebastian
 * Robles Jimenez. March 08 2015.
 *
 * Based on:
 *
 * "Rebel Pixels (One Pixel Cinema)" by Juan Sebastian Robles Jimenez, licensed
 * under Creative Commons Attribution-Share Alike 3.0 and GNU GPL license.
 * Work: http://openprocessing.org/visuals/?visualID= 154751	
 * License: 
 * http://creativecommons.org/licenses/by-sa/3.0/
 * http://creativecommons.org/licenses/GPL/2.0/
 *
 * The image used is  'Ill Give You All I Can...'
 * by Brandon Warren
 * https://www.flickr.com/photos/92694860@N00/4164759025
 * Licensed unde the Creative Commons Licence 2.0
 * https://creativecommons.org/licenses/by-nc/2.0/deed.es
 * found on flicrcc
 */

var canvas,
  img,
  imgPixels,
  pixelX,
  pixelY,
  nPixels = 500,
  i = 0;

function setup() {

  canvas = createCanvas( 500, 348 );

  img = loadImage( "data/img1.jpg" );
  img.loadPixels();
  imgPixels = new Array( nPixels );
  pixelX = new Array( nPixels );
  pixelY = new Array( nPixels );
}

function draw() {

  background( 0 );
  image( img, 0, 0 );
  addPixel();
  movePixels();

  // save your drawing when you press keyboard 's'
  if ( keyIsPressed == true && key== 's' ) {

    // originally, this was made with a saveFrame() function, here I use the
    // toDataURL method of the canvas object, for now.
    var dataURL = canvas.canvas.toDataURL( 'image/jpeg' );
    window.open( dataURL, "rebelPixels", "width=" + width + ", height=" +
      height );
  }
}

// Adds a pixel from a random position to the containers
// it will cicle
function addPixel() {

  if ( i < nPixels ) {

    pixelX[i] = parseInt( random( 0, width ) );
    pixelY[i] = parseInt( random( 0, height ) );
    imgPixels[i] = img.get( pixelX[i], pixelY[i] );
    i = (i + 1) % nPixels;
  }
}

// Draws and update the position of the current pixels
function movePixels() {

  var j;

  img.loadPixels();
  for ( j = 0; j < i; ++j ) {

    img.set( pixelX[j], pixelY[j], imgPixels[j] );
    pixelX[j] = constrain( pixelX[j] + parseInt( random( -2, 2 ) ), 0, width );
    pixelY[j] = constrain( pixelY[j] + parseInt( random( -2, 2 ) ), 0, height );
  }

  img.updatePixels();
}