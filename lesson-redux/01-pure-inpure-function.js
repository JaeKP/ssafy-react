/* Pure function ------------------------------------------------------------ */

function square(x) {
  return x * x;
}

const squareAll = (items) => items.map(square);

/* Inpure function ---------------------------------------------------------- */

function double(z) {
  updateInstanceZ(z); // side effect
  return z * z;
}

const doubleAll = (items) => {
  for (let i = 0; i < items.length; i++) {
    items[i] = double(items[i]);
  }

  // return undefined;
};
