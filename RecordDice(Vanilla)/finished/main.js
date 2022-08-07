function rollingDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function renderCounter(value) {
  counter.value = value ?? rollingDice();
}

function getStyle(node, prop) {
  return getComputedStyle(node).getPropertyValue(prop);
}

function calcIntStyle(node, prop) {
  return parseInt(getStyle(node, prop), 10);
}

function resetRecord() {
  recordIndex = 0;
  total = 0;
  recordListWrapper.hidden = true;
  recordListBody.innerHTML = '';
}

function enableButton(node) {
  node.disabled = false;
}

function disableButton(node) {
  node.disabled = true;
}

/* -------------------------------------------------------------------------- */

const recordCouter = document.getElementById('RecordCouter');
const counter = recordCouter.querySelector('.counter');
const buttonGroup = recordCouter.querySelector('.buttonGroup');
const [, recordButton, resetButton] = Array.from(buttonGroup.children);
const recordListWrapper = recordCouter.querySelector('.recordListWrapper');
const recordListCaption = recordListWrapper.querySelector('caption');
const recordListBody = recordListWrapper.querySelector('tbody');

/* global DiceSound */
const effectSound = new DiceSound('/assets/rollingDiceSound.mp3');

/* -------------------------------------------------------------------------- */

let FPS = 10;
let clearId;

let isRolling = false;
let recordIndex = 0;
let total = 0;
let maxHeight = calcIntStyle(recordListWrapper, 'max-height');

/* -------------------------------------------------------------------------- */

function handleRollingDice() {
  isRolling = true;
  effectSound.play();

  clearTimeout(clearId);

  function rolling() {
    renderCounter();
    clearId = setTimeout(rolling, 1000 / FPS);
  }

  rolling();
}

function handleStopRollingDice() {
  isRolling = false;
  effectSound.stop();
  clearTimeout(clearId);
  enableButton(recordButton);
  enableButton(resetButton);
}

function handleToggleRollingDice() {
  isRolling ? handleStopRollingDice() : handleRollingDice();
}

function handleResetCounter() {
  clearTimeout(clearId);
  renderCounter('?');
  resetRecord();
  disableButton(recordButton);
  disableButton(resetButton);
}

function handleRecord() {
  const { value } = counter;
  const newRecordRow = `
    <tr>
      <td>${++recordIndex}</td>
      <td>${value}</td>
      <td>${(total += +value)}</td>
    </tr>
  `;

  recordListWrapper.hidden = false;

  recordListBody.insertAdjacentHTML('beforeend', newRecordRow);

  let avaliHeight = maxHeight - recordListCaption.clientHeight;
  if (recordListWrapper.clientHeight > avaliHeight) {
    recordListWrapper.scrollTop = recordListWrapper?.scrollHeight;
  }
}
