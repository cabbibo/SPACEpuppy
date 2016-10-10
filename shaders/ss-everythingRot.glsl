uniform sampler2D t_oPos;
uniform sampler2D t_pos;

uniform sampler2D t_fromSim1;
uniform sampler2D t_fromSim2;


// use alpha as size
uniform sampler2D t_target;
uniform sampler2D t_target2;

uniform float audioRepeller;
uniform float speed;
uniform float toTargetAxis;
uniform float toTargetAngle;
uniform float toVelocity;
//uniform float randVal;

const float randVal = 1.;

uniform vec2  resolution;

uniform float dT;
uniform vec3 centerPos;

$rand

void main(){

  vec2 uv = gl_FragCoord.xy / resolution;

  vec4 oPos = texture2D( t_oPos , uv );
  vec4 pos  = texture2D( t_pos  , uv );

  vec4 simPos = texture2D( t_fromSim1 , uv );
  vec4 oSimPos = texture2D( t_fromSim2 , uv );

  vec3 simVel = simPos.xyz - oSimPos.xyz;


  vec4 toRot = texture2D( t_target2 , uv );

  vec3 p = pos.xyz;

  float rX = rand( uv );
  float rY = rand( uv * 2. );
  float rZ = rand( uv * 10. );



  float rR = 1. + rand( uv * 20. );

  vec3 axis = vec3( pos.xyz );
  axis = normalize( axis );

  axis = mix( axis.xyz , toRot.xyz , toTargetAxis );

  axis = mix( axis , normalize( simVel ) , toVelocity);


  float angle = pos.w + rR * dT * speed;

  angle = mix( angle , toRot.w , toTargetAngle );

  gl_FragColor = vec4( axis , angle );


}
