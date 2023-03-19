const shapes = [];

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

    const rx = document.getElementById("rotateX");
    const ry = document.getElementById("rotateY");
    const rz = document.getElementById("rotateZ");


    rx.addEventListener("input", function() {
        shapes[0].rotateX3D((rx.value));
        shapes[0].draw();
        });
    ry.addEventListener("input", function() {
        shapes[0].rotateY3D((ry.value));
        shapes[0].draw();
        });

    rz.addEventListener("input", function() {
        shapes[0].rotateZ3D((rz.value));
        shapes[0].draw();
        });

    // s.draw();

    const exportbtn = document.getElementById("export-btn");
    exportbtn.addEventListener("click", function() {
        exportShape(shapes);
    });

    const importbtn = document.getElementById("import-btn");
    importbtn.addEventListener("click", function() {
        importShape(shapes);
    });
}

function refresh() {
    console.log(shapes);
    shapes.forEach(shape => shape.draw());
}

function exportShape(shapes) {
    const data = JSON.stringify(shapes);
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
        shapes.splice(0, shapes.length);
        for (const shape of shapeJSON) {
            const newS = new Shape();
            newS.load(shape.faces);
            shapes.push(newS);
        }
        refresh();
    };

}