mTransform = {
    translate: (shiftX, shiftY, shiftZ) => {
        return [
            1,  0,  0,  0,
            0,  1,  0,  0,
            0,  0,  1,  0,
            shiftX, shiftY, shiftZ, 1,
        ];
    },

    rotateX: (angle) => {
        const cosVal = Math.cos(angle);
        const sinVal = Math.sin(angle);
        return [
            1, 0, 0, 0,
            0, cosVal, sinVal, 0,
            0, -sinVal, cosVal, 0,
            0, 0, 0, 1,
        ]
    },

    rotateY: (angle) => {
        const cosVal = Math.cos(angle);
        const sinVal = Math.sin(angle);
        return [
            cosVal, 0, -sinVal, 0,
            0, 1, 0, 0,
            sinVal, 0, cosVal, 0,
            0, 0, 0, 1,
        ]
    },

    rotateZ: (angle) => {
        const cosVal = Math.cos(angle);
        const sinVal = Math.sin(angle);
        return [
            cosVal, sinVal, 0, 0,
           -sinVal, cosVal, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ];
    },

    scale: (sx, sy, sz) => {
        return [
            sx, 0,  0,  0,
            0, sy,  0,  0,
            0,  0, sz,  0,
            0,  0,  0,  1,
        ];
    },
}