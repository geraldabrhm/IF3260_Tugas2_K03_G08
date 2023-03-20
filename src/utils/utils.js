function vec4(x, y, z, w) {
  return [x, y, z, w];
}

function flatten(arr) {
  return arr.reduce((acc, val) => acc.concat(val), []);
}

const degToRad = (deg) => {
  return deg * (Math.PI / 180);
}