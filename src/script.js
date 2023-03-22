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

window.onload = function main() {

    // const v1 = vec4(0.5,0.5,-0.5, 1);
    // const c1 = vec4(1,0,0,1);
    // const v2 = vec4(0.5,-0.5,-0.5, 1);
    // const c2 = vec4(1,0,0,1);
    // const v3 = vec4(-0.5,-0.5,-0.5, 1);
    // const c3 = vec4(1,0,0,1);
    // const v4 = vec4(-0.5,0.5,-0.5, 1);
    // const c4 = vec4(1,0,0,1);

    // const f1 = new Face([],[]);
    // f1.addVertex(v1);
    // f1.addColors(c1);
    // f1.addVertex(v2);
    // f1.addColors(c2);
    // f1.addVertex(v3);
    // f1.addColors(c3);
    // f1.addVertex(v4);
    // f1.addColors(c4);

    // const v5 = vec4(0.5,0.5,0.5, 1);
    // const c5 = vec4(0,1,0,1);
    // const v6 = vec4(0.5,-0.5,0.5, 1);
    // const c6 = vec4(0,1,0,1);
    // const v7 = vec4(-0.5,-0.5,0.5, 1);
    // const c7 = vec4(0,1,0,1);
    // const v8 = vec4(-0.5,0.5,0.5, 1);
    // const c8 = vec4(0,1,0,1);

    // const f2 = new Face([],[]);
    // f2.addVertex(v5);
    // f2.addColors(c5);
    // f2.addVertex(v6);
    // f2.addColors(c6);
    // f2.addVertex(v7);
    // f2.addColors(c7);
    // f2.addVertex(v8);
    // f2.addColors(c8);

    // //build a cobe from 6 faces
    // const v9 = vec4(0.5,0.5,-0.5, 1);
    // const c9 = vec4(0,0,1,1);
    // const v10 = vec4(0.5,-0.5,-0.5, 1);
    // const c10 = vec4(0,0,1,1);
    // const v11 = vec4(0.5,-0.5,0.5, 1);
    // const c11 = vec4(0,0,1,1);
    // const v12 = vec4(0.5,0.5,0.5, 1);
    // const c12 = vec4(0,0,1,1);

    // const f3 = new Face([],[]);
    // f3.addVertex(v9);
    // f3.addColors(c9);
    // f3.addVertex(v10);
    // f3.addColors(c10);
    // f3.addVertex(v11);
    // f3.addColors(c11);
    // f3.addVertex(v12);
    // f3.addColors(c12);

    // //continue the pattern
    // const v13 = vec4(-0.5,0.5,-0.5, 1);
    // const c13 = vec4(1,1,0,1);
    // const v14 = vec4(-0.5,-0.5,-0.5, 1);
    // const c14 = vec4(1,1,0,1);
    // const v15 = vec4(-0.5,-0.5,0.5, 1);
    // const c15 = vec4(1,1,0,1);
    // const v16 = vec4(-0.5,0.5,0.5, 1);
    // const c16 = vec4(1,1,0,1);
    
    // const f4 = new Face([],[]);
    // f4.addVertex(v13);
    // f4.addColors(c13);
    // f4.addVertex(v14);
    // f4.addColors(c14);
    // f4.addVertex(v15);
    // f4.addColors(c15);
    // f4.addVertex(v16);
    // f4.addColors(c16);

    // const v17 = vec4(0.5,0.5,0.5, 1);
    // const c17 = vec4(1,0,1,1);
    // const v18 = vec4(0.5,0.5,-0.5, 1);
    // const c18 = vec4(1,0,1,1);
    // const v19 = vec4(-0.5,0.5,-0.5, 1);
    // const c19 = vec4(1,0,1,1);
    // const v20 = vec4(-0.5,0.5,0.5, 1);
    // const c20 = vec4(1,0,1,1);
    
    // const f5 = new Face([],[]);
    // f5.addVertex(v17);
    // f5.addColors(c17);
    // f5.addVertex(v18);
    // f5.addColors(c18);
    // f5.addVertex(v19);
    // f5.addColors(c19);
    // f5.addVertex(v20);
    // f5.addColors(c20);

    // const v21 = vec4(0.5,-0.5,0.5, 1);
    // const c21 = vec4(0,1,1,1);
    // const v22 = vec4(0.5,-0.5,-0.5, 1);
    // const c22 = vec4(0,1,1,1);
    // const v23 = vec4(-0.5,-0.5,-0.5, 1);
    // const c23 = vec4(0,1,1,1);
    // const v24 = vec4(-0.5,-0.5,0.5, 1);
    // const c24 = vec4(0,1,1,1);

    // const f6 = new Face([],[]);
    // f6.addVertex(v21);
    // f6.addColors(c21);
    // f6.addVertex(v22);
    // f6.addColors(c22);
    // f6.addVertex(v23);
    // f6.addColors(c23);
    // f6.addVertex(v24);
    // f6.addColors(c24);
    

    // const s = new Shape()
    // s.addFace(f1);
    // s.addFace(f2);
    // s.addFace(f3);
    // s.addFace(f4);
    // s.addFace(f5);
    // s.addFace(f6);

    // shapes.push(s);

    // refresh();

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