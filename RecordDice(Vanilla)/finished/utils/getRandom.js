function getRandom(n) {
  return Math.round(Math.random() * n);
}

function getRandomMinMax(min = 0, max = 10) {
  return getRandom(max - min) + min;
}
