/**
 * Initializes the WebGL context.
 */
const gl = WebGLUtils.setupWebGL(canvas, {
  preserveDrawingBuffer: true,
});
if (!gl) {
  alert("WebGL isn't available");
  throw new Error("WebGL isn't available");
}

/**
 * Sets the viewport and clears the canvas.
 */
gl.viewport(0, 0, canvas.width, canvas.height);
gl.clearColor(0.75, 0.85, 0.8, 1.0);
gl.clearDepth(1.0);
gl.enable(gl.DEPTH_TEST);
gl.depthFunc(gl.LEQUAL);
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
// gl.enable(gl.CULL_FACE);
// gl.cullFace(gl.FRONT);

/**
 * Creates the vertex and fragment shaders.
 */
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

/**
 * Sets the source code for the shaders.
 */
const vertexShaderText = `
  precision mediump float;
  
  attribute vec4 vertPosition;
  attribute vec4 vertColor;
  varying vec4 fragColor;
  uniform mat4 uMatrix;
  uniform mat4 projectionMatrix;
  
  void main()
  {
    fragColor = vertColor;
    gl_Position = projectionMatrix * uMatrix * vec4(vertPosition);
  }
`
gl.shaderSource(vertexShader, vertexShaderText);

const fragmentShaderText = `
  precision mediump float;
  
  varying vec4 fragColor;
  void main()
  {
    gl_FragColor = vec4(fragColor);
  }
`
gl.shaderSource(fragmentShader, fragmentShaderText);

/**
 * Compiles the shaders.
 */
gl.compileShader(vertexShader);
if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
  console.error(
    "ERROR compiling vertex shader!",
    gl.getShaderInfoLog(vertexShader)
  );
  throw new Error("ERROR compiling vertex shader!");
}

gl.compileShader(fragmentShader);
if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
  console.error(
    "ERROR compiling fragment shader!",
    gl.getShaderInfoLog(fragmentShader)
  );
  throw new Error("ERROR compiling fragment shader!");
}

/**
 * Creates the program and attaches the shaders.
 */
const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);
if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  console.error("ERROR linking program!", gl.getProgramInfoLog(program));
  throw new Error("ERROR linking program!");
}

/**
 * Validates the program.
 */
gl.validateProgram(program);
if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
  console.error("ERROR validating program!", gl.getProgramInfoLog(program));
  throw new Error("ERROR validating program!");
}

/**
 * Uses the program.
 */
gl.useProgram(program);

/**
 * function render(vertices)
 *
 * Renders the vertices to the canvas.
 */
function render(vertices, colors, matrix, type) {
  const bufferObject = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bufferObject);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(flatten(vertices)),
    gl.STATIC_DRAW
  );

  const positionAttribLocation = gl.getAttribLocation(program, "vertPosition");


  gl.vertexAttribPointer(
    positionAttribLocation, // Attribute location
    4,
    gl.FLOAT,
    gl.FALSE,
    0,
    0
  );

  const bufferColor = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bufferColor);

  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(flatten(colors)),
    gl.STATIC_DRAW
  );


  const colorAttribLocation = gl.getAttribLocation(program, "vertColor");

  gl.vertexAttribPointer(
    colorAttribLocation, // Attribute location
    4,
    gl.FLOAT,
    gl.FALSE,
    0,
    0
  );

  const matrixUniLocation = gl.getUniformLocation(program, "uMatrix");
  const projectionMatrix = gl.getUniformLocation(program, "projectionMatrix");

  gl.uniformMatrix4fv(matrixUniLocation, false, matrix);
  console.log(globalState.projectionType)

  if (globalState.projectionType == "perspective") {
    gl.uniformMatrix4fv(projectionMatrix, false, perspectiveMatrix(30, 1, -0.001, 10));
  }
  else if (globalState.projectionType == "orthographic") {
    console.log("AAAA")
    gl.uniformMatrix4fv(projectionMatrix, false, orthographicMatrix(-1, 1, -1, 1, 1, -1));
  } else {
    console.log("BBBB")
    gl.uniformMatrix4fv(projectionMatrix, false, obliqueMatrix(30));
  }

  gl.enableVertexAttribArray(positionAttribLocation);
  gl.enableVertexAttribArray(colorAttribLocation);

  gl.drawArrays(type, 0, vertices.length);
}