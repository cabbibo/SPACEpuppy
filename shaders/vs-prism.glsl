
attribute vec3 triPos;
attribute float id;

uniform sampler2D t_pos;
uniform sampler2D t_oPos;
uniform sampler2D t_target;
uniform sampler2D t_targetCol;
uniform sampler2D t_rot;
uniform sampler2D t_col;
uniform sampler2D t_audio;

uniform float biggerFartherAddition;
uniform float audioDisplacement;

uniform float simulationSize;
uniform float baseSize;
uniform float targetSize;
uniform float audioSize;

varying vec3 vNorm;
varying vec3 vCol;

varying vec2 vUv;
varying vec3 vPos;

varying float vID;
varying vec2 vOffset;


// TODO:

varying vec3 vColor;
varying vec3 vAudio;

varying vec3 vVel;

$rand

mat4 rotationMatrix(vec3 axis, float angle)
{
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

void main(){

  vec4 pos = texture2D( t_pos , position.xy );
  vec4 target = texture2D( t_target , position.xy );

  vec4 oPos = texture2D( t_oPos , position.xy );
  vec4 quat = texture2D( t_rot , position.xy );


  vec3 vDif = pos.xyz - target.xyz;
  vVel = pos.xyz - oPos.xyz;

  vColor = texture2D(t_targetCol, position.xy).xyz;
  vAudio = texture2D( t_audio , vec2( id / 1000000. , 0.)).xyz;

  vUv = uv;

  vID = id;

  vOffset = vec2( rand( vec2(vID * 10. , vID * 20.) ), rand( vec2(vID * 12. , vID * 25.) ) );



  float size = baseSize;
  size += pos.a * simulationSize;
  size += target.a * targetSize;
  size += length( vAudio ) * audioSize;
  size += (length(vDif) * biggerFartherAddition );


  if( size > 0.0001 ){

  mat4 rot = rotationMatrix( quat.xyz , quat.w );

  vNorm = (rot * vec4( normal, 0.)).xyz;


  pos.xyz += (rot * vec4( (triPos * size ) , 1. )).xyz;
  pos.xyz += vNorm * audioDisplacement * size * length( vAudio );


  vec3 dif = cameraPosition - pos.xyz;

  }else{ pos = vec4( 0., 0., 0., 0.); }

  vPos = ( modelMatrix * vec4( pos.xyz , 1. ) ).xyz;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( pos.xyz , 1. );


}
