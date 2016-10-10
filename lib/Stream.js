function Stream( file , ctx , output ){


  this.audio = new Audio();

  this.file = file;
  this.ctx = ctx;
  this.output = output;


  this.gain = ctx.createGain();
  this.audio.src = this.file;
 
  this.source = this.ctx.createMediaElementSource( this.audio );
  this.source.connect( this.gain );
  this.gain.connect( this.output );

}

Stream.prototype.play = function(){

  this.audio.play();

}

Stream.prototype.stop = function(){
  this.audio.pause();
}

Stream.prototype.setStreamSource = function( file ){

  this.file = file;
  this.audio.src = this.file;
}

