function perspectiveMatrix() {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 1,
        0, 0, 0, 1
    ];
}

function orthographicMatrix() {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]
}

function obliqueMatrix() {
    mOrth = [
        1, 0, (1 / Math.tan(Math.PI / 4)) * Math.cos(Math.PI / 4), 0,
        0, 1, (1 / Math.tan(Math.PI / 4)) * Math.sin(Math.PI / 4), 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];

    return mOrth;
}