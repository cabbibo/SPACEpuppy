    function makeRandomTexture( sizeRand ){
 
      var data = new Float32Array( SIZE * SIZE  * 4 );

      for( var i =0; i < data.length; i++ ){

        data[i] = (Math.random() - .5 ) * sizeRand;
  
        if( i % 4 == 4 ){
          data[i] = 0;
        }


      }

      return makeDataTexture( data );

    }

    function makeHueSphereTexture( texture ){
 
      var data = new Float32Array( SIZE * SIZE  * 4 );
      var tData = texture.image.data;

      var c = new THREE.Color();
      for( var i =0; i < data.length; i+=4 ){

        tv1.set( tData[i+0], tData[i+1], tData[i+2]);

        var r = tv1.length();
       // var angle = Math.atan2( tv1.x , tv1.y );
        var angle = Math.acos( tv1.z / r );
        //if( i < 1000 ){ console.log( angle ); }
        c.setHSL(2 * Math.abs(angle) / Math.PI  , 1 , .5 );

       // if( i < 1000 ){ console.log(c); }


        data[i+0] = c.r;
        data[i+1] = c.g;
        data[i+2] = c.b;
        data[i+3] = 0;
        


      }

      return makeDataTexture( data );

    }




    function makeOpalTexture( numOpals , height,depth ){
 
      var data = new Float32Array( SIZE * SIZE  * 4 );

      var numPerOpal = Math.floor(  SIZE * SIZE / numOpals );
      var opalWidth = height;
      var opalHeight = depth;
      var opalDepth = Math.floor( numPerOpal / ( opalWidth * opalHeight ));
      console.log( "OPAS");
      console.log( opalDepth );

      for( var i =0; i < data.length; i+=4 ){

        var index = Math.floor( i / 4 );
        var opalIndex = Math.floor( index / numPerOpal );
        var indexInOpal = index - opalIndex * numPerOpal;

        var z = Math.floor( indexInOpal / (opalHeight * opalWidth) );
        var indexInSlice = indexInOpal - z * ( opalHeight * opalWidth );

        var y = Math.floor( indexInSlice / opalHeight );
        var indexInRow = indexInSlice - y * opalHeight;
        var x = indexInRow;


        //var x = 

        var opalAxis = getOpalAxis( opalIndex );

        tv1.copy( opalAxis.start );
        tv1.add( opalAxis.x.multiplyScalar( x * opalAxis.size ) );
        tv1.add( opalAxis.y.multiplyScalar( y * opalAxis.size ) );
        tv1.add( opalAxis.z.multiplyScalar( z * opalAxis.size ) );



        data[i+0] = tv1.x;
        data[i+1] = tv1.y;
        data[i+2] = tv1.z;
        data[i+3] = opalAxis.size;//(Math.random() - .5 );

        if( opalIndex == 0 ){ data[i+3] = .1;}
  
 

      }

      return makeDataTexture( data );

    }

     function makeOpalRotationTexture( numOpals , height , depth){
 
      var data = new Float32Array( SIZE * SIZE  * 4 );

      var numPerOpal = Math.floor(  SIZE * SIZE / numOpals );
      var opalWidth = height;
      var opalHeight = depth;
      var opalDepth = Math.floor( numPerOpal / ( opalWidth * opalHeight ));
      console.log( "OPAS");
      console.log( opalDepth );

      for( var i =0; i < data.length; i+=4 ){

        var index = Math.floor( i / 4 );
        var opalIndex = Math.floor( index / numPerOpal );
        var indexInOpal = index - opalIndex * numPerOpal;



        //var x = 

        var opalAxis = getOpalAxis( opalIndex );



        data[i+0] = opalAxis.y.x;
        data[i+1] = opalAxis.y.y;
        data[i+2] = opalAxis.y.z;
        data[i+3] = 1;//(Math.random() - .5 );
  
 

      }

      return makeDataTexture( data );

    }

    function makeOpalColorTexture( numOpals , height , depth){
 
      var data = new Float32Array( SIZE * SIZE  * 4 );

      var numPerOpal = Math.floor(  SIZE * SIZE / numOpals );
      var opalWidth = height;
      var opalHeight = depth;
      var opalDepth = Math.floor( numPerOpal / ( opalWidth * opalHeight ));
      console.log( "OPAS");
      console.log( opalDepth );

      var color = new THREE.Color();

      for( var i =0; i < data.length; i+=4 ){

        var index = Math.floor( i / 4 );
        var opalIndex = Math.floor( index / numPerOpal );
        var indexInOpal = index - opalIndex * numPerOpal;


        color.setHSL( opalIndex / numOpals  , 1, .5);



        data[i+0] = color.r;
        data[i+1] = color.g;
        data[i+2] = color.b;
        data[i+3] = 1;//(Math.random() - .5 );
  
 

      }

      return makeDataTexture( data );

    }


    function getOpalAxis( opalID ){

      // could get grid size to make spacing dynamic?

   
      var x = new THREE.Vector3();
      var y = new THREE.Vector3();
      var z = new THREE.Vector3();
      var start = new THREE.Vector3();
      var size = .01;

      if( opalID != 0 ){

        x.set(random( opalID * 2000)-.5 , random( opalID* 2)-.5 , random(opalID * 4)-.5);
        x.normalize();

        tv1.set( random( opalID * 20)-.5 , random( opalID* 200)-.5 , random(opalID * 400)-.5);

        z.crossVectors( x , tv1 ).normalize();
        y.crossVectors( x , z ).normalize();



        start.set(random( opalID *135)-.5 , random( opalID* 22)-.5 , random(opalID * 412)-.5);
        start.normalize();
        var r = random( opalID *1961);
        start.multiplyScalar(random( opalID *1961));
        tv1.set(.8,.4,.2);
        start.multiply( tv1 );
        size = (r) * .01 + .01;


      }else{

        x.set( 1 , 0 , 0 );
        y.set( 0 , 1 , 0 );
        z.set( 0 , 0 , 1 );
        start.set( 0 , 0 , 0);

      }

      return{
        x: x,
        y: y,
        z: z,
        start: start,
        size: size

      }
    }

    function makeNoiseRotationTexture(texture){
 
      var data = new Float32Array( SIZE * SIZE  * 4 );
      var tData = texture.image.data;

      for( var i =0; i < data.length; i+=4 ){

        //console.log( tData[ i+0] );
        tv1.set(
            sNoise.noise3D( tData[ i + 0 ] , tData[ i + 1 ] , tData[ i + 2 ] ),
            sNoise.noise3D( tData[ i + 0 ] * 5 , tData[ i + 1 ] * 5 , tData[ i + 2 ] * 5),
            sNoise.noise3D( tData[ i + 0 ] * 50 , tData[ i + 1 ]  * 50, tData[ i + 2 ] * 50 )
          );

        tv1.normalize();

        data[i + 0] = tv1.x;
        data[i + 1] = tv1.y;
        data[i + 2] = tv1.z;

        //console.log( tv1 );
        //data[i] = (Math.random() - .5 );
  
        data[i+3] = 1.;//Math.random();
      


      }

      return makeDataTexture( data );

    }

    function makeMultiTexture( sizeRand ){
 
      var data = new Float32Array( SIZE * SIZE  * 4 );

      for( var i =0; i < data.length; i++ ){

        data[i] = (Math.random() - .5 ) * sizeRand;
  
        if( i % 4 == 4 ){
          data[i] = 0;
        }


      }

      return makeDataTexture( data );
      
    }

    function makeNormalizedTexture(){
 
      var data = new Float32Array( SIZE * SIZE  * 4 );

      for( var i =0; i < data.length; i += 4 ){
        if( i != 0 ){

          tv1.set( Math.random() -.5 , Math.random()-.5 , Math.random()-.5);
          tv1.normalize();

        }else{

          tv1.set( 0 , .9999 , 0.01 );
          tv1.normalize();

        }
        data[i+0] =tv1.x;
        data[i+1] =tv1.y;
        data[i+2] =tv1.z;
  
        
        data[i +3 ] = Math.random();

        if( i == 0 ){ data[i+3] = 0; }


      }

      return makeDataTexture( data );
    }

    function makeVerticalTexture(){
 
      var data = new Float32Array( SIZE * SIZE  * 4 );

      for( var i =0; i < data.length; i += 4 ){

        tv1.set( 0 , 1 , 0 );
        tv1.normalize();

        data[i+0] =tv1.x;
        data[i+1] =tv1.y;
        data[i+2] =tv1.z;
  
        
        data[i +3 ] = 0;


      }

      return makeDataTexture( data );
    }

    function makeGridTexture(){

      var data = new Float32Array( SIZE * SIZE  * 4 );
      
      for( var i = 0; i < data.length; i += 4 ){

        id = Math.floor( i / 4 );


        z = Math.floor( id / 50 );

        x = (z % 50 ) / 50;
        y = z / 50;

        data[ i + 0 ] = x* .01; 
        data[ i + 1 ] = y* .01; 
        data[ i + 2 ] = z* .01; 

        //console.log( f.x );

      }

      return makeDataTexture( data );


    }

    function makeSingleTexture(size , othersSize ){

      var data = new Float32Array( SIZE * SIZE  * 4 );
      
      for( var i = 0; i < data.length; i += 4 ){

        if( i == 0 ){

          data[ i + 0 ] = 0; 
          data[ i + 1 ] = 0; 
          data[ i + 2 ] = 0; 
          data[ i + 3 ] = .1;
       
        }else{

          data[ i + 0 ] = (Math.random()) * size - size / 2; 
          data[ i + 1 ] = (Math.random()) * size - size / 2; 
          data[ i + 2 ] = (Math.random()) * size - size / 2; 
          data[ i + 3 ] = othersSize;

        }

        //console.log( f.x );

      }

      return makeDataTexture( data );

    }

    function getImageData( image ) {

        var canvas = document.createElement( 'canvas' );
        canvas.width = image.width;
        canvas.height = image.height;

        var context = canvas.getContext( '2d' );
        context.drawImage( image, 0, 0 );

        return context.getImageData( 0, 0, image.width, image.height );

    }

    function getPixel( imagedata, x, y ) {

        var position = ( x + imagedata.width * y ) * 4, data = imagedata.data;
        return { r: data[ position ], g: data[ position + 1 ], b: data[ position + 2 ], a: data[ position + 3 ] };

    }

    function makeImageTexture( sizeofObj , texture ){

      var imagedata = getImageData( texture.image );

      var width = texture.image.width;
      var height = texture.image.height;

      var data = new Float32Array( SIZE * SIZE  * 4 );
      
      for( var i = 0; i < data.length; i += 4 ){

        var pixelPosition = tryForPixel(imagedata, width, height , 0);

        data[ i + 0 ] = pixelPosition.x * sizeofObj; 
        data[ i + 1 ] = pixelPosition.y * sizeofObj; 
        data[ i + 2 ] = 0; 

        data[ i + 3 ] = pixelPosition.l * .00001 * sizeofObj;


      }

      return makeDataTexture( data );

    }

    function makeColorFromTextureImage(sizeOfObj, particles , texture){

      var imagedata = getImageData( texture.image );
      var particleData = particles.image.data

      var width = texture.image.width;
      var height = texture.image.height;

      var data = new Float32Array( SIZE * SIZE  * 4 );
      
      for( var i = 0; i < data.length; i += 4 ){

        var pixelPosition = tryForPixel(imagedata, width, height , 0);

        var x = Math.floor(((particleData[i+0] / sizeOfObj) + .5) * width);
        var y = Math.floor((-(particleData[i+1] / sizeOfObj)+.5) * height);


        var color = getPixel( imagedata , x , y );

        //if( i < 1000 ){ console.log( color );}
        data[ i + 0 ] = color.r/256; 
        data[ i + 1 ] = color.g/256; 
        data[ i + 2 ] = color.b/256; 

        data[ i + 3 ] = color.a/256;


      }

      return makeDataTexture( data );


      
    }

    function tryForPixel( imagedata, width, height , timesTried ){

      var x = Math.random();
      var y = Math.random();
      var w = Math.floor( width * x);
      var h = Math.floor( height * y);
      var color = getPixel( imagedata , w , h );
      var l = Math.max(Math.max( color.r , color.g), color.b) * 3;

      if( l > 10 ){ 
        return { x:x-.5 , y:.5-y , l:l }
      }else{

        if( timesTried < 10 ){
          //console.log( timesTried );
          return tryForPixel( imagedata, width, height, timesTried + 1);
        }else{
          return { x:x-.5 , y:.5-y , l:l }
        }
      }

    }




    function makeMeshTexture( geometry , triSize , triVariation){
  
      var data = new Float32Array( SIZE * SIZE  * 4 );
      
      for( var i = 0; i < data.length; i += 4 ){

        var randomFace = geometry.faces[ Math.floor( Math.random() * geometry.faces.length)];

        v1 = geometry.vertices[ randomFace.a ];
        v2 = geometry.vertices[ randomFace.b ];
        v3 = geometry.vertices[ randomFace.c ];
        

        var f = randomPositionInTriangle( v1 , v2 , v3 );
        data[ i + 0 ] = f.x; 
        data[ i + 1 ] = f.y; 
        data[ i + 2 ] = f.z; 

        //console.log( f.x );
        data[ i + 3 ] = triSize + triVariation * (Math.random()-.5)

      }

      return makeDataTexture( data );

    }

    function makeMeshNoiseTexture( geometry , triSize, noiseSize, noiseVal ){
  
      var data = new Float32Array( SIZE * SIZE  * 4 );
      
      for( var i = 0; i < data.length; i += 4 ){

        var randomFace = geometry.faces[ Math.floor( Math.random() * geometry.faces.length)];

        v1 = geometry.vertices[ randomFace.a ];
        v2 = geometry.vertices[ randomFace.b ];
        v3 = geometry.vertices[ randomFace.c ];
        

        var f = randomPositionInTriangle( v1 , v2 , v3 );
        data[ i + 0 ] = f.x; 
        data[ i + 1 ] = f.y; 
        data[ i + 2 ] = f.z; 

        //console.log( f.x );
        f.multiplyScalar( noiseSize );

        data[ i + 3 ] = triSize + noiseVal * Math.abs(sNoise.noise3D( f.x , f.y , f.z ));

      }

      return makeDataTexture( data );

    }

    function randomPositionInTriangle( v1 , v2 , v3 ){

      fVec = new THREE.Vector3();

      tv1.copy( v2 );
      tv1.sub( v1 );

      tv2.copy( v3 );
      tv2.sub( v1 );

      fVec.copy( v1 );

      var r = Math.random();
      var s = Math.random();
      
      if((r + s) >= 1){

        r = 1 - r;
        s = 1 - s;

      }

      tv1.multiplyScalar( r );
      tv2.multiplyScalar( s );


      fVec.add( tv1 );
      fVec.add( tv2 );

      return fVec;
    }


    function makeDataTexture( data ){

      var texture = new THREE.DataTexture( 
        data,
        SIZE,
        SIZE,
        THREE.RGBAFormat,
        THREE.FloatType
      );

      texture.minFilter =  THREE.NearestFilter,
      texture.magFilter = THREE.NearestFilter,

      texture.needsUpdate = true;

      return texture;

    }

    function random( seed ) {

      return ('0.'+Math.sin(seed).toString().substr(6))
      // var x = Math.sin(seed++) * 10000;
      //return x - Math.floor(x);
    }
