// AniCharacter class
//
// 
var AniCharacter = function ( x_, y_, c_ ) {

  this.x = x_;
  this.y = y_;
  this.nOff_x = random( 3000 );
  this.nOff_y = random( 3000 );

  this.letter = c_;
  this.size_font = random( 50, 200 );
  this.size_shape = this.size_font + random( 10, 50 );
  this.dynamic_c = random( -0.1, 0.1 );
  this.dynamic = 0;
}

AniCharacter.prototype.run = function () {

  switch( this.letter ) {
    case 'a':
      this.dynamic -= this.dynamic_c;
    break;
    case 'c':
      this.dynamic += this.dynamic_c;
    break;
    case 'e':
      this.dynamic += this.dynamic_c;
    break;
  }

  // speed of motion
  this.nOff_x += 0.0005;
  this.nOff_y += 0.0003;

  this.x = width * noise( this.nOff_x );
  this.y = height * noise( this.nOff_y );

  this.visual();
}

/*
 * visual
 * draw the char with special cases for some letters
 */
AniCharacter.prototype.visual = function () {

  var textW,
    ascent,
	tempx,
	tempy;

  textSize( this.size_font );
  textW = ascent = textWidth( this.letter );
  ascent = ascent * 0.75;

  switch( this.letter ) {
    case 'a':
      fill( 0 );
      noStroke();
      text( this.letter, this.x - textW / 2, this.y + ascent / 2 );
      stroke( 0 );
      noFill();

      // pushMatrix() originally
      push();
      translate( this.x, this.y );
      rotate( this.dynamic );
      arc( 0, 0, this.size_shape, this.size_shape, HALF_PI, PI + HALF_PI );

	  // popMatrix originally
      pop();
    break;
    case 'c':
      fill( 0 );
      noStroke();
      text( this.letter, this.x - textW / 2, this.y + ascent / 2 );
      tempx = this.x + this.size_shape * cos( this.dynamic * 0.5 );
      tempy = this.y + this.size_shape * sin( this.dynamic * 0.5 );
      fill( 255, 0, 0 );
      stroke( 255, 0, 0, 140 );
      line( this.x, this.y, tempx, tempy );
      noStroke();
      ellipse( tempx, tempy, 10, 10 );
    break;
    case 'e':
      rectMode( CENTER );
      fill( 0 );
      rect( this.x, this.y, textW, this.size_shape * sin( radians(
	    this.dynamic ) ) );
      rectMode( CORNER );
      fill( 255 );
      noStroke();
      text( this.letter, this.x - textW / 2, this.y + ascent / 2 );
    break;
    default:
      fill( 0 );
      noStroke();
      text( this.letter, this.x - textW / 2, this.y + ascent / 2 );
    break;
  }
}
