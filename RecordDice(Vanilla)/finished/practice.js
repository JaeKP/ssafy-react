/* global DiceSound, getRandomMinMax, visibleElement, invisibleElement, enableElement, disableElement, bindEvent, memo, animate */

(() => {
  /* -------------------------------------------------------------------------- */

  const diceSound = new DiceSound('/assets/rollingDiceSound.mp3');
  const FPS = 10;

  let isRollingDice = false;
  let cleanUp = null;
  let count = 0;
  let total = 0;

  /* -------------------------------------------------------------------------- */

  const buttonsInButtonGroup = document.querySelectorAll('.buttonGroup button');
  const rollingDiceButton = buttonsInButtonGroup.item(0);
  const recordButton = buttonsInButtonGroup.item(1);
  const resetButton = buttonsInButtonGroup.item(2);
  const dice = document.querySelector('.dice');

  /* -------------------------------------------------------------------------- */

  function rollingDice() {
    return getRandomMinMax(1, 6);
  }

  function startRollingDice() {
    cleanUp = animate(() => renderDice(rollingDice()), FPS);
  }

  function stopRollingDice() {
    cleanUp();
  }

  function renderDice(value = '?') {
    dice.value = value;
  }

  function renderRecordItem() {
    let diceNumber = +dice.value;
    total += diceNumber;

    memo('recordListTbody', () =>
      memo('recordListWrapper').querySelector('tbody')
    ).insertAdjacentHTML(
      'beforeend',
      /* html */ `
    <tr>
      <td>${++count}</td>
      <td>${diceNumber}</td>
      <td>${total}</td>
    </tr>
  `
    );
    disableElement(recordButton);

    memo('recordListWrapper').scrollTop =
      memo('recordListWrapper').scrollHeight;
  }

  /* -------------------------------------------------------------------------- */

  function handleRollingDice() {
    if (isRollingDice) {
      diceSound.stop();
      stopRollingDice();
      enableElement(recordButton);
      enableElement(resetButton);
    } else {
      diceSound.play();
      startRollingDice();
      disableElement(recordButton);
      disableElement(resetButton);
    }

    isRollingDice = !isRollingDice;
  }

  function handleRecord() {
    const recordListWrapper = memo('recordListWrapper', () =>
      document.querySelector('.recordListWrapper')
    );
    visibleElement(recordListWrapper);
    renderRecordItem();
  }

  function handleReset() {
    isRollingDice = false;
    cleanUp = null;
    count = 0;
    total = 0;

    renderDice();
    disableElement(recordButton);
    disableElement(resetButton);
    invisibleElement(memo('recordListWrapper'));
    memo('recordListTbody').innerHTML = '';
  }

  bindEvent(rollingDiceButton, 'click', handleRollingDice);
  bindEvent(recordButton, 'click', handleRecord);
  bindEvent(resetButton, 'click', handleReset);
})();
