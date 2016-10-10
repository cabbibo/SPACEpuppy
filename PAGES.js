
//TODO:
// target rotation texture
var MakePages = function(){
  sNoise = new SimplexNoise();

  firstLookup = makeSingleTexture( 1 , 0 );
  secondLookup = makeSingleTexture( 1 , 0.001 );

  cabbiboTexture = makeImageTexture(.3,  G.textures.cabbiboEnd );
  prismFlatLookup = makeImageTexture(.3,  G.textures.prismFlat );
  refractionFlatLookup = makeImageTexture(.3,  G.textures.refractionFlat );
  prismColor = makeColorFromTextureImage( .3 , prismFlatLookup, G.textures.prismFlat );

  opalImageLookup = makeImageTexture(.6,  G.textures.opal );
  opalImageColor = makeColorFromTextureImage(.6, opalImageLookup,  G.textures.opal );

  opal2ImageLookup = makeImageTexture(.6,  G.textures.opal2 );
  opal2ImageColor = makeColorFromTextureImage(.6, opal2ImageLookup,  G.textures.opal2 );

  randomRotationAxis = makeNormalizedTexture();
  verticalRotationAxis = makeVerticalTexture();
  

  multitudeTexture = makeMeshNoiseTexture( new THREE.IcosahedronGeometry( .4 , 4 ) , .004 , 3. , .04);
  emergenceRotationAxis = makeNoiseRotationTexture(multitudeTexture);

  opalTexture = makeOpalTexture(300 , 3 , 6 );
  opalRotationTexture = makeOpalRotationTexture(300, 3 , 6);

  opal2Texture = makeOpalTexture(50 , 10 , 40 );
  opal2RotationTexture = makeOpalRotationTexture(50, 10 , 40);
  opal2ColorTexture = makeOpalColorTexture(50, 10 , 40);



  sunTexture = makeMeshTexture( new THREE.IcosahedronGeometry( .1 , 4 ) , .008 , .0);
  sunColor = makeHueSphereTexture( sunTexture );
  

  //emergenceTexture = makeNoiseMeshTexture( new THREE.IcosahedronGeometry( .4 , 4 ) , .004 , .0);
  


  var PAGES = [

   {

    title                        : "Press SPACE to Turn Page",

    pageTurnTime                 : 1000,

    targetTexture                : firstLookup, //makeMeshTexture( new THREE.IcosahedronGeometry( .4 , 1 )  ),
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 100,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms    : {
                                    speed: 0,
                                    toTargetAxis:1,
                                    toTargetAngle:1,
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    brightness:0,
                                    reflectColorAmount:0,
                                    normalMapSize:.0,
                                    individualColorAmount:0,

                                    //semAmount:1
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0 , 0.02 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  },


  {

    title                        : "RAINBOWS",

    pageTurnTime                 : 1000,

    targetTexture                : firstLookup, //makeMeshTexture( new THREE.IcosahedronGeometry( .4 , 1 )  ),
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 100,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms    : {
                                    speed: 0,
                                    toTargetAxis:1,
                                    toTargetAngle:1,
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    brightness:0,
                                    reflectColorAmount:1,
                                    normalMapSize:.0,

                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0 , 0.02 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 

  {

    title                        : "SUN",
    titleColor                   : "#000",

    pageTurnTime                 : 1000,

    targetTexture                : firstLookup, //makeMeshTexture( new THREE.IcosahedronGeometry( .4 , 1 )  ),
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 100,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms    : {
                                    speed: 0,
                                    toTargetAxis:1,
                                    toTargetAngle:0,
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    brightness:1
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0 , 0.02 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 

    {

    title                        : "DISPERSED",
    titleColor                   : "#000",

    pageTurnTime                 : 1000,

    targetTexture                : firstLookup, //makeMeshTexture( new THREE.IcosahedronGeometry( .4 , 1 )  ),
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 100,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms    : {
                                    speed: 0,
                                    toTargetAxis:1,
                                    toTargetAngle:0,
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    brightness:0,
                                    hueUVSize:8,
                                    hueUVValue:1,
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0 , 0.02 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 
  
/*{

    title                        : "",
    titleColor                   : "#000",

    pageTurnTime                 : 1000,

    targetTexture                : firstLookup, //makeMeshTexture( new THREE.IcosahedronGeometry( .4 , 1 )  ),
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 100,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                   },

    targetRotationSimulationUniforms    : {
                                    speed: 0,
                                    toTargetAxis:1,
                                    toTargetAngle:0,
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    brightness:1,
                                    hueUVSize:0,
                                    hueUVValue:0,
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0 , 0.02 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 


  {

    title                        : "BEYOND",

    pageTurnTime                 : 1000,

    movementSize: 1,
    movementSpeed: .1,

    targetTexture                : sunTexture, //makeMeshTexture( new THREE.IcosahedronGeometry( .4 , 1 )  ),
    targetColorTexture           : sunColor,
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 100,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    movementSpeed:.01,
                                    movementSize:.01
                                   },

    targetRotationSimulationUniforms    : {
                                    speed: .1,
                                    toTargetAxis:1,
                                    toTargetAngle:0,
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    brightness:0,
                                    normalMapSize:.02,
                                    semAmount:1.,
                                    reflectColorAmount:1,
                                    individualColorAmount:.6
                                   },

    cameraPosition               : new THREE.Vector3( .01 , 0 , 0.01 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  },*/


    {

    title                        : "FAR",

    pageTurnTime                 : 1000,

    targetTexture                : sunTexture, //makeMeshTexture( new THREE.IcosahedronGeometry( .4 , 1 )  ),
    targetColorTexture           : sunColor,
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 100,
                                    dampening: .000001,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    movementSpeed:0,
                                    movementSize:0
                                   },

    targetRotationSimulationUniforms    : {
                                    speed: .1,
                                    toTargetAxis:1,
                                    toTargetAngle:0,
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    brightness:1,
                                    individualColorAmount:0,
                                    hueUVSize:-10,
                                    hueUVValue:0


                                   },

    cameraPosition               : new THREE.Vector3( 1 , 0 , 3.3 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 

 



  {

    title                        : "SPACE puppy",

    pageTurnTime                 : 1000,

    targetTexture                : sunTexture,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 0,
                                    dampening: .98,
                                    dispersion: .001,
                                    curlNoiseSize : 3.,
                                    audioDisplacement: 0,
                                    movementSpeed:.01,
                                    movementSize:2
                                   },

    targetRotationSimulationUniforms    : {
                                    speed: 0.,
                                    toTargetAxis:0,
                                    toTargetAngle:1,
                                    toVelocity:1
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    normalColorAmount:0,
                                    reflectColorAmount:.5,
                                    velocityColorAmount:.5,
                                    normalMapSize:.1,
                                    normalMapDepth:0,
                                    brightness:0,
                                    semAmount:1,
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0 , .7 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 

    /*{

    title                        : "CAN'T",

    pageTurnTime                 : 1000,

    targetTexture                : sunTexture,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 0,
                                    dampening: .9,
                                    dispersion: .01,
                                    curlNoiseSize : 3.,
                                    audioDisplacement: 0,
                                    movementSpeed:.0,
                                    movementSize:0
                                   },

    targetRotationSimulationUniforms    : {
                                    speed: 1.,
                                    toTargetAxis:1,
                                    toTargetAngle:0,
                                    toVelocity:0,
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    brightness:0,
                                    baseSize:0,
                                    simulationSize:0,
                                    audioSize:0,
                                    targetSize:0,
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0 , 4.3 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 

    {

    title                        : "YEARN",

    pageTurnTime                 : 1000,

    targetTexture                : firstLookup,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 100,
                                    dampening: .1,
                                    dispersion: .00,
                                    curlNoiseSize : 3.,
                                    audioDisplacement: 0,
                                    movementSpeed:0,
                                    movementSize:0
                                   },

    targetRotationSimulationUniforms    : {
                                    speed: 1.,
                                    toTargetAxis:1,
                                    toTargetAngle:0,
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    brightness:0,
                                    baseSize:0,
                                    simulationSize:.1,
                                    audioSize:0,
                                    targetSize:0,
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0 , .3 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, */

    {

    title                        : "STORIES",

    pageTurnTime                 : 1000,

    targetTexture                : secondLookup,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 1,
                                    dampening: .9,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    movementSpeed:.01,
                                    movementSize:.1
                                   },

    targetRotationSimulationUniforms    : {
                                    speed: 1.,
                                    toTargetAxis:0,
                                    toTargetAngle:0,
                                 
                                   },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    simulationSize:1,
                                    semAmount:1,
                                   },

    cameraPosition               : new THREE.Vector3( .1 , 0 , .2 ),
    cameraTarget                 : new THREE.Vector3( .1 , 0 , 0 ),


  }, 



/*{

    title                        : "PRISM",

    pageTurnTime                 : 1000,

    targetTexture                : prismFlatLookup,
    targetColorTexture           : prismColor,
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 20,
                                    dampening: .8,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                     mouseRepel:.0001,
                                    mouseRepelRadius:0.01
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.,
                                      toTargetAxis:1,
                                      toTargetAngle:0,
                                 
                                   },
                                      

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    normalMapDepth:1,
                                    normalMapSize:.04,
                                    reflectColorAmount:0,
                                    normalColorAmount:0,
                                    velocityColorAmount:0,
                                    individualColorAmount:1,
                                    semAmount:1,
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0 , .2 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0 , 0 ),


  }, 

   {

    title                        : "INDEX OF REFRACTION",

    pageTurnTime                 : 1000,

    targetTexture                : prismFlatLookup,
    targetColorTexture           : prismColor,
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 20,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    movementSpeed:1,
                                    movementSize:.0
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.,
                                      toTargetAxis:1,
                                      toTargetAngle:0,
                                 
                                   },
                                      

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    individualColorAmount:0,
                                   // reflectColorAmount:1,
                                    velocityColorAmount:0,
                                    individualColorAmount:1,
                                    normalMapDepth:1,
                                    normalMapSize:.2,
                                   },

    cameraPosition               : new THREE.Vector3( -.037 , 0.015 , .05 ),
    cameraTarget                 : new THREE.Vector3( -.037 , 0.015 , 0 ),


  }, 

    {

    title                        : "CORNERS",

    pageTurnTime                 : 1000,

    targetTexture                : prismFlatLookup,
    targetColorTexture           : prismColor,
    target2Texture               : verticalRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 1,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    movementSpeed:1,
                                    movementSize:.0,
                                     mouseRepel:0,
                                    mouseRepelRadius:0
                                   },

    targetRotationSimulationUniforms : {
                                      speed: .2,
                                      toTargetAxis:1,
                                      toTargetAngle:1,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    reflectColorAmount:0,
                                    normalColorAmount:0,
                                    normalMapDepth:1,
                                    normalMapSize:1,
                                    velocityColorAmount:0,
                                    audioColorAmount:1,
                                    velocityColorAmount:0,
                                    individualColorAmount:0,
                                    semAmount:0,
                                   },

    cameraPosition               : new THREE.Vector3( -.041 , 0.017 , .005 ),
    cameraTarget                 : new THREE.Vector3( -.041 , 0.017 , 0 ),


  }, */


  {

    title                        : "MULTITUDE",

    pageTurnTime                 : 1000,

    targetTexture                : multitudeTexture,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 10,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    movementSpeed:.01,
                                    movementSize:.3,
                                    mouseRepel:.1,
                                    mouseRepelRadius:.1


                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.2,
                                      toTargetAxis:1,
                                      toTargetAngle:0,
                                 
                                   
                                      },



    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    baseSize: .004,
                                    simulationSize:0,
                                    reflectColorAmount:0,
                                    audioColorAmount:1,
                                    semAmount:1,

                                    normalColorAmount:0,
                                    normalMapDepth:1,
                                    normalMapSize:1,
                                    velocityColorAmount:0,
                                    velocityColorAmount:0,
                                    individualColorAmount:0,
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0.0 , .3 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0.0 , 0 ),


  }, 

  {

    title                        : "EMERGENCE",

    pageTurnTime                 : 1000,

    targetTexture                : multitudeTexture,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : emergenceRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 5,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    movementSpeed:.01,
                                    movementSize:.3,
                                     mouseRepel:0,
                                    mouseRepelRadius:0
                                   },

    targetRotationSimulationUniforms : {
                                      speed: .3,
                                      toTargetAxis:1,
                                      toTargetAngle:.8,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    baseSize: 0,
                                    simulationSize:.5,
                                    audioColorAmount:0,
                                    reflectColorAmount:1,
                                    normalColorAmount:0,
                                    //audioDisplacement:-.006,
                                    normalMapDepth:1,
                                    normalMapSize:.04,
                                    //normalColorAmount:1,
                                    semAmount:0,
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0.0 , .25 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0.0 , 0 ),


  }, 

  {

    title                        : "OPALS",

    pageTurnTime                 : 1000,

    targetTexture                : opal2Texture,
    targetColorTexture           : opal2ColorTexture,
    target2Texture               : opal2RotationTexture,

    targetSimulationUniforms     : {
                                    toTargetForce: 50,
                                    dampening: .9,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    movementSpeed:.2,
                                    movementSize:.0
                                   },

    targetRotationSimulationUniforms : {
                                      speed: .02,
                                      toTargetAxis:1,
                                      toTargetAngle:1,
                                      toVelocity:0,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    audioColorAmount:0,
                                    reflectColorAmount:1,
                                    audioDisplacement:.0,
                                    normalMapSize:.04,
                                    normalMapDepth:1,
                                    individualColorAmount:.5,
                                    matchHueAmount:0,
                                    simulationSize:.1,
                                    semAmount:.5
                                   },

    cameraPosition               : new THREE.Vector3( 0.1 , 0.03 , .1 ),
    cameraTarget                 : new THREE.Vector3( 0.1 , 0.03 , 0 ),


  }, 

    {

    title                        : "ALIGN",

    pageTurnTime                 : 1000,

    targetTexture                : opal2Texture,
    targetColorTexture           : opal2ColorTexture,
    target2Texture               : opal2RotationTexture,

    targetSimulationUniforms     : {
                                    toTargetForce: 1,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    movementSpeed:.02,
                                    movementSize:1
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.2,
                                      toTargetAxis:1,
                                      toTargetAngle:1,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    normalMapDepth:1,
                                    normalMapSize:.001,
                                    reflectColorAmount:1,
                                    //individualColorAmount:.3,
                                    simulationSize:0.,
                                    baseSize:.01,
                                    semAmount:.5
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0.0 , .6 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0.0 , 0 ),


  }, 

    {

    title                        : "SEARCH",

    pageTurnTime                 : 1000,

    targetTexture                : opalImageLookup,
    targetColorTexture           : opalImageColor,
    target2Texture               : opal2RotationTexture,

    targetSimulationUniforms     : {
                                    toTargetForce: 1,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    movementSpeed:.01,
                                    movementSize:.06
                                   },

    targetRotationSimulationUniforms : {
                                      speed: .2,
                                      toTargetAxis:0,
                                      toTargetAngle:0,
                                      toVelocity:1,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    normalMapDepth:1,
                                    normalMapSize:.001,
                                    reflectColorAmount:0,
                                    individualAudioAmount:.9,
                                    individualColorAmount:0,
                                    simulationSize:1.,
                                    baseSize:.001,
                                    semAmount:.5
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0.0 , .8 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0.0 , 0 ),


  }, 

    {

    title                        : "DISCOVERY",

    pageTurnTime                 : 1000,

    targetTexture                : opalImageLookup,
    targetColorTexture           : opalImageColor,
    target2Texture               : opal2RotationTexture,

    targetSimulationUniforms     : {
                                    toTargetForce: 1,
                                    dampening: .6,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    movementSpeed:.01,
                                    movementSize:1
                                   },

    targetRotationSimulationUniforms : {
                                      speed: .2,
                                      toTargetAxis:0,
                                      toTargetAngle:0,
                                      toVelocity:1,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    normalMapDepth:1,
                                    normalMapSize:.001,
                                    reflectColorAmount:.3,
                                    individualColorAmount:.9,
                                    simulationSize:2.,
                                    baseSize:.01,
                                    semAmount:.5
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0.0 , .8 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0.0 , 0 ),


  }, 

  {

    title                        : "FURTHER",

    pageTurnTime                 : 5000,

    targetTexture                : multitudeTexture,
    targetColorTexture           : opalImageColor,
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: .1,
                                    dampening: .95,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    movementSpeed:.01,
                                    movementSize:3
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.2,
                                      toTargetAxis:1,
                                      toTargetAngle:0,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    normalColorAmount:0,
                                    audioColorAmount:.5,
                                    reflectColorAmount:0.4,
                                    normalMapSize:.01,
                                    normalMapDepth:2,
                                    individualAudioAmount:1,
                                    individualColorAmount:0.7,
                                    matchHueAmount:0,
                                    simulationSize:1,
                                    baseSize:0
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0.0 , 1.6 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0.0 , 0 ),


  }, 


  {

    title                        : "GROW",

    pageTurnTime                 : 3000,

    targetTexture                : multitudeTexture,
    targetColorTexture           : opalImageColor,
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 1,
                                    dampening: .99,
                                    dispersion: 0,
                                    audioRadius: .4,
                                    audioPower: .01,
                                    audioDisplacement: 0,
                                    movementSpeed:.01,
                                    movementSize:4
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.2,
                                      toTargetAxis:1,
                                      toTargetAngle:0,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    velocityColorAmount:1,
                                    normalColorAmount:0,
                                    audioColorAmount:1,
                                    individualColorAmount: 0,
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0.0 , 1.5 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0.0 , 0 ),


  }, 


  /// Add in power of mouse here

    {

    title                        : "MORE",

    pageTurnTime                 : 1000,

    targetTexture                : multitudeTexture,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: .1,
                                    dampening: .99,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    movementSpeed:.1,
                                    movementSize:1,
                                    mouseRepel:.2,
                                    mouseRepelRadius:.1
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.2,
                                      toTargetAxis:1,
                                      toTargetAngle:0,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    biggerFartherAddition: .3,
                                    audioDisplacement: .02,
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0.0 , 2.5 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0.0 , 0 ),


  }, 

    {

    title                        : "MIRACLE",

    pageTurnTime                 : 1000,

    targetTexture                : multitudeTexture,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: .4,
                                    dampening: .8,
                                    dispersion: .03,
                                    audioRadius: .7,
                                    audioPower: .01,
                                    audioDisplacement: 0,
                                    movementSpeed:.01,
                                    movementSize:2,
                                    mouseRepel:.1,
                                    mouseRepelRadius:.1
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.2,
                                      toTargetAxis:1,
                                      toTargetAngle:0,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    audioSize: .02,
                                    simulationSize: 0,
                                    baseSize:.003,
                                    audioDisplacement: .02,
                                    biggerFartherAddition: .01,
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0.0 , 1.0 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0.0 , 0 ),


  }, 

  {

    title                        : "",

    pageTurnTime                 : 15000,

    targetTexture                : multitudeTexture,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 10.4,
                                    dampening: .5,
                                    dispersion: .00,
                                    audioRadius: .1,
                                    audioPower: .0,
                                    audioDisplacement: 0,
                                    movementSpeed:.01,
                                    movementSize:2,
                                    mouseRepel:.1,
                                    mouseRepelRadius:.1
                                   },

    targetRotationSimulationUniforms : {
                                      speed: 1.2,
                                      toTargetAxis:1,
                                      toTargetAngle:0,
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 1,
                                    colorValue: 1,
                                    rainbowValue: 0,
                                    audioSize: .02,
                                    simulationSize: 1,
                                    baseSize:.01,
                                    audioDisplacement: .00,
                                    biggerFartherAddition: .00,
                                    brightness:1.

                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0.0 , 8.0 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0.0 , 0 ),


  }, 

  {

    title                        : "",

    pageTurnTime                 : 5000,

    targetTexture                : multitudeTexture,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 10,
                                    dampening: .9,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    audioRadius: .4,
                                    audioPower: .005,
                                    movementSpeed:.1,
                                    movementSize:0,
                                    mouseRepel:.1,
                                    mouseRepelRadius:.02
                                   },

    targetRotationSimulationUniforms : {
                                      speed: .2,
                                      toTargetAxis:0,
                                      toTargetAngle:1,
                                      toVelocity:1
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                   
                                    audioSize:0,
                                    baseSize:0,
                                    simulationSize:0,
                                    audioDisplacement:.01,
                                    rainbowValue: 0,
                                    audioColorAmount:0,
                                    reflectColorAmount:0,
                                    velocityColorAmount:0,
                                    individualColorAmount: 0,
                                    semAmount:1.0,
                                    brightness:0,

                                    //audioDisplacement: .,
                                    biggerFartherAddition: 0.0,
                                   },

    cameraPosition               : new THREE.Vector3( 0 , 0.0 , .2 ),
    cameraTarget                 : new THREE.Vector3( 0 , 0.0 , 0 ),


  }, 

    {

    title                        : "<a href='http://twitter.com/share?text=What is SPACEpuppy???&url=http://cabbi.bo/SPACEpuppy'>Thank You / Share</a>",

    pageTurnTime                 : 1000,

    targetTexture                : cabbiboTexture,
    targetColorTexture           : makeRandomTexture( 1  ),
    target2Texture               : randomRotationAxis,

    targetSimulationUniforms     : {
                                    toTargetForce: 10,
                                    dampening: .9,
                                    dispersion: 0,
                                    audioDisplacement: 0,
                                    audioRadius: .4,
                                    audioPower: .005,
                                    movementSpeed:.1,
                                    movementSize:0,
                                    mouseRepel:.1,
                                    mouseRepelRadius:.02
                                   },

    targetRotationSimulationUniforms : {
                                      speed: .2,
                                      toTargetAxis:0,
                                      toTargetAngle:1,
                                      toVelocity:1
                                 
                                   
                                      },

    targetRenderUniforms         : {
                                    audioValue: 0,
                                    colorValue: 1,
                                    simulationSize: 1,
                                    audioSize:0,
                                    baseSize:0,
                                    audioDisplacement:.01,
                                    rainbowValue: 0,
                                    audioColorAmount:0,
                                    reflectColorAmount:0,
                                    velocityColorAmount:1,
                                    individualColorAmount: 0,
                                    semAmount:1.0,
                                    brightness:0,
                                    //audioDisplacement: .,
                                    biggerFartherAddition: 0.0,
                                   },

    cameraPosition               : new THREE.Vector3( -0.0 , -0.0 , .6 ),
    cameraTarget                 : new THREE.Vector3( -0.0 , -0.0 , 0 ),


  },








]

return PAGES

}