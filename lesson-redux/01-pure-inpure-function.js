/* Pure function ------------------------------------------------------------ */

function square(x) {
  return x * x;
}

const squareAll = (items) => items.map(square);


/* Inpure function ---------------------------------------------------------- */

function double(z) {
  fetchUpdate(z); // side effect
  return z * z;
}

const doubleAll = (items) => {
  for (let i = 0; i < items.length; i++) {
    items[i] = double(items[i]);
  }

  // return undefined;
};

async function fetchUpdate(item) {
  try {
    const response = await fetch('https://randomuser.me/api');
    const json = await response.json();
    localStorage.setItem('saveState', JSON.stringify(json));
  } catch (error) {
    throw new Error(error.message);
  }
}