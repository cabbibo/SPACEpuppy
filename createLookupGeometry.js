  function createLookupGeometry( size ){        
        
    var geo = new THREE.BufferGeometry();

    // Lookups
    var positions = new Float32Array(  size * size * 3 * 12 );
    var normals = new Float32Array(  size * size * 3 * 12 );

    var uvs = new Float32Array(  size * size * 2 * 12 );
    var ids = new Float32Array(  size * size * 1 * 12 );

    // position in tetrahedron
    var triPos = new Float32Array(  size * size * 3 * 12 );

    for ( var i = 0, j = 0, l = positions.length / 3; i < l; i ++, j += 3 ) {

      var f = Math.floor( i / 12 );
      positions[ j     ] = ( f % size ) / size;
      positions[ j + 1 ] = Math.floor( f / size ) / size;
      positions[ j + 2 ] = 0;
    
    }

    var v1 = new THREE.Vector3(  1 ,  1,  1);
    var v2 = new THREE.Vector3( -1 , -1,  1);
    var v3 = new THREE.Vector3( -1 ,  1, -1);
    var v4 = new THREE.Vector3(  1 , -1, -1);

    var s6 = Math.sqrt( 6 );
    var s3 = Math.sqrt( 3 );
    var t3 = ( 1/3 );

    var v1 = new THREE.Vector3( 0 , (1/6) *s6 , 0 );
    var v2 = new THREE.Vector3( (1/3) * s3, -(1/6) *s6 , 0 );
    var v3 = new THREE.Vector3( -(1/6) * s3 ,-(1/6) *s6 , 1/2 );
    var v4 = new THREE.Vector3( -(1/6) * s3 ,-(1/6) *s6, -1/2   );


    var t1 = new THREE.Vector3();
    var t2 = new THREE.Vector3();

    var fNorms = [];

    t1.copy( v2 );
    t1.sub( v1 );
    t2.copy( v2);
    t2.sub( v3 );

    fNorms[0] = new THREE.Vector3();
    fNorms[0].crossVectors( t2 , t1 );
    fNorms[0].normalize();

    t1.copy( v4 );
    t1.sub( v1 );
    t2.copy( v4);
    t2.sub( v2 );

    fNorms[1] = new THREE.Vector3();
    fNorms[1].crossVectors( t2 , t1 );
    fNorms[1].normalize();

    t1.copy( v3 );
    t1.sub( v1 );
    t2.copy( v3);
    t2.sub( v4 );

    fNorms[2] = new THREE.Vector3();
    fNorms[2].crossVectors( t2 , t1 );
    fNorms[2].normalize();

    t1.copy( v2 );
    t1.sub( v3 );
    t2.copy( v2);
    t2.sub( v4 );

    fNorms[3] = new THREE.Vector3();
    fNorms[3].crossVectors( t2 , t1 );

    fNorms[3].normalize();


    for ( var i = 0, j = 0, l = triPos.length / 3; i < l; i ++, j += 3 ) {

      var f = Math.floor( i / 12 );

      var index = i % 12;

      if( index == 0 || index == 3 || index == 6 ){
        triPos[ j     ] = v1.x;
        triPos[ j + 1 ] = v1.y;
        triPos[ j + 2 ] = v1.z;
      }

      if( index == 1 || index == 5 || index == 10 ){
        triPos[ j     ] = v2.x;
        triPos[ j + 1 ] = v2.y;
        triPos[ j + 2 ] = v2.z;
      }

      if( index == 2 || index == 7 || index == 9 ){
        triPos[ j     ] = v3.x;
        triPos[ j + 1 ] = v3.y;
        triPos[ j + 2 ] = v3.z;
      }

      if( index == 4 || index == 8 || index == 11 ){
        triPos[ j     ] = v4.x;
        triPos[ j + 1 ] = v4.y;
        triPos[ j + 2 ] = v4.z;
      }

    
    }

    for ( var i = 0, j = 0, l = normals.length / 3; i < l; i ++, j += 3 ) {

      var f = Math.floor( i / 12 );

      var index = i % 12;

      face = Math.floor( index / 3 );

      normals[ j     ] = fNorms[face].x;
      normals[ j + 1 ] = fNorms[face].y;
      normals[ j + 2 ] = fNorms[face].z;
  
    
    }

    for ( var i = 0, j = 0, l = uvs.length / 2; i < l; i ++, j += 2 ) {

      var f = Math.floor( i / 12 );

      var index = i % 3;



      face = Math.floor( index / 3 );

      if( index == 0 ){

        uvs[ j     ] = 0;
        uvs[ j + 1 ] = 0;

      }else if( index == 1 ){

        uvs[ j     ] = 1;
        uvs[ j + 1 ] = 0;

      }else{

        uvs[ j     ] = .5;
        uvs[ j + 1 ] = 1;

      }


  
    
    }


    for ( var i = 0, j = 0, l = ids.length; i < l; i ++, j += 1 ) {

      var f = Math.floor( i / 12 );

      ids[ i ] = f;

    
    }





    var posA = new THREE.BufferAttribute( positions , 3 );
    var triA = new THREE.BufferAttribute( triPos , 3 );
    var norA = new THREE.BufferAttribute( normals , 3 );
    var uvA  = new THREE.BufferAttribute( uvs , 2 );
    var idA  = new THREE.BufferAttribute( ids , 1 );

    geo.addAttribute( 'position' , posA );
    geo.addAttribute( 'triPos'   , triA );
    geo.addAttribute( 'normal'   , norA );
    geo.addAttribute( 'uv'       , uvA );
    geo.addAttribute( 'id'       , idA );

    return geo;
    
  }