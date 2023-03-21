function defaultGlobalState() {
    return {
        projectionType: "orthographic", // orthographic, oblique, perspective
        cameraRadius: 1,
        cameraRotation: 0,
    }
}

function defaultShapeState() {
    return {
        translation: [0, 0, 0],
        rotation: [0, 0, 0],
        scale: [1, 1, 1]
    };
}

const globalState = defaultGlobalState();
const shapes = [];
const transformationStates = [];
const transformedShapes = [];
let currentShapeIndex = 0;
let cameraMatrix = null;



