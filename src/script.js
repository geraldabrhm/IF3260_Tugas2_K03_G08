const selectedModel = document.getElementById("selectedModel");
const selectedProjection = document.getElementById("selectedProjection");
const rotateX = document.getElementById("rotateX");
const rotateY = document.getElementById("rotateY");
const rotateZ = document.getElementById("rotateZ");
const translateX = document.getElementById("translateX");
const translateY = document.getElementById("translateY");
const translateZ = document.getElementById("translateZ");
const scaleX = document.getElementById("scaleX");
const scaleY = document.getElementById("scaleY");
const scaleZ = document.getElementById("scaleZ");
const cameraAngle = document.getElementById("cameraAngle");
const cameraRadius = document.getElementById("cameraRadius");
const lightPositionX = document.getElementById("lightPositionX");
const lightPositionY = document.getElementById("lightPositionY");
const lightPositionZ = document.getElementById("lightPositionZ");
const lightCheckbox = document.getElementById("lightCheckbox");

window.onload = function main() {

    rotateX.addEventListener("input", function() {
        transformationStates[currentShapeIndex].rotation[0] = rotateX.value;
        refresh();
    });
    rotateY.addEventListener("input", function() {
        transformationStates[currentShapeIndex].rotation[1] = rotateY.value;
        refresh();
    });
    rotateZ.addEventListener("input", function() {
        transformationStates[currentShapeIndex].rotation[2] = rotateZ.value;
        refresh();
    });

    translateX.addEventListener("input", e => {
        transformationStates[currentShapeIndex].translation[0] = translateX.value;
        refresh();
    });
    translateY.addEventListener("input", e => {
        transformationStates[currentShapeIndex].translation[1] = translateY.value;
        refresh();
    });
    translateZ.addEventListener("input", e => {
        transformationStates[currentShapeIndex].translation[2] = translateZ.value;
        refresh();
    });

    scaleX.addEventListener("input", e => {
        transformationStates[currentShapeIndex].scale[0] = scaleX.value;
        refresh();
    });
    scaleY.addEventListener("input", e => {
        transformationStates[currentShapeIndex].scale[1] = scaleY.value;
        refresh();
    });
    scaleZ.addEventListener("input", e => {
        transformationStates[currentShapeIndex].scale[2] = scaleZ.value;
        refresh();
    });

    cameraAngle.addEventListener("input",  () => {
        globalState.cameraRotation = cameraAngle.value;
        refresh();
    });
    
    cameraRadius.addEventListener("input", () => {
        globalState.cameraRadius = cameraRadius.value;
        refresh();
    });

    lightPositionX.addEventListener("input", () => {
        globalState.lightPosition[0] = lightPositionX.value;
        refresh();
    });

    lightPositionY.addEventListener("input", () => {
        globalState.lightPosition[1] = lightPositionY.value;
        refresh();
    });

    lightPositionZ.addEventListener("input", () => {
        globalState.lightPosition[2] = lightPositionZ.value;
        refresh();
    });

    lightCheckbox.addEventListener("change", () => {
        if (lightCheckbox.checked) {
            gl.clearColor(0.0, 0.0, 0.0, 0.8);
            globalState.isLight = 1;
        } else {       
            gl.clearColor(0.75, 0.85, 0.8, 1.0);
            globalState.isLight = 0;
        }
        refresh();
    });

    const exportbtn = document.getElementById("export-btn");
    exportbtn.addEventListener("click", function() {
        exportShape();
    });

    const exportCurrentbtn = document.getElementById("export-current-btn");
    exportCurrentbtn.addEventListener("click", function() {
        exportCurrentShape();
    });

    const importbtn = document.getElementById("import-btn");
    importbtn.addEventListener("click", function() {
        importShape(shapes);
    });
}

function refresh() {
    // console.log(shapes); // ! Debug
    // console.log(transformedShapes); // ! Debug

    // Handle camera matrix transformation
    const translateRMatrix = mTransform.translate(0, 0, globalState.cameraRadius); 
    cameraMatrix = mTransform.rotateY(degToRad(globalState.cameraRotation));
    cameraMatrix = mat4mult(cameraMatrix, translateRMatrix);
    
    const viewTransformMatrix = mUtil.inverseMat4(cameraMatrix);


    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    for (let i = 0; i < shapes.length; i++) {
        transformedShapes[i] = shapes[i].generateTransformedShape(transformationStates[i], viewTransformMatrix);
        transformedShapes[i].draw();
    }
}

function exportShape() {
    const data = JSON.stringify(transformedShapes);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "test.json";
    document.body.appendChild(link);
    link.click();
}

function exportCurrentShape() {
    const data = JSON.stringify([transformedShapes[currentShapeIndex]]);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "test.json";
    document.body.appendChild(link);
    link.click();
}

function importShape() {
    const file = document.getElementById("file-input").files[0];
    if (file === undefined) {
        alert("no file selected");
        return;
    }

    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = (evt) => {
        const shapeJSONstr = evt.target.result;
        const shapeJSON = JSON.parse(shapeJSONstr);
        for (const shape of shapeJSON) {
            const newS = new Shape();
            // console.info(newS); // ! Debug
            newS.load(shape.faces);
            // console.info(newS); // ! Debug
            shapes.push(newS);
            transformationStates.push(defaultShapeState());
        }
        setupModelSelector();
        setupModelControls();
        refresh();
    };
}

function setupModelSelector() {
    let newValues = "";

    for (let i = 0; i < shapes.length; i++) {
        newValues += '<option value="' + i.toString() + '">Shape-' + i.toString() + '</option>';
    }

    selectedModel.innerHTML = newValues;
    selectedModel.value = shapes.length-1;
}

function setupModelControls() {
    // console.log(transformationStates); // ! Debug
    currentShapeIndex = selectedModel.value;
    // console.log(currentShapeIndex); // ! Debug
    const allInput = document.querySelectorAll("#model-configuration > input");

    if (shapes.length > 0) {
        Array.from(allInput, input => input.removeAttribute("disabled"));

        rotateX.value = transformationStates[currentShapeIndex].rotation[0];
        rotateY.value = transformationStates[currentShapeIndex].rotation[1];
        rotateZ.value = transformationStates[currentShapeIndex].rotation[2];
        translateX.value = transformationStates[currentShapeIndex].translation[0];
        translateY.value = transformationStates[currentShapeIndex].translation[1];
        translateZ.value = transformationStates[currentShapeIndex].translation[2];
        scaleX.value = transformationStates[currentShapeIndex].scale[0];
        scaleY.value = transformationStates[currentShapeIndex].scale[1];
        scaleZ.value = transformationStates[currentShapeIndex].scale[2];
    } else {
        Array.from(allInput, input => input.setAttribute("disabled", ""));

        rotateX.value = 0;
        rotateY.value = 0;
        rotateZ.value = 0;
        translateX.value = 0;
        translateY.value = 0;
        translateZ.value = 0;
        scaleX.value = 1;
        scaleY.value = 1;
        scaleZ.value = 1;
    }
}

function setProjectionType() {
    globalState.projectionType = selectedProjection.value;
    refresh();
}