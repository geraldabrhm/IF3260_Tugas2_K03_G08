class Face {
    constructor() {
      this.vertices = [];
      this.colors = [];
    }
  
    getVertices() {
      return this.vertices;
    }

    addVertex(vertex) {
        this.vertices.push(vertex);
    }

    addColors(color) {
        this.colors.push(color);
    }

    draw() {
        render(this.vertices, this.colors, gl.TRIANGLE_FAN);
    }
  }