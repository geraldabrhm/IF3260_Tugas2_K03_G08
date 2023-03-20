const defaultGlobalState = {
    projectionType: "orthographic", // orthographic, oblique, perspective
    cameraRadius: 10,
    cameraRotation: 0
}

const defaultShapeState = {
    translation: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1]
}

const globalState = defaultGlobalState;
const shapes = [];
const transformationStates = [];
const transformedShapes = [];
let currentShapeIndex = 0;



