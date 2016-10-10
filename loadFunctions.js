function beginLoad(){
  loadShaders();
  loadImages();
  //loadModels();
  loadAudio();
}

function loadShaders(){

  //shaders.load( 'ss-curlFront'    , 'sim'    , 'simulation' );

  G.loading.neededToLoad ++;

  shaders.load( 'ss-everything'    , 'sim'    , 'simulation' );
  shaders.load( 'ss-everythingRot' , 'simRot'    , 'simulation' );

  shaders.load( 'fs-prism'  , 'prism' , 'fragment'   );
  shaders.load( 'vs-prism'  , 'prism' , 'vertex'   );

  
  shaders.shaderSetLoaded = function(){
    onLoad();
  }

}



function loadImage(url){

  G.loading.neededToLoad ++;
  var r = THREE.RepeatWrapping;

  var t = THREE.ImageUtils.loadTexture(url, r , onLoad, onError);
  t.wrapT = t.wrapS = THREE.RepeatWrapping;
  return t;

}

function loadImages(){

  G.textures = {};

 // G.textures.matcap   = loadImage('img/rough-aluminium.jpg');
  
 // G.textures.normal   = loadImage('img/t_n_snakeSkin.png' );
  //G.textures.colorTex = loadImage('assets/Model.jpg' );
  G.textures.mystery   = loadImage('img/mystery.jpg' );
  G.textures.prismFlat   = loadImage('img/prismFlat.jpg' );
  G.textures.refractionFlat   = loadImage('img/refraction.png' );
  G.textures.normal = loadImage( 'img/normals/ice-snow.jpg' );
//  G.textures.cabbiboEnd = loadImage( 'img/cabbiboEnd.png' );
  G.textures.cabbiboEnd = loadImage( 'img/cabbibo1.png' );
  G.textures.sem = loadImage( 'img/matcap/test2.png' );
  G.textures.opal = loadImage( 'img/opal1.jpg' );
  G.textures.opal2 = loadImage( 'img/opal2.png' );
  //G.textures.normal = loadImage( 'img/normals/carbonFiber.png' );

}

function loadModels(){

  G.loading.neededToLoad += 1;

  var loader = new THREE.OBJLoader();
  var faceGeo,highGeo;
  /*loader.load( 'assets/low.obj', function ( object ) {


    object.traverse( function ( child ) {

      if ( child instanceof THREE.Mesh ) {

        if( child.name == "Model"){

          G.faceGeo = child.geometry
          G.faceGeo.computeFaceNormals();
          G.faceGeo.computeVertexNormals();

        }

      }

    } );

    onLoad();

  }, onProgress, onError );*/


  loader.load( 'assets/high.obj', function ( object ) {


    object.traverse( function ( child ) {

      if ( child instanceof THREE.Mesh ) {

        if( child.name == "Model"){

          G.highGeo = child.geometry
          G.highGeo.computeFaceNormals();
          G.highGeo.computeVertexNormals();

        }

      }

    } );

    onLoad();

  }, onProgress, onError );

}

function loadAudio(){

  //loadBuffer( "loveLoopBuffer"  , "audio/love.mp3"      );


  loadBuffer( "clickNoteBuffer" , "audio/switch.mp3"    );
  loadBuffer( "wrongNoteBuffer" , "audio/sounds/tangSound.mp3"    );




}

function loadBuffer(name , bufferFile){

  var aBuff = new AudioBuffer( G.audio , bufferFile);
  G[name] = aBuff;
  G.loading.neededToLoad += 1;
  aBuff.addLoadEvent(function(){
    onLoad();
  })

}

function onLoad(){

  G.loading.loaded ++;

  console.log( G.loading );


  if( G.loading.loaded == G.loading.neededToLoad ){

    finishedLoading();


  }

  loadDiv.style.width = (( G.loading.loaded / G.loading.neededToLoad ) * window.innerWidth) + "px" 

}

// TODO: these catch?
function onProgress(e){
  console.log( e );
}

function onError(e){
  console.log( e );
}

function finishedLoading(){
  init(); 
}