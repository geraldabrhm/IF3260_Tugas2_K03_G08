class Shape {
    constructor() {
      this.faces = [];
      this.matTransform = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1,
      ]; // default identity matrix
    }

    load(faces) {
        // console.log(faces); // ! Debug
        for (const vertcol of faces) {
            const face = new Face();
            for (const vert of vertcol.vertices) {
                face.addVertex(vert);
            }
            for (const col of vertcol.colors) {
                face.addColors(col);
            }
            this.faces.push(face);
        }
        // console.log(this.faces); // ! Debug
    }
  
    getFaces() {
      return this.faces;
    }

    addFace(face) {
        this.faces.push(face);
    }

    getCentroid() {
        let centroid = [0, 0, 0];
        let totalVertices = 0;
        this.faces.forEach(face => {
            totalVertices += face.vertices.length;
            for (let i = 0; i < face.vertices.length; i++) {
                const [x, y, z, w] = face.getVertices()[i];
                centroid[0] += x;
                centroid[1] += y;
                centroid[2] += z;
            }
        });
        
        centroid[0] /= totalVertices;
        centroid[1] /= totalVertices;
        centroid[2] /= totalVertices;

        return centroid;
    }

    generateTransformedShape(transformationState) {
        let transformedShape = new Shape();
        let transformationMatrix = generateTransformationMatrix(transformationState, this.getCentroid());

        transformedShape.load(this.getFaces());
        transformedShape.faces.forEach(face => {
            for (let i = 0; i < face.vertices.length; i++) {
                face.getVertices()[i] = vec4multmat4(face.getVertices()[i], transformationMatrix);
            }
        });

        return transformedShape;
    }

    // translate(shiftX, shiftY, shiftZ) {
    //     this.faces.forEach(face => {
    //         for (let i = 0; i < face.vertices.length; i++) {
    //             const [x, y, z, w] = face.getVertices()[i];
    //             console.info(x,y,z,w); // ! Debug
    //             face.getVertices()[i][0] = x + shiftX;
    //             face.getVertices()[i][1] = y + shiftY;
    //             face.getVertices()[i][2] = z + shiftZ;
    //         }
    //     })
    // }

    // rotateY3D(theta) {
    //     const sinTheta = Math.sin(theta);
    //     const cosTheta = Math.cos(theta);
    //     this.faces.forEach(
    //         face => {
    //             for (let i = 0; i < face.vertices.length; i++) {
    //                 const [x, y, z, w] = face.vertices[i];
    //                 face.vertices[i] = [
    //                     x * cosTheta - z * sinTheta,
    //                     y,
    //                     x * sinTheta + z * cosTheta,
    //                     1.0
    //                 ];
    //             }
    //         }
    //     )
    // };

    // rotateX3D(theta) {
    //     const sinTheta = Math.sin(theta);
    //     const cosTheta = Math.cos(theta);
    //     this.faces.forEach(
    //         face => {
    //             for (let i = 0; i < face.vertices.length; i++) {
    //                 const [x, y, z, w] = face.vertices[i];
    //                 face.vertices[i] = [
    //                     x,
    //                     y * cosTheta - z * sinTheta,
    //                     y * sinTheta + z * cosTheta,
    //                     1.0
    //                 ];
    //             }
    //         }
    //     )
    // };

    // rotateZ3D(theta) {
    //     const sinTheta = Math.sin(theta);
    //     const cosTheta = Math.cos(theta);
    //     this.faces.forEach(
    //         face => {
    //             for (let i = 0; i < face.vertices.length; i++) {
    //                 const [x, y, z, w] = face.vertices[i];
    //                 face.vertices[i] = [
    //                     x * cosTheta - y * sinTheta,
    //                     x * sinTheta + y * cosTheta,
    //                     z,
    //                     1.0
    //                 ];
    //             }
    //         }
    //     )
    // };


    draw() {
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        this.faces.forEach(face => face.draw(this.matTransform));
        this.matTransform = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ];
        // console.log(this.faces); // ! Debug
    }
  }