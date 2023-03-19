function vec4(x, y, z, w) {
    return [x, y, z, w];
}

function flatten(arr) {
    return arr.reduce((acc, val) => acc.concat(val), []);
}